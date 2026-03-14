'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Plane, Users, DollarSign, CalendarCheck, Plus, ArrowRight, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { revenueData, bookings, notifications, formatCurrency, getStatusBadgeClass, COLORS } from '@/data/mockData';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function AgentDashboard() {
    const stats = [
        { label: 'Bookings This Month', value: '47', trend: '+12%', up: true, icon: Plane, color: 'bg-teal-50 text-teal' },
        { label: 'Active Clients', value: '156', trend: '+8%', up: true, icon: Users, color: 'bg-navy-50 text-navy' },
        { label: 'Commission Earned', value: '$18,450', trend: '+23%', up: true, icon: DollarSign, color: 'bg-coral-50 text-coral' },
        { label: 'Pending Tasks', value: '12', trend: '-5%', up: false, icon: CalendarCheck, color: 'bg-amber-50 text-amber' },
    ];

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="font-heading text-2xl font-bold text-gray-900">Good Evening, Sarah 👋</h1>
                    <p className="text-sm text-gray-500 mt-1">Here's what's happening with your travel business today.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 flex items-center gap-2 transition-colors"><Plus size={15} /> New Client</button>
                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal to-teal-dark text-white text-sm font-semibold hover:shadow-glow-teal flex items-center gap-2 transition-all"><Plane size={15} /> New Booking</button>
                </div>
            </motion.div>

            {/* Stats */}
            <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((s, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100 hover:shadow-card-hover transition-shadow">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium text-gray-500">{s.label}</span>
                            <div className={`w-9 h-9 rounded-xl ${s.color} flex items-center justify-center`}>
                                <s.icon size={18} />
                            </div>
                        </div>
                        <div className="font-heading text-2xl font-bold text-gray-900">{s.value}</div>
                        <div className={`flex items-center gap-1 mt-1 text-xs font-medium ${s.up ? 'text-teal' : 'text-coral'}`}>
                            {s.up ? <TrendingUp size={13} /> : <TrendingDown size={13} />} {s.trend} vs. last month
                        </div>
                    </div>
                ))}
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Revenue Chart */}
                <motion.div variants={item} className="lg:col-span-2 bg-white rounded-2xl shadow-card border border-gray-100">
                    <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="font-heading text-base font-bold text-gray-900">Revenue Overview</h3>
                    </div>
                    <div className="p-5 h-[280px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={revenueData}>
                                <defs>
                                    <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor={COLORS.teal} stopOpacity={0.15} />
                                        <stop offset="95%" stopColor={COLORS.teal} stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#8E95A9' }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 11, fill: '#8E95A9' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}k`} />
                                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #E8EBF3', borderRadius: 12, boxShadow: '0 4px 16px rgba(0,0,0,0.06)' }} formatter={(v: any) => [formatCurrency(v), 'Revenue']} />
                                <Area type="monotone" dataKey="revenue" stroke={COLORS.teal} strokeWidth={2.5} fill="url(#revGrad)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                {/* Notifications */}
                <motion.div variants={item} className="bg-white rounded-2xl shadow-card border border-gray-100">
                    <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                        <h3 className="font-heading text-base font-bold text-gray-900">Notifications</h3>
                        <span className="text-xs text-teal font-semibold cursor-pointer hover:underline">View All</span>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {notifications.map(n => (
                            <div key={n.id} className={`px-5 py-3 flex gap-3 ${!n.read ? 'bg-teal-50/30' : ''}`}>
                                {!n.read && <div className="w-2 h-2 rounded-full bg-teal mt-1.5 shrink-0" />}
                                <div>
                                    <div className="text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: n.text }} />
                                    <div className="text-xs text-gray-400 mt-0.5">{n.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Recent Bookings */}
            <motion.div variants={item} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
                <div className="p-5 border-b border-gray-100 flex items-center justify-between">
                    <h3 className="font-heading text-base font-bold text-gray-900">Recent Bookings</h3>
                    <button className="text-sm text-teal font-semibold flex items-center gap-1 hover:underline">View All <ArrowRight size={14} /></button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                        <thead className="bg-gray-50">
                            <tr>
                                {['Booking ID', 'Client', 'Destination', 'Type', 'Amount', 'Commission', 'Status'].map(h => (
                                    <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase tracking-wider">{h}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-50">
                            {bookings.slice(0, 6).map(b => (
                                <tr key={b.id} className="hover:bg-gray-50/50 transition-colors">
                                    <td className="px-5 py-3 font-mono text-xs font-semibold text-gray-600">{b.id}</td>
                                    <td className="px-5 py-3 font-medium">{b.client}</td>
                                    <td className="px-5 py-3">{b.destination}</td>
                                    <td className="px-5 py-3"><span className="px-2 py-0.5 rounded-md bg-gray-100 text-xs font-medium">{b.type}</span></td>
                                    <td className="px-5 py-3 font-semibold">{formatCurrency(b.amount)}</td>
                                    <td className="px-5 py-3 text-teal font-semibold">{formatCurrency(b.commission)}</td>
                                    <td className="px-5 py-3">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold ${getStatusBadgeClass(b.status) === 'success' ? 'bg-teal-50 text-teal' :
                                                getStatusBadgeClass(b.status) === 'warning' ? 'bg-amber-50 text-amber' : 'bg-coral-50 text-coral'
                                            }`}>
                                            {b.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </motion.div>

            {/* Quick Stats */}
            <motion.div variants={item} className="grid grid-cols-3 gap-4">
                {[
                    { label: 'Avg. Response Time', value: '14 min', extra: '18% faster', icon: Clock, color: 'text-amber' },
                    { label: 'Conversion Rate', value: '68%', extra: '+5% vs. target', icon: CheckCircle, color: 'text-teal' },
                    { label: 'Urgent Actions', value: '3', extra: '2 approvals, 1 confirm', icon: AlertCircle, color: 'text-coral' },
                ].map(s => (
                    <div key={s.label} className="bg-white rounded-2xl shadow-card border border-gray-100 p-6 text-center">
                        <div className="flex items-center justify-center gap-2 mb-2">
                            <s.icon size={16} className={s.color} />
                            <span className="text-sm font-semibold text-gray-700">{s.label}</span>
                        </div>
                        <div className="font-heading text-2xl font-bold text-gray-900">{s.value}</div>
                        <div className="text-xs text-gray-400 mt-1">{s.extra}</div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}
