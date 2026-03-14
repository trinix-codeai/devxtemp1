'use client';
import { motion } from 'framer-motion';
import { Sparkles, MapPin, Plane, Building2, UtensilsCrossed, Car, GripVertical, Plus, Trash2, Download } from 'lucide-react';
import { sampleItinerary, formatCurrency } from '@/data/mockData';

const typeIcons: Record<string, any> = { flight: Plane, hotel: Building2, activity: MapPin, meal: UtensilsCrossed, transfer: Car };
const typeColors: Record<string, string> = { flight: '#0A2647', hotel: '#1B9C85', activity: '#FF6B4A', meal: '#FFB800', transfer: '#8E95A9' };
const c = { hidden: {}, show: { transition: { staggerChildren: 0.05 } } };
const i = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function ItinerariesPage() {
    return (
        <motion.div variants={c} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={i} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div><h1 className="font-heading text-2xl font-bold text-gray-900">AI Itinerary Builder</h1><p className="text-sm text-gray-500 mt-1">Describe the perfect trip — AI builds the rest.</p></div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 flex items-center gap-2"><Download size={15} /> Export</button>
                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal to-teal-dark text-white text-sm font-semibold flex items-center gap-2"><Plus size={15} /> Save</button>
                </div>
            </motion.div>
            <motion.div variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
                <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-coral to-amber flex items-center justify-center"><Sparkles size={18} className="text-white" /></div>
                    <div><div className="font-semibold text-sm">AI Itinerary Generator</div><div className="text-xs text-gray-400">Powered by TravelOS AI</div></div>
                </div>
                <div className="flex gap-3">
                    <input className="flex-1 px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-xl text-sm" placeholder='Try: "10-day luxury honeymoon in Italy with cooking classes"' />
                    <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-coral to-coral-dark text-white text-sm font-semibold flex items-center gap-2"><Sparkles size={16} /> Generate</button>
                </div>
            </motion.div>
            {sampleItinerary.map(day => (
                <motion.div key={day.day} variants={i} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
                    <div className="p-4 bg-gray-50 border-b border-gray-100 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-navy to-teal flex items-center justify-center text-white text-xs font-bold">D{day.day}</div>
                        <div><div className="text-sm font-semibold">{day.title}</div><div className="text-xs text-gray-400"><MapPin size={10} className="inline mr-1" />{day.location} · {day.date}</div></div>
                    </div>
                    <div className="divide-y divide-gray-50">
                        {day.activities.map((act, j) => {
                            const Icon = typeIcons[act.type] || MapPin;
                            return (
                                <div key={j} className="flex items-start gap-3 px-5 py-3">
                                    <GripVertical size={13} className="text-gray-300 mt-1 shrink-0 cursor-grab" />
                                    <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: typeColors[act.type] + '15' }}><Icon size={15} style={{ color: typeColors[act.type] }} /></div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2"><span className="text-xs text-gray-400 font-semibold">{act.time}</span><span className="text-sm font-semibold truncate">{act.title}</span></div>
                                        <div className="text-xs text-gray-500 mt-0.5">{act.description}</div>
                                    </div>
                                    {act.cost > 0 && <span className="text-sm font-semibold text-navy shrink-0">{formatCurrency(act.cost)}</span>}
                                    <button className="p-1 text-gray-300 hover:text-coral transition-colors shrink-0"><Trash2 size={13} /></button>
                                </div>
                            );
                        })}
                        <div className="px-5 py-2"><button className="w-full py-1.5 text-center text-xs text-teal font-semibold hover:bg-teal-50 rounded-lg transition-colors"><Plus size={12} className="inline mr-1" /> Add Activity</button></div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
    );
}
