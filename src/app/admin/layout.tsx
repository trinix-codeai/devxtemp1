'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard, Users, DollarSign, Building2, Package, BarChart3,
    Shield, Settings, Bell, Search, Menu, X, LogOut, ChevronLeft,
    Globe, Plug,
} from 'lucide-react';
import { useAuth } from '@/lib/auth';

const adminNav = [
    { label: 'Command Center', href: '/admin', icon: LayoutDashboard },
    { label: 'Agents', href: '/admin/agents', icon: Users },
    { label: 'Finance', href: '/admin/finance', icon: DollarSign },
    { label: 'Suppliers', href: '/admin/suppliers', icon: Building2 },
    { label: 'Products', href: '/admin/products', icon: Package },
    { label: 'Compliance', href: '/admin/compliance', icon: Shield },
    { label: 'Integrations', href: '/admin/integrations', icon: Plug },
    { label: 'Settings', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({ children }: { children: ReactNode }) {
    const pathname = usePathname();
    const router = useRouter();
    const { user, logout } = useAuth();
    const [collapsed, setCollapsed] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleLogout = () => { logout(); router.push('/'); };

    return (
        <div className="flex h-screen bg-gray-50 overflow-hidden">
            {/* Desktop Sidebar */}
            <aside className={`hidden lg:flex flex-col transition-all duration-300 ${collapsed ? 'w-[72px]' : 'w-[260px]'}`}
                style={{ background: 'linear-gradient(180deg, #0A2647, #061a33)' }}
            >
                <div className={`h-16 flex items-center border-b border-white/10 ${collapsed ? 'justify-center px-2' : 'px-5 gap-3'}`}>
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral to-amber flex items-center justify-center shrink-0">
                        <Globe size={16} className="text-white" />
                    </div>
                    {!collapsed && (
                        <div>
                            <div className="font-heading font-bold text-white text-sm">TravelOS</div>
                            <div className="text-[10px] text-amber font-semibold">ADMIN</div>
                        </div>
                    )}
                </div>

                <nav className="flex-1 py-4 px-2 space-y-1 overflow-y-auto">
                    {adminNav.map(item => {
                        const active = pathname === item.href || (item.href !== '/admin' && pathname.startsWith(item.href));
                        return (
                            <Link key={item.href} href={item.href}
                                className={`sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${active ? 'active bg-white/10 text-white' : 'text-white/50 hover:text-white/80 hover:bg-white/5'} ${collapsed ? 'justify-center' : ''}`}
                            >
                                <item.icon size={18} className="shrink-0" />
                                {!collapsed && item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-3 border-t border-white/10">
                    <button onClick={() => setCollapsed(!collapsed)}
                        className="w-full flex items-center justify-center py-2 rounded-lg text-white/40 hover:text-white/70 hover:bg-white/5 transition-all"
                    >
                        <ChevronLeft size={16} className={`transition-transform ${collapsed ? 'rotate-180' : ''}`} />
                    </button>
                </div>
            </aside>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {mobileOpen && (
                    <>
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="lg:hidden fixed inset-0 bg-black/50 z-40" onClick={() => setMobileOpen(false)} />
                        <motion.aside initial={{ x: -280 }} animate={{ x: 0 }} exit={{ x: -280 }} transition={{ type: 'spring', damping: 25 }}
                            className="lg:hidden fixed left-0 top-0 bottom-0 w-[260px] z-50 flex flex-col text-white"
                            style={{ background: 'linear-gradient(180deg, #0A2647, #061a33)' }}
                        >
                            <div className="h-16 flex items-center px-5 gap-3 border-b border-white/10">
                                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-coral to-amber flex items-center justify-center">
                                    <Globe size={16} className="text-white" />
                                </div>
                                <span className="font-heading font-bold">TravelOS</span>
                                <button className="ml-auto text-white/50" onClick={() => setMobileOpen(false)}><X size={18} /></button>
                            </div>
                            <nav className="flex-1 py-4 px-2 space-y-1">
                                {adminNav.map(item => {
                                    const active = pathname === item.href;
                                    return (
                                        <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)}
                                            className={`sidebar-link flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${active ? 'active bg-white/10 text-white' : 'text-white/50 hover:text-white/80 hover:bg-white/5'}`}
                                        >
                                            <item.icon size={18} /> {item.label}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <div className="flex-1 flex flex-col min-w-0">
                <header className="h-16 bg-white border-b border-gray-200 flex items-center px-4 md:px-6 gap-4 shrink-0">
                    <button className="lg:hidden text-gray-500" onClick={() => setMobileOpen(true)}><Menu size={20} /></button>

                    <div className="flex-1 max-w-md">
                        <div className="relative">
                            <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                            <input className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-coral/30 focus:border-coral transition-all" placeholder="Search agents, reports..." />
                        </div>
                    </div>

                    <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                        <Bell size={18} />
                        <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-coral animate-pulse" />
                    </button>

                    <div className="flex items-center gap-3 pl-3 border-l border-gray-200">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-coral to-amber flex items-center justify-center text-white text-xs font-semibold">
                            {user?.avatar || 'A'}
                        </div>
                        <div className="hidden md:block">
                            <div className="text-sm font-semibold text-gray-900">{user?.name || 'Admin'}</div>
                            <div className="text-xs text-gray-400">Administrator</div>
                        </div>
                        <button onClick={handleLogout} className="p-2 text-gray-400 hover:text-coral hover:bg-gray-100 rounded-lg transition-colors" title="Logout">
                            <LogOut size={16} />
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-y-auto p-4 md:p-6">
                    <AnimatePresence mode="wait">
                        <motion.div key={pathname} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.2 }}>
                            {children}
                        </motion.div>
                    </AnimatePresence>
                </main>
            </div>
        </div>
    );
}
