'use client';
import { motion } from 'framer-motion';
import { Search, Plus, MapPin, Star, Calendar, FileText, ChevronRight } from 'lucide-react';
import { clients, formatCurrency, avatarColors } from '@/data/mockData';

const tierColors: Record<string, string> = { platinum: 'bg-purple-100 text-purple-700', gold: 'bg-amber-100 text-amber-700', silver: 'bg-gray-200 text-gray-600', bronze: 'bg-orange-100 text-orange-700' };
const container = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const item = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function ClientsPage() {
    return (
        <motion.div variants={container} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={item} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div><h1 className="font-heading text-2xl font-bold text-gray-900">Client Management</h1><p className="text-sm text-gray-500 mt-1">360° view — profiles, preferences, booking history.</p></div>
                <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal to-teal-dark text-white text-sm font-semibold flex items-center gap-2"><Plus size={15} /> Add Client</button>
            </motion.div>
            <motion.div variants={item} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[{ l: 'Total Clients', v: '1,248', c: 'bg-teal-50 text-teal' }, { l: 'VIP / Platinum', v: '89', c: 'bg-navy-50 text-navy' }, { l: 'Active This Month', v: '342', c: 'bg-coral-50 text-coral' }, { l: 'New This Week', v: '18', c: 'bg-amber-50 text-amber' }].map((s, i) => (<div key={i} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100"><span className="text-xs font-medium text-gray-500">{s.l}</span><div className="font-heading text-2xl font-bold text-gray-900 mt-2">{s.v}</div></div>))}
            </motion.div>
            <motion.div variants={item} className="flex gap-3 items-center">
                <div className="relative flex-1 max-w-md"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm" placeholder="Search by name, email..." /></div>
            </motion.div>
            <motion.div variants={item} className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {clients.map((client, i) => (
                    <div key={client.id} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100 hover:shadow-card-hover transition-all cursor-pointer group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-semibold shrink-0" style={{ background: avatarColors[i % avatarColors.length] }}>{client.avatar}</div>
                            <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2"><span className="font-semibold text-sm truncate">{client.name}</span><span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${tierColors[client.tier]}`}>{client.tier}</span></div>
                                <div className="text-xs text-gray-400 truncate">{client.email}</div>
                            </div>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-teal transition-colors shrink-0" />
                        </div>
                        <div className="grid grid-cols-2 gap-2 text-xs text-gray-500">
                            <span className="flex items-center gap-1"><MapPin size={11} /> {client.destination}</span>
                            <span className="flex items-center gap-1"><Calendar size={11} /> {client.lastTrip}</span>
                            <span className="flex items-center gap-1"><FileText size={11} /> {client.bookings} bookings</span>
                            <span className="flex items-center gap-1 text-teal font-semibold"><Star size={11} /> {formatCurrency(client.totalSpent)}</span>
                        </div>
                        <div className="flex gap-1.5 mt-3">{client.preferences.map(p => <span key={p} className="px-2 py-0.5 rounded-md bg-gray-100 text-xs text-gray-500">{p}</span>)}</div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}
