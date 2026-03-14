'use client';

import { motion } from 'framer-motion';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, DollarSign, Users, Plane, Target, ArrowRight, Activity } from 'lucide-react';
import { revenueData, destinationData, DESTINATION_COLORS, agents, formatCurrency, COLORS, avatarColors } from '@/data/mockData';

const container = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function AdminDashboard() {
    const kpis = [
        { label: 'Total Bookings Value', value: '$3.19M', trend: '+18.5%', icon: DollarSign, color: 'bg-teal-50 text-teal' },
        { label: 'Active Agents', value: '48', trend: '+3', icon: Users, color: 'bg-navy-50 text-navy' },
        { label: 'Avg. Commission Rate', value: '12.4%', trend: '+0.6%', icon: Target, color: 'bg-coral-50 text-coral' },
        { label: 'Conversion Rate', value: '72%', trend: '+5%', icon: Plane, color: 'bg-amber-50 text-amber' },
    ];

    const topAgents = agents.sort((a, b) => b.revenue - a.revenue).slice(0, 5);
    const cashFlowData = revenueData.map(d => ({ month: d.month, inflow: d.revenue, outflow: d.revenue * 0.72 }));

    const feed = [
        { text: 'Sarah Mitchell booked Emirates First Class for Sophia Chen', time: '2 min ago' },
        { text: 'Daniel Park added new client — Hans Mueller', time: '15 min ago' },
        { text: 'Rebecca Torres closed $45,000 group package deal', time: '1 hour ago' },
        { text: 'Ahmed Hassan approved 15% discount on BK-2024012', time: '2 hours ago' },
        { text: 'Lisa Chen generated AI itinerary for Japan honeymoon', time: '3 hours ago' },
    ];

    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={item}>
                <h1 className="font-heading text-2xl font-bold text-gray-900">Command Center</h1>
                <p className="text-sm text-gray-500 mt-1">Real-time overview of your entire agency's performance.</p>
            </motion.div>

            <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {kpis.map((k, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100">
                        <div className="flex items-center justify-between mb-3">
                            <span className="text-xs font-medium text-gray-500">{k.label}</span>
                            <div className={`w-9 h-9 rounded-xl ${k.color} flex items-center justify-center`}><k.icon size={18} /></div>
                        </div>
                        <div className="font-heading text-2xl font-bold text-gray-900">{k.value}</div>
                        <div className="flex items-center gap-1 mt-1 text-xs font-medium text-teal">
                            <TrendingUp size={13} /> {k.trend} vs. last period
                        </div>
                    </div>
                ))}
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-6">
                <motion.div variants={item} className="lg:col-span-2 bg-white rounded-2xl shadow-card border border-gray-100">
                    <div className="p-5 border-b border-gray-100">
                        <h3 className="font-heading text-base font-bold text-gray-900">Revenue & Cash Flow</h3>
                    </div>
                    <div className="p-5 h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={cashFlowData}>
                                <defs>
                                    <linearGradient id="ifGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={COLORS.teal} stopOpacity={0.12} /><stop offset="95%" stopColor={COLORS.teal} stopOpacity={0} /></linearGradient>
                                    <linearGradient id="ofGrad" x1="0" y1="0" x2="0" y2="1"><stop offset="5%" stopColor={COLORS.coral} stopOpacity={0.08} /><stop offset="95%" stopColor={COLORS.coral} stopOpacity={0} /></linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                                <XAxis dataKey="month" tick={{ fontSize: 11, fill: '#8E95A9' }} axisLine={false} tickLine={false} />
                                <YAxis tick={{ fontSize: 11, fill: '#8E95A9' }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}k`} />
                                <Tooltip contentStyle={{ background: '#fff', border: '1px solid #eee', borderRadius: 12 }} formatter={(v: any) => [formatCurrency(v)]} />
                                <Area type="monotone" dataKey="inflow" stroke={COLORS.teal} strokeWidth={2} fill="url(#ifGrad)" name="Inflow" />
                                <Area type="monotone" dataKey="outflow" stroke={COLORS.coral} strokeWidth={2} fill="url(#ofGrad)" name="Outflow" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </motion.div>

                <motion.div variants={item} className="bg-white rounded-2xl shadow-card border border-gray-100">
                    <div className="p-5 border-b border-gray-100">
                        <h3 className="font-heading text-base font-bold text-gray-900">By Destination</h3>
                    </div>
                    <div className="p-5 h-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={destinationData} cx="50%" cy="50%" innerRadius={50} outerRadius={80} paddingAngle={3} dataKey="value">
                                    {destinationData.map((_, i) => <Cell key={i} fill={DESTINATION_COLORS[i]} />)}
                                </Pie>
                                <Tooltip formatter={(v: any) => [`${v}%`]} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="px-5 pb-5 flex flex-wrap gap-2 justify-center">
                        {destinationData.map((d, i) => (
                            <div key={d.name} className="flex items-center gap-1.5 text-xs text-gray-500">
                                <div className="w-2 h-2 rounded-sm" style={{ background: DESTINATION_COLORS[i] }} /> {d.name}
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                <motion.div variants={item} className="bg-white rounded-2xl shadow-card border border-gray-100">
                    <div className="p-5 border-b border-gray-100 flex justify-between items-center">
                        <h3 className="font-heading text-base font-bold text-gray-900">Top Performing Agents</h3>
                        <span className="text-xs text-teal font-semibold cursor-pointer hover:underline flex items-center gap-1">View All <ArrowRight size={12} /></span>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {topAgents.map((agent, i) => (
                            <div key={agent.id} className="px-5 py-3 flex items-center gap-3 hover:bg-gray-50/50 transition-colors">
                                <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${i === 0 ? 'bg-amber-100 text-amber-dark' : i === 1 ? 'bg-gray-200 text-gray-600' : i === 2 ? 'bg-orange-100 text-orange-600' : 'bg-gray-100 text-gray-400'}`}>{i + 1}</span>
                                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ background: avatarColors[i % avatarColors.length] }}>{agent.avatar}</div>
                                <div className="flex-1">
                                    <div className="text-sm font-semibold">{agent.name}</div>
                                    <div className="text-xs text-gray-400">{agent.team}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-sm font-semibold text-teal">{formatCurrency(agent.revenue)}</div>
                                    <div className="text-xs text-gray-400">{agent.bookingsThisMonth} bookings</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div variants={item} className="bg-white rounded-2xl shadow-card border border-gray-100">
                    <div className="p-5 border-b border-gray-100 flex items-center gap-2">
                        <h3 className="font-heading text-base font-bold text-gray-900">Activity Feed</h3>
                        <Activity size={14} className="text-teal" />
                    </div>
                    <div className="p-5">
                        <div className="relative pl-6 space-y-5">
                            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />
                            {feed.map((f, i) => (
                                <div key={i} className="relative">
                                    <div className={`absolute -left-6 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-white ${i % 3 === 0 ? 'bg-teal' : i % 3 === 1 ? 'bg-coral' : 'bg-amber'}`} />
                                    <div className="text-sm text-gray-700">{f.text}</div>
                                    <div className="text-xs text-gray-400 mt-0.5">{f.time}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}
