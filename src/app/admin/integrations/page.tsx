'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plug, Plus, RefreshCw, CheckCircle, AlertTriangle, Clock, XCircle, Key, Eye, EyeOff, Copy, Settings } from 'lucide-react';
import { integrations, COLORS } from '@/data/mockData';

const stIcons: Record<string, { icon: any, color: string }> = { connected: { icon: CheckCircle, color: 'text-teal-500' }, error: { icon: AlertTriangle, color: 'text-coral-500' }, pending: { icon: Clock, color: 'text-amber-500' }, disconnected: { icon: XCircle, color: 'text-gray-400' } };
const c = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const i = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

const usageData = [{ h: '00', r: 1200 }, { h: '02', r: 800 }, { h: '04', r: 600 }, { h: '06', r: 1500 }, { h: '08', r: 4200 }, { h: '10', r: 8900 }, { h: '12', r: 7800 }, { h: '14', r: 9200 }, { h: '16', r: 8500 }, { h: '18', r: 6200 }, { h: '20', r: 3800 }, { h: '22', r: 2100 }];
const apiKeys = [{ name: 'Production', key: 'tvos_prod_sk…9c2d', created: '2025-01-15', status: 'active' }, { name: 'Staging', key: 'tvos_stg_sk…1f5a', created: '2025-02-01', status: 'active' }];

export default function IntegrationsPage() {
    const [tab, setTab] = useState('integrations');
    const [show, setShow] = useState<Record<string, boolean>>({});
    const categories = [...new Set(integrations.map(i => i.category))];

    return (
        <motion.div variants={c} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={i} className="flex items-center justify-between"><div><h1 className="font-heading text-2xl font-bold text-gray-900">Integration Management</h1><p className="text-sm text-gray-500 mt-1">API connections, webhooks, and third-party services.</p></div><div className="flex gap-3"><button className="px-4 py-2 rounded-xl border border-gray-200 text-sm flex items-center gap-2"><RefreshCw size={15} /> Sync</button><button className="px-4 py-2 rounded-xl bg-gradient-to-r from-coral to-coral-dark text-white text-sm font-semibold flex items-center gap-2"><Plus size={15} /> Add</button></div></motion.div>
            <motion.div variants={i} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[{ l: 'Total', v: integrations.length.toString() }, { l: 'Connected', v: integrations.filter(i => i.status === 'connected').length.toString() }, { l: 'Errors', v: integrations.filter(i => i.status === 'error').length.toString() }, { l: 'API Calls Today', v: integrations.reduce((s, i) => s + i.requestsToday, 0).toLocaleString() }].map((s, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100"><span className="text-xs font-medium text-gray-500">{s.l}</span><div className="font-heading text-2xl font-bold text-gray-900 mt-2">{s.v}</div></div>
                ))}
            </motion.div>
            <motion.div variants={i}>
                <div className="flex bg-gray-100 rounded-xl p-0.5 w-fit mb-4">
                    {[{ k: 'integrations', l: 'Integrations', ic: Plug }, { k: 'api', l: 'API Keys', ic: Key }, { k: 'usage', l: 'Usage', ic: Settings }].map(t => (
                        <button key={t.k} className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${tab === t.k ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`} onClick={() => setTab(t.k)}><t.ic size={12} />{t.l}</button>
                    ))}
                </div>
            </motion.div>
            {tab === 'integrations' && <div className="space-y-6">{categories.map(cat => (
                <motion.div key={cat} variants={i}><h4 className="text-sm font-semibold text-gray-500 mb-3">{cat}</h4>
                    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-3">
                        {integrations.filter(ig => ig.category === cat).map(ig => {
                            const si = stIcons[ig.status] || stIcons.disconnected; return (
                                <div key={ig.id} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100 hover:shadow-card-hover transition-all">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold" style={{ background: ig.logoColor }}>{ig.name.slice(0, 2)}</div>
                                        <div><div className="text-sm font-semibold">{ig.name}</div><div className="flex items-center gap-1"><si.icon size={12} className={si.color} /><span className={`text-xs font-semibold capitalize ${si.color}`}>{ig.status}</span></div></div>
                                    </div>
                                    <div className="grid grid-cols-2 gap-2 text-xs text-gray-400">
                                        <span>Sync: {ig.lastSync}</span><span>{ig.requestsToday.toLocaleString()} req/day</span>
                                        <span className={ig.errorRate > 1 ? 'text-coral' : 'text-teal'}>{ig.errorRate}% errors</span>
                                    </div>
                                    <button className="w-full mt-3 py-1.5 rounded-lg border border-gray-200 text-xs font-medium hover:bg-gray-50 flex items-center justify-center gap-1"><Settings size={11} /> Configure</button>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            ))}</div>}
            {tab === 'api' && <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden"><div className="p-5 border-b border-gray-100 flex justify-between"><h3 className="font-heading text-base font-bold">API Keys</h3><button className="text-xs text-teal font-semibold flex items-center gap-1"><Plus size={12} /> Generate</button></div>
                <div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-gray-50"><tr>{['Name', 'Key', 'Created', 'Status', ''].map(h => <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>)}</tr></thead><tbody className="divide-y divide-gray-50">
                    {apiKeys.map((ak, idx) => <tr key={idx}><td className="px-5 py-3 font-semibold">{ak.name}</td><td className="px-5 py-3 flex items-center gap-2"><code className="text-xs bg-gray-100 px-2 py-0.5 rounded">{show[ak.name] ? ak.key.replace('…', '7a8b') : ak.key}</code><button className="text-gray-400" onClick={() => setShow(p => ({ ...p, [ak.name]: !p[ak.name] }))}>{show[ak.name] ? <EyeOff size={13} /> : <Eye size={13} />}</button><button className="text-gray-400"><Copy size={13} /></button></td><td className="px-5 py-3 text-xs">{ak.created}</td><td className="px-5 py-3"><span className="px-2 py-0.5 rounded-full bg-teal-50 text-teal text-xs font-semibold">{ak.status}</span></td><td className="px-5 py-3"><button className="text-xs text-coral font-semibold">Revoke</button></td></tr>)}
                </tbody></table></div>
            </motion.div>}
            {tab === 'usage' && <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100"><div className="p-5 border-b border-gray-100"><h3 className="font-heading text-base font-bold">API Usage (Today)</h3></div><div className="p-5 h-[320px]">
                <ResponsiveContainer width="100%" height="100%"><BarChart data={usageData}><CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" /><XAxis dataKey="h" tick={{ fontSize: 11, fill: '#8E95A9' }} axisLine={false} tickLine={false} /><YAxis tick={{ fontSize: 11, fill: '#8E95A9' }} axisLine={false} tickLine={false} tickFormatter={v => `${(v / 1000).toFixed(1)}k`} /><Tooltip contentStyle={{ background: '#fff', border: '1px solid #eee', borderRadius: 12 }} formatter={(v: any) => [`${v.toLocaleString()} requests`]} /><Bar dataKey="r" fill={COLORS.teal} radius={[4, 4, 0, 0]} name="Requests" /></BarChart></ResponsiveContainer>
            </div></motion.div>}
        </motion.div>
    );
}
