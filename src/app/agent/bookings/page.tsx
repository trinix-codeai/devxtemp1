'use client';
import { motion } from 'framer-motion';
import { Search, Plane, Building2, ArrowRightLeft, Wifi, Coffee, Star } from 'lucide-react';
import { flightResults, formatCurrency } from '@/data/mockData';

const airlineColors: Record<string, string> = { EK: '#D4001A', QR: '#5C0F32', BA: '#2E3094', EY: '#BD8B13', TK: '#E81C28' };
const c = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function BookingsPage() {
    return (
        <motion.div variants={c} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={i}><h1 className="font-heading text-2xl font-bold text-gray-900">Booking Engine</h1><p className="text-sm text-gray-500 mt-1">Search across multiple suppliers in real-time.</p></motion.div>
            <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
                <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-end">
                    <div><label className="text-xs font-medium text-gray-500 mb-1 block">From</label><input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm" defaultValue="Dubai (DXB)" /></div>
                    <div className="flex justify-center"><button className="p-2 rounded-lg bg-gray-100 text-gray-400 hover:bg-gray-200 transition-colors"><ArrowRightLeft size={16} /></button></div>
                    <div><label className="text-xs font-medium text-gray-500 mb-1 block">To</label><input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm" defaultValue="London (LHR)" /></div>
                    <div><label className="text-xs font-medium text-gray-500 mb-1 block">Date</label><input type="date" className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm" defaultValue="2025-04-15" /></div>
                    <div><label className="text-xs font-medium text-gray-500 mb-1 block">Passengers</label><select className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm"><option>2 Adults</option></select></div>
                    <button className="px-6 py-2 rounded-xl bg-gradient-to-r from-teal to-teal-dark text-white text-sm font-semibold flex items-center gap-2 justify-center"><Search size={16} /> Search</button>
                </div>
            </motion.div>
            <motion.div variants={i}><span className="text-sm font-semibold text-gray-700">{flightResults.length} flights found</span></motion.div>
            <div className="space-y-3">
                {flightResults.map((f, idx) => (
                    <motion.div key={f.id} variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100 p-5 hover:shadow-card-hover transition-all cursor-pointer">
                        <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_auto] gap-6 items-center">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center text-white text-xs font-bold" style={{ background: airlineColors[f.airlineCode] || '#888' }}>{f.airlineCode}</div>
                                <div><div className="text-sm font-semibold">{f.airline}</div><div className="text-xs text-gray-400">{f.class}</div></div>
                            </div>
                            <div className="flex items-center gap-6">
                                <div className="text-center"><div className="text-xl font-bold">{f.departTime}</div><div className="text-xs text-gray-400">{f.departure}</div></div>
                                <div className="flex-1 text-center">
                                    <div className="text-xs text-gray-400 mb-1">{f.duration}</div>
                                    <div className="relative h-0.5 bg-gray-200 rounded-full"><div className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal" /><div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-teal" /></div>
                                    <div className={`text-xs mt-1 font-semibold ${f.stops === 0 ? 'text-teal' : 'text-amber'}`}>{f.stops === 0 ? 'Non-stop' : `${f.stops} stop`}</div>
                                </div>
                                <div className="text-center"><div className="text-xl font-bold">{f.arriveTime}</div><div className="text-xs text-gray-400">{f.arrival}</div></div>
                            </div>
                            <div className="text-right">
                                <div className="text-xs text-gray-400">From</div>
                                <div className="text-xl font-bold text-navy">{formatCurrency(f.price)}</div>
                                <div className="text-xs text-gray-400 mb-2">per person</div>
                                <button className="px-4 py-1.5 rounded-lg bg-teal text-white text-xs font-semibold hover:bg-teal-dark transition-colors">Select</button>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-3 pt-3 border-t border-gray-100 text-xs text-gray-400">
                            {[{ i: Wifi, l: 'Wi-Fi' }, { i: Coffee, l: 'Meal' }, { i: Star, l: 'Lounge' }].map(a => <span key={a.l} className="flex items-center gap-1"><a.i size={11} /> {a.l}</span>)}
                            <span className="ml-auto text-teal font-semibold">{f.seats} seats left</span>
                            <span>via {f.supplier}</span>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
