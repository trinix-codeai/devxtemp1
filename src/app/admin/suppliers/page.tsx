'use client';
import { motion } from 'framer-motion';
import { Search, Star, Plus, ChevronRight, Building2 } from 'lucide-react';
import { suppliersList, getStatusBadgeClass, avatarColors } from '@/data/mockData';

const c = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const i = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function SuppliersPage() {
    return (
        <motion.div variants={c} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={i} className="flex items-center justify-between"><div><h1 className="font-heading text-2xl font-bold text-gray-900">Supplier Management</h1><p className="text-sm text-gray-500 mt-1">Contracts, performance, and vendor relationships.</p></div><button className="px-4 py-2 rounded-xl bg-gradient-to-r from-coral to-coral-dark text-white text-sm font-semibold flex items-center gap-2"><Plus size={15} /> Add Supplier</button></motion.div>
            <motion.div variants={i} className="flex gap-3"><div className="relative flex-1 max-w-md"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm" placeholder="Search suppliers..." /></div></motion.div>
            <motion.div variants={i} className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {suppliersList.map((sup, idx) => (
                    <div key={sup.id} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100 hover:shadow-card-hover transition-all cursor-pointer group">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-xs font-bold" style={{ background: avatarColors[idx % avatarColors.length] }}>{sup.name.slice(0, 2)}</div>
                            <div className="flex-1"><div className="text-sm font-semibold">{sup.name}</div><span className="px-2 py-0.5 rounded-md bg-gray-100 text-xs">{sup.type}</span></div>
                            <ChevronRight size={16} className="text-gray-300 group-hover:text-teal transition-colors" />
                        </div>
                        <div className="grid grid-cols-2 gap-3 text-xs">
                            <div><span className="text-gray-400">Commission</span><div className="font-semibold text-navy">{sup.commissionRate}%</div></div>
                            <div><span className="text-gray-400">Response</span><div className="font-semibold">{sup.responseTime}</div></div>
                            <div><span className="text-gray-400">Bookings</span><div className="font-semibold">{sup.totalBookings.toLocaleString()}</div></div>
                            <div><span className="text-gray-400">Rating</span><div className="font-semibold text-amber flex items-center gap-0.5"><Star size={10} fill="currentColor" /> {sup.rating}</div></div>
                        </div>
                        <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100 text-xs text-gray-400">
                            <span>Contract: {sup.contract}</span>
                            <span className={`px-2 py-0.5 rounded-full font-semibold ${getStatusBadgeClass(sup.status) === 'success' ? 'bg-teal-50 text-teal' : 'bg-gray-100 text-gray-500'}`}>{sup.status}</span>
                        </div>
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
}
