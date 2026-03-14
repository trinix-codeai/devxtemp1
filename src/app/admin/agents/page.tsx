'use client';
import { motion } from 'framer-motion';
import { Search, TrendingUp, Signal, ArrowRight } from 'lucide-react';
import { agents, formatCurrency, avatarColors } from '@/data/mockData';

const c = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const i = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };
const statusColors: Record<string, string> = { online: 'bg-teal-500', away: 'bg-amber-500', offline: 'bg-gray-400' };

export default function AgentsPage() {
    return (
        <motion.div variants={c} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={i}><h1 className="font-heading text-2xl font-bold text-gray-900">Agent Oversight</h1><p className="text-sm text-gray-500 mt-1">Monitor performance, activity, and team KPIs.</p></motion.div>
            <motion.div variants={i} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[{ l: 'Total Agents', v: '48' }, { l: 'Online Now', v: agents.filter(a => a.status === 'online').length.toString() }, { l: 'Avg. Revenue', v: formatCurrency(agents.reduce((s, a) => s + a.revenue, 0) / agents.length) }, { l: 'Avg. Conversion', v: Math.round(agents.reduce((s, a) => s + a.conversionRate, 0) / agents.length) + '%' }].map((s, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100"><span className="text-xs font-medium text-gray-500">{s.l}</span><div className="font-heading text-2xl font-bold text-gray-900 mt-2">{s.v}</div></div>
                ))}
            </motion.div>
            <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex items-center gap-3"><Search size={15} className="text-gray-400" /><input className="flex-1 text-sm bg-transparent outline-none" placeholder="Search agents..." /></div>
                <div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-gray-50"><tr>{['Agent', 'Team', 'Revenue', 'Bookings', 'Conversion', 'Rating', 'Status', 'Target'].map(h => <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>)}</tr></thead><tbody className="divide-y divide-gray-50">
                    {agents.map((a, idx) => (
                        <tr key={a.id} className="hover:bg-gray-50/50 transition-colors cursor-pointer">
                            <td className="px-5 py-3 flex items-center gap-3"><div className="relative"><div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ background: avatarColors[idx % avatarColors.length] }}>{a.avatar}</div><div className={`absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white ${statusColors[a.status]}`} /></div><div><div className="font-semibold">{a.name}</div><div className="text-xs text-gray-400">{a.role}</div></div></td>
                            <td className="px-5 py-3 text-gray-500">{a.team}</td>
                            <td className="px-5 py-3 font-semibold text-teal">{formatCurrency(a.revenue)}</td>
                            <td className="px-5 py-3">{a.bookingsThisMonth}</td>
                            <td className="px-5 py-3"><span className={`font-semibold ${a.conversionRate >= 70 ? 'text-teal' : 'text-amber'}`}>{a.conversionRate}%</span></td>
                            <td className="px-5 py-3"><span className="text-amber-500">★</span> {a.rating}</td>
                            <td className="px-5 py-3"><span className={`inline-flex items-center gap-1 text-xs font-semibold capitalize`}><div className={`w-1.5 h-1.5 rounded-full ${statusColors[a.status]}`} />{a.status}</span></td>
                            <td className="px-5 py-3"><div className="flex items-center gap-2"><div className="flex-1 h-1.5 bg-gray-200 rounded-full"><div className="h-full rounded-full bg-teal" style={{ width: `${a.targetProgress}%` }} /></div><span className="text-xs font-semibold text-gray-500">{a.targetProgress}%</span></div></td>
                        </tr>
                    ))}
                </tbody></table></div>
            </motion.div>
        </motion.div>
    );
}
