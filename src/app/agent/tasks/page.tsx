'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, LayoutGrid, Calendar, CheckCircle, Clock, AlertCircle, Flag } from 'lucide-react';
import { tasks, avatarColors } from '@/data/mockData';

const prioColors: Record<string, string> = { high: 'text-coral', medium: 'text-amber', low: 'text-teal' };
const colConfig: Record<string, { icon: any, title: string, color: string }> = { todo: { icon: AlertCircle, title: 'To Do', color: 'text-coral' }, in_progress: { icon: Clock, title: 'In Progress', color: 'text-amber' }, done: { icon: CheckCircle, title: 'Done', color: 'text-teal' } };
const c = { hidden: {}, show: { transition: { staggerChildren: 0.04 } } };
const i = { hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } };

export default function TasksPage() {
    const [view, setView] = useState<'kanban' | 'calendar'>('kanban');
    const cols = ['todo', 'in_progress', 'done'] as const;
    return (
        <motion.div variants={c} initial="hidden" animate="show" className="space-y-6">
            <motion.div variants={i} className="flex items-center justify-between">
                <div><h1 className="font-heading text-2xl font-bold text-gray-900">Tasks & Calendar</h1><p className="text-sm text-gray-500 mt-1">Manage tasks and booking milestones.</p></div>
                <div className="flex gap-3">
                    <div className="flex bg-gray-100 rounded-xl p-0.5">
                        <button className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${view === 'kanban' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`} onClick={() => setView('kanban')}><LayoutGrid size={12} />Board</button>
                        <button className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${view === 'calendar' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-400'}`} onClick={() => setView('calendar')}><Calendar size={12} />Calendar</button>
                    </div>
                    <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-teal to-teal-dark text-white text-sm font-semibold flex items-center gap-2"><Plus size={15} /> Add Task</button>
                </div>
            </motion.div>
            <motion.div variants={i} className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[{ l: 'Total', v: tasks.length.toString(), c: 'navy' }, { l: 'To Do', v: tasks.filter(t => t.status === 'todo').length.toString(), c: 'coral' }, { l: 'In Progress', v: tasks.filter(t => t.status === 'in_progress').length.toString(), c: 'amber' }, { l: 'Completed', v: tasks.filter(t => t.status === 'done').length.toString(), c: 'teal' }].map((s, idx) => (
                    <div key={idx} className="bg-white rounded-2xl shadow-card p-5 border border-gray-100"><span className="text-xs font-medium text-gray-500">{s.l}</span><div className="font-heading text-2xl font-bold text-gray-900 mt-2">{s.v}</div></div>
                ))}
            </motion.div>
            {view === 'kanban' && <motion.div variants={i} className="grid lg:grid-cols-3 gap-4">
                {cols.map(colKey => {
                    const cfg = colConfig[colKey]; const ct = tasks.filter(t => t.status === colKey); return (
                        <div key={colKey} className="bg-gray-100/60 rounded-2xl p-3">
                            <div className="flex items-center gap-2 mb-3 px-2"><cfg.icon size={15} className={cfg.color} /><span className="text-sm font-semibold">{cfg.title}</span><span className="ml-auto text-xs px-2 py-0.5 rounded-full bg-white text-gray-500 font-semibold">{ct.length}</span></div>
                            <div className="space-y-2">
                                {ct.map((task, idx) => (
                                    <div key={task.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-card transition-shadow cursor-pointer">
                                        <div className="flex items-center gap-2 mb-1"><Flag size={11} className={prioColors[task.priority]} /><span className={`text-xs font-semibold ${prioColors[task.priority]}`}>{task.priority}</span><span className="text-[10px] text-gray-400 ml-auto font-mono">{task.id}</span></div>
                                        <div className="text-sm font-semibold text-gray-800 mb-2">{task.title}</div>
                                        <div className="flex items-center justify-between text-xs text-gray-400">
                                            <div className="flex items-center gap-1.5"><div className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[8px] font-bold" style={{ background: avatarColors[idx % avatarColors.length] }}>{task.client.split(' ').map(n => n[0]).join('')}</div>{task.client}</div>
                                            <span>Due: {task.due.slice(5)}</span>
                                        </div>
                                    </div>
                                ))}
                                <button className="w-full py-2 text-center text-xs text-gray-400 hover:text-teal transition-colors"><Plus size={12} className="inline mr-1" />Add Task</button>
                            </div>
                        </div>
                    );
                })}
            </motion.div>}
        </motion.div>
    );
}
