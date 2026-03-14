'use client';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { DollarSign, TrendingUp, Clock, CheckCircle, Download } from 'lucide-react';
import { commissionData, bookings, formatCurrency, getStatusBadgeClass, COLORS } from '@/data/mockData';

const c = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function CommissionsPage() {
    return (
        <motion.div variants={c} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={i} className="flex items-center justify-between">
                <div><h1 className="font-heading text-2xl font-bold text-gray-900">Commission Tracker</h1><p className="text-sm text-gray-500 mt-1">Track earnings, payouts, and commission breakdown.</p></div>
                <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 flex items-center gap-2"><Download size={15} /> Export</button>
            </motion.div>
            <motion.div variants={i} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[{ l: 'Total Earned (YTD)', v: '$148,200', ic: DollarSign, c: 'bg-teal-50 text-teal' }, { l: 'Pending Payout', v: '$12,450', ic: Clock, c: 'bg-amber-50 text-amber' }, { l: 'Last Payout', v: '$8,340', ic: CheckCircle, c: 'bg-navy-50 text-navy' }, { l: 'Avg. Rate', v: '11.2%', ic: TrendingUp, c: 'bg-coral-50 text-coral' }].map((s, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100"><div className="flex justify-between mb-3"><span className="text-xs font-medium text-gray-500">{s.l}</span><div className={`w-9 h-9 rounded-xl ${s.c} flex items-center justify-center`}><s.ic size={18} /></div></div><div className="font-heading text-2xl font-bold text-gray-900">{s.v}</div></div>
                ))}
            </motion.div>
            <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100">
                <div className="p-5 border-b border-gray-100"><h3 className="font-heading text-base font-bold text-gray-900">Commission by Type</h3></div>
                <div className="p-5 h-[320px]">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={commissionData}><CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" /><XAxis dataKey="month" tick={{ fontSize: 11, fill: '#8E95A9' }} axisLine={false} tickLine={false} /><YAxis tick={{ fontSize: 11, fill: '#8E95A9' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}k`} /><Tooltip contentStyle={{ background: '#fff', border: '1px solid #eee', borderRadius: 12 }} formatter={(v: any) => [formatCurrency(v)]} /><Legend /><Bar dataKey="flights" stackId="a" fill={COLORS.navy} name="Flights" /><Bar dataKey="hotels" stackId="a" fill={COLORS.teal} name="Hotels" /><Bar dataKey="packages" stackId="a" fill={COLORS.coral} name="Packages" /><Bar dataKey="activities" stackId="a" fill={COLORS.amber} name="Activities" radius={[4, 4, 0, 0]} /></BarChart>
                    </ResponsiveContainer>
                </div>
            </motion.div>
            <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100"><h3 className="font-heading text-base font-bold text-gray-900">Booking Commissions</h3></div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm"><thead className="bg-gray-50"><tr>{['ID', 'Client', 'Type', 'Amount', 'Commission', 'Rate', 'Status'].map(h => <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>)}</tr></thead>
                        <tbody className="divide-y divide-gray-50">{bookings.slice(0, 8).map(b => <tr key={b.id} className="hover:bg-gray-50/50"><td className="px-5 py-3 font-mono text-xs font-semibold">{b.id}</td><td className="px-5 py-3">{b.client}</td><td className="px-5 py-3"><span className="px-2 py-0.5 rounded-md bg-gray-100 text-xs">{b.type}</span></td><td className="px-5 py-3">{formatCurrency(b.amount)}</td><td className="px-5 py-3 text-teal font-semibold">{formatCurrency(b.commission)}</td><td className="px-5 py-3">{((b.commission / b.amount) * 100).toFixed(1)}%</td><td className="px-5 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusBadgeClass(b.status) === 'success' ? 'bg-teal-50 text-teal' : getStatusBadgeClass(b.status) === 'warning' ? 'bg-amber-50 text-amber' : 'bg-coral-50 text-coral'}`}>{b.status}</span></td></tr>)}</tbody>
                    </table>
                </div>
            </motion.div>
        </motion.div>
    );
}
