'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Key, AlertTriangle, Download, Search, Users } from 'lucide-react';
import { auditLog } from '@/data/mockData';

const sevColors: Record<string, { c: string, bg: string }> = { info: { c: 'text-teal', bg: 'bg-teal-50' }, warning: { c: 'text-amber', bg: 'bg-amber-50' }, critical: { c: 'text-coral', bg: 'bg-coral-50' } };
const c = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const i = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function CompliancePage() {
    const [tab, setTab] = useState('audit');
    return (
        <motion.div variants={c} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={i} className="flex items-center justify-between"><div><h1 className="font-heading text-2xl font-bold text-gray-900">Compliance & Security</h1><p className="text-sm text-gray-500 mt-1">Audit logs, permissions, GDPR compliance.</p></div><button className="px-4 py-2 rounded-xl border border-gray-200 text-sm flex items-center gap-2"><Download size={15} /> Export Log</button></motion.div>
            <motion.div variants={i} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[{ l: 'Audit Events (30d)', v: '12,847', ic: Eye, c: 'bg-navy-50 text-navy' }, { l: 'Active Users', v: '48', ic: Users, c: 'bg-teal-50 text-teal' }, { l: 'Security Alerts', v: '3', ic: AlertTriangle, c: 'bg-coral-50 text-coral' }, { l: 'DSAR Pending', v: '2', ic: Shield, c: 'bg-amber-50 text-amber' }].map((s, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100"><div className="flex justify-between mb-3"><span className="text-xs font-medium text-gray-500">{s.l}</span><div className={`w-9 h-9 rounded-xl ${s.c} flex items-center justify-center`}><s.ic size={18} /></div></div><div className="font-heading text-2xl font-bold text-gray-900">{s.v}</div></div>
                ))}
            </motion.div>
            <motion.div variants={i}>
                <div className="flex bg-gray-100 rounded-xl p-0.5 w-fit mb-4">
                    {[{ k: 'audit', l: 'Audit Log', ic: Eye }, { k: 'permissions', l: 'Permissions', ic: Key }, { k: 'security', l: 'Security', ic: Lock }].map(t => (
                        <button key={t.k} className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${tab === t.k ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`} onClick={() => setTab(t.k)}><t.ic size={12} />{t.l}</button>
                    ))}
                </div>
            </motion.div>
            {tab === 'audit' && <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden"><div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-gray-50"><tr>{['Severity', 'Timestamp', 'User', 'Action', 'Target', 'IP'].map(h => <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>)}</tr></thead><tbody className="divide-y divide-gray-50">
                {auditLog.map(e => {
                    const sev = sevColors[e.severity] || sevColors.info; return (
                        <tr key={e.id} className="hover:bg-gray-50/50"><td className="px-5 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${sev.bg} ${sev.c}`}>{e.severity}</span></td><td className="px-5 py-3 font-mono text-xs">{e.timestamp}</td><td className="px-5 py-3 font-medium">{e.user}</td><td className="px-5 py-3">{e.action}</td><td className="px-5 py-3"><span className="px-2 py-0.5 rounded-md bg-gray-100 text-xs">{e.target}</span></td><td className="px-5 py-3 font-mono text-xs text-gray-400">{e.ip}</td></tr>
                    );
                })}
            </tbody></table></div></motion.div>}
            {tab === 'security' && <motion.div variants={i} className="grid lg:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl shadow-card border border-gray-100"><div className="p-5 border-b border-gray-100"><h3 className="font-heading text-base font-bold text-gray-900">Security Alerts</h3></div><div className="p-5 space-y-3">
                    {[{ t: 'Failed login from suspicious IP (203.45.67.89)', s: 'critical', tm: '2h ago' }, { t: 'Unusual data export volume — Daniel Park', s: 'warning', tm: '5h ago' }, { t: 'SSL cert renewal required in 15 days', s: 'warning', tm: '1d ago' }].map((a, i) => {
                        const sev = sevColors[a.s]; return (
                            <div key={i} className="flex gap-3"><AlertTriangle size={16} className={`${sev.c} shrink-0 mt-0.5`} /><div><div className="text-sm">{a.t}</div><div className="text-xs text-gray-400">{a.tm}</div></div></div>
                        );
                    })}
                </div></div>
                <div className="bg-white rounded-2xl shadow-card border border-gray-100"><div className="p-5 border-b border-gray-100"><h3 className="font-heading text-base font-bold text-gray-900">Encryption Status</h3></div><div className="p-5 space-y-2.5">
                    {[{ f: 'Passport Numbers', m: 'AES-256' }, { f: 'Credit Cards', m: 'PCI DSS' }, { f: 'Email', m: 'AES-256' }, { f: 'Database', m: 'TDE' }, { f: 'API Transport', m: 'TLS 1.3' }].map(e => (
                        <div key={e.f} className="flex items-center justify-between py-1.5"><div className="flex items-center gap-2 text-sm"><Lock size={13} className="text-teal" />{e.f}</div><span className="px-2 py-0.5 rounded-md bg-teal-50 text-teal text-xs font-semibold">{e.m}</span></div>
                    ))}
                </div></div>
            </motion.div>}
        </motion.div>
    );
}
