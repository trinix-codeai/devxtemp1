'use client';
import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, CreditCard, Receipt, Download } from 'lucide-react';
import { financialData, formatCurrency, getStatusBadgeClass, COLORS } from '@/data/mockData';

const c = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function FinancePage() {
    return (
        <motion.div variants={c} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={i} className="flex items-center justify-between"><div><h1 className="font-heading text-2xl font-bold text-gray-900">Financial Control Center</h1><p className="text-sm text-gray-500 mt-1">P&L, currency management, invoices, and cash flow.</p></div><button className="px-4 py-2 rounded-xl border border-gray-200 text-sm flex items-center gap-2"><Download size={15} />Export</button></motion.div>
            <motion.div variants={i} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[{ l: 'Total Revenue', v: formatCurrency(financialData.totalRevenue), t: '+18.5%', u: true, ic: DollarSign, c: 'bg-teal-50 text-teal' }, { l: 'Net Profit', v: formatCurrency(financialData.netProfit), t: '+22%', u: true, ic: TrendingUp, c: 'bg-navy-50 text-navy' }, { l: 'Receivables', v: formatCurrency(financialData.accountsReceivable), t: '$245K', u: false, ic: Receipt, c: 'bg-amber-50 text-amber' }, { l: 'Payables', v: formatCurrency(financialData.accountsPayable), t: '$178K', u: false, ic: CreditCard, c: 'bg-coral-50 text-coral' }].map((s, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100"><div className="flex justify-between mb-3"><span className="text-xs font-medium text-gray-500">{s.l}</span><div className={`w-9 h-9 rounded-xl ${s.c} flex items-center justify-center`}><s.ic size={18} /></div></div><div className="font-heading text-2xl font-bold text-gray-900">{s.v}</div><div className={`flex items-center gap-1 mt-1 text-xs font-medium ${s.u ? 'text-teal' : 'text-gray-400'}`}>{s.u && <TrendingUp size={13} />}{s.t}</div></div>
                ))}
            </motion.div>
            <div className="grid lg:grid-cols-3 gap-6">
                <motion.div variants={i} className="lg:col-span-2 bg-white rounded-2xl shadow-card border border-gray-100"><div className="p-5 border-b border-gray-100"><h3 className="font-heading text-base font-bold text-gray-900">Profit & Loss</h3></div><div className="p-5 h-[300px]">
                    <ResponsiveContainer width="100%" height="100%"><AreaChart data={financialData.monthlyPL}><CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" /><XAxis dataKey="month" tick={{ fontSize: 11, fill: '#8E95A9' }} axisLine={false} tickLine={false} /><YAxis tick={{ fontSize: 11, fill: '#8E95A9' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}k`} /><Tooltip contentStyle={{ background: '#fff', border: '1px solid #eee', borderRadius: 12 }} formatter={(v: any) => [formatCurrency(v)]} /><Area type="monotone" dataKey="revenue" stroke={COLORS.teal} strokeWidth={2} fill={COLORS.teal + '15'} name="Revenue" /><Area type="monotone" dataKey="expenses" stroke={COLORS.coral} strokeWidth={2} fill={COLORS.coral + '08'} name="Expenses" /><Area type="monotone" dataKey="profit" stroke={COLORS.navy} strokeWidth={2} fill={COLORS.navy + '08'} name="Profit" /></AreaChart></ResponsiveContainer>
                </div></motion.div>
                <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100"><div className="p-5 border-b border-gray-100"><h3 className="font-heading text-base font-bold text-gray-900">Currency Balances</h3></div><div className="p-5 space-y-3">
                    {financialData.currencies.map(c => <div key={c.code} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0"><div><div className="text-sm font-semibold">{c.code}</div><div className="text-xs text-gray-400">Rate: {c.rate}</div></div><div className="text-sm font-bold text-navy">{formatCurrency(c.balance, c.code)}</div></div>)}
                </div></motion.div>
            </div>
            <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100"><h3 className="font-heading text-base font-bold text-gray-900">Invoices</h3></div>
                <div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-gray-50"><tr>{['Invoice', 'Supplier', 'Amount', 'Due', 'Status'].map(h => <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>)}</tr></thead><tbody className="divide-y divide-gray-50">
                    {financialData.invoices.map(inv => <tr key={inv.id} className="hover:bg-gray-50/50"><td className="px-5 py-3 font-mono text-xs font-semibold">{inv.id}</td><td className="px-5 py-3">{inv.supplier}</td><td className="px-5 py-3 font-semibold">{formatCurrency(inv.amount, inv.currency)}</td><td className="px-5 py-3 text-xs">{inv.due}</td><td className="px-5 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusBadgeClass(inv.status) === 'success' ? 'bg-teal-50 text-teal' : getStatusBadgeClass(inv.status) === 'warning' ? 'bg-amber-50 text-amber' : 'bg-coral-50 text-coral'}`}>{inv.status}</span></td></tr>)}
                </tbody></table></div>
            </motion.div>
        </motion.div>
    );
}
