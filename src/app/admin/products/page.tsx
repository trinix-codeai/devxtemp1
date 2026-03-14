'use client';
import { motion } from 'framer-motion';
import { Search, Plus, Star, Package, MapPin, DollarSign, LayoutGrid, List } from 'lucide-react';
import { useState } from 'react';
import { products, formatCurrency, getStatusBadgeClass } from '@/data/mockData';

const gColors: Record<string, string> = { Hotel: 'from-teal to-teal-dark', Flight: 'from-navy to-navy-light', Tour: 'from-coral to-coral-dark', Activity: 'from-amber to-amber-dark' };
const c = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const i = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function ProductsPage() {
    const [view, setView] = useState<'grid' | 'list'>('grid');
    return (
        <motion.div variants={c} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={i} className="flex items-center justify-between"><div><h1 className="font-heading text-2xl font-bold text-gray-900">Product Catalog</h1><p className="text-sm text-gray-500 mt-1">Manage inventory, availability, and pricing.</p></div><button className="px-4 py-2 rounded-xl bg-gradient-to-r from-coral to-coral-dark text-white text-sm font-semibold flex items-center gap-2"><Plus size={15} /> Add Product</button></motion.div>
            <motion.div variants={i} className="flex gap-3 items-center">
                <div className="relative flex-1 max-w-md"><Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input className="w-full pl-9 pr-4 py-2 bg-white border border-gray-200 rounded-xl text-sm" placeholder="Search products..." /></div>
                <div className="flex bg-gray-100 rounded-xl p-0.5"><button className={`p-2 rounded-lg ${view === 'grid' ? 'bg-white shadow-sm' : ''}`} onClick={() => setView('grid')}><LayoutGrid size={14} /></button><button className={`p-2 rounded-lg ${view === 'list' ? 'bg-white shadow-sm' : ''}`} onClick={() => setView('list')}><List size={14} /></button></div>
            </motion.div>
            {view === 'grid' ? <motion.div variants={i} className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
                {products.map((p) => (
                    <div key={p.id} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden hover:shadow-card-hover transition-all cursor-pointer"><div className={`h-2 bg-gradient-to-r ${gColors[p.type] || 'from-gray-400 to-gray-500'}`} /><div className="p-5">
                        <div className="flex items-center gap-2 mb-2"><span className="px-2 py-0.5 rounded-md bg-gray-100 text-xs font-medium">{p.type}</span>{p.status === 'sold_out' && <span className="px-2 py-0.5 rounded-full bg-coral-50 text-coral text-xs font-semibold">Sold Out</span>}</div>
                        <h4 className="text-sm font-bold text-gray-900 mb-1">{p.name}</h4>
                        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3"><MapPin size={10} />{p.destination} · via {p.supplier}</div>
                        <div className="flex items-center justify-between mb-3"><div className="text-xl font-bold text-navy">{formatCurrency(p.price, p.currency)}</div><div className="flex items-center gap-0.5 text-amber text-sm"><Star size={12} fill="currentColor" />{p.rating}</div></div>
                        <div className="w-full h-1.5 bg-gray-200 rounded-full"><div className="h-full rounded-full" style={{ width: `${(p.available / (p.available + p.allocated)) * 100}%`, background: p.available < 3 ? 'var(--coral)' : p.available < 8 ? 'var(--amber)' : 'var(--teal)' }} /></div>
                        <div className="flex justify-between text-xs text-gray-400 mt-1"><span>{p.available} available</span><span>{p.allocated} allocated</span></div>
                    </div></div>
                ))}
            </motion.div> :
                <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden"><div className="overflow-x-auto"><table className="w-full text-sm"><thead className="bg-gray-50"><tr>{['Product', 'Type', 'Destination', 'Price', 'Available', 'Rating', 'Status'].map(h => <th key={h} className="px-5 py-3 text-left text-xs font-semibold text-gray-500 uppercase">{h}</th>)}</tr></thead><tbody className="divide-y divide-gray-50">
                    {products.map(p => <tr key={p.id} className="hover:bg-gray-50/50"><td className="px-5 py-3 font-semibold text-sm">{p.name}</td><td className="px-5 py-3"><span className="px-2 py-0.5 rounded-md bg-gray-100 text-xs">{p.type}</span></td><td className="px-5 py-3">{p.destination}</td><td className="px-5 py-3 font-semibold">{formatCurrency(p.price, p.currency)}</td><td className="px-5 py-3">{p.available}</td><td className="px-5 py-3"><span className="text-amber">★</span> {p.rating}</td><td className="px-5 py-3"><span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusBadgeClass(p.status) === 'success' ? 'bg-teal-50 text-teal' : 'bg-coral-50 text-coral'}`}>{p.status}</span></td></tr>)}
                </tbody></table></div></motion.div>}
        </motion.div>
    );
}
