'use client';
import { motion } from 'framer-motion';
import { Mail, MessageCircle, Smartphone, Send, Search, Paperclip } from 'lucide-react';
import { useState } from 'react';
import { messageThreads, avatarColors } from '@/data/mockData';

const chIcons: Record<string, { icon: any, color: string, label: string }> = { email: { icon: Mail, color: '#1A82E2', label: 'Email' }, whatsapp: { icon: MessageCircle, color: '#25D366', label: 'WhatsApp' }, sms: { icon: Smartphone, color: '#8E95A9', label: 'SMS' } };

export default function MessagesPage() {
    const [selected, setSelected] = useState(messageThreads[0]);
    const [msg, setMsg] = useState('');
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
            <div><h1 className="font-heading text-2xl font-bold text-gray-900">Communication Hub</h1><p className="text-sm text-gray-500 mt-1">Unified inbox — Email, WhatsApp, SMS.</p></div>
            <div className="grid lg:grid-cols-[340px_1fr] gap-0 bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden" style={{ height: 'calc(100vh - 200px)' }}>
                <div className="border-r border-gray-100 flex flex-col">
                    <div className="p-3 border-b border-gray-100"><div className="relative"><Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" /><input className="w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs" placeholder="Search..." /></div></div>
                    <div className="flex-1 overflow-y-auto divide-y divide-gray-50">
                        {messageThreads.map(t => {
                            const ch = chIcons[t.channel]; return (
                                <div key={t.id} className={`px-4 py-3 flex items-start gap-3 cursor-pointer hover:bg-gray-50 transition-colors ${selected?.id === t.id ? 'bg-teal-50/30 border-l-2 border-teal' : ''}`} onClick={() => setSelected(t)}>
                                    <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-semibold shrink-0" style={{ background: avatarColors[messageThreads.indexOf(t) % avatarColors.length] }}>{t.avatar}</div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2"><span className="text-sm font-semibold truncate">{t.sender}</span>{t.unread && <div className="w-1.5 h-1.5 rounded-full bg-teal" />}</div>
                                        <div className="text-xs text-gray-400 truncate">{t.preview}</div>
                                        <div className="flex items-center gap-1 mt-0.5"><ch.icon size={9} style={{ color: ch.color }} /><span className="text-[10px] text-gray-400">{ch.label}</span></div>
                                    </div>
                                    <span className="text-[10px] text-gray-400 shrink-0">{t.time}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {selected && <div className="flex flex-col">
                    <div className="p-4 border-b border-gray-100 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-semibold" style={{ background: avatarColors[0] }}>{selected.avatar}</div>
                        <div><div className="text-sm font-semibold">{selected.sender}</div><div className="text-xs text-gray-400">via {chIcons[selected.channel].label}</div></div>
                    </div>
                    <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-gray-50/50">
                        {selected.messages.map((m, idx) => (
                            <div key={idx} className={`flex ${m.from === 'agent' ? 'justify-end' : ''}`}>
                                <div className={`max-w-[70%] px-4 py-2.5 rounded-2xl text-sm ${m.from === 'agent' ? 'bg-teal text-white rounded-br-md' : 'bg-white shadow-sm border border-gray-100 rounded-bl-md'}`}>{m.text}
                                    <div className={`text-[10px] mt-1 ${m.from === 'agent' ? 'text-white/60' : 'text-gray-400'}`}>{m.time}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="p-3 border-t border-gray-100 flex items-center gap-2">
                        <button className="p-2 text-gray-400 hover:text-gray-600"><Paperclip size={16} /></button>
                        <input className="flex-1 px-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm" placeholder="Type a message..." value={msg} onChange={e => setMsg(e.target.value)} />
                        <button className="p-2 rounded-xl bg-teal text-white hover:bg-teal-dark transition-colors"><Send size={16} /></button>
                    </div>
                </div>}
            </div>
        </motion.div>
    );
}
