'use client';
import { motion } from 'framer-motion';
import { Settings as SettingsIcon, Building2, Bell, Shield, Globe, Users, CreditCard, Mail } from 'lucide-react';

export default function AdminSettingsPage() {
    return (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="space-y-6 max-w-3xl">
            <div><h1 className="font-heading text-2xl font-bold text-gray-900">Agency Settings</h1><p className="text-sm text-gray-500 mt-1">Organization, billing, team, and platform configuration.</p></div>
            {[
                { icon: Building2, title: 'Organization', desc: 'Agency name, logo, branding', fields: ['Agency Name', 'Website', 'Industry'] },
                { icon: CreditCard, title: 'Billing', desc: 'Subscription, payment methods', fields: ['Plan', 'Payment Method', 'Billing Email'] },
                { icon: Users, title: 'Team', desc: 'Roles, permissions, invitations', fields: ['Default Role', 'Max Agents', 'Invite Link'] },
                { icon: Mail, title: 'Email', desc: 'SMTP, templates, notifications', fields: ['SMTP Host', 'From Address', 'Reply-To'] },
                { icon: Shield, title: 'Security', desc: 'SSO, IP whitelist, compliance', fields: ['SSO Provider', 'Session Timeout', 'IP Whitelist'] },
                { icon: Globe, title: 'Localization', desc: 'Language, timezone, currency', fields: ['Default Language', 'Timezone', 'Base Currency'] },
            ].map((section, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.06 }} className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden">
                    <div className="p-5 border-b border-gray-100 flex items-center gap-3">
                        <div className="w-9 h-9 rounded-xl bg-gray-100 flex items-center justify-center"><section.icon size={18} className="text-gray-500" /></div>
                        <div><div className="text-sm font-semibold">{section.title}</div><div className="text-xs text-gray-400">{section.desc}</div></div>
                    </div>
                    <div className="p-5 space-y-4">
                        {section.fields.map(f => (
                            <div key={f}><label className="text-xs font-medium text-gray-500 mb-1 block">{f}</label><input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:ring-2 focus:ring-teal/30 focus:border-teal transition-all" placeholder={f} /></div>
                        ))}
                    </div>
                </motion.div>
            ))}
            <button className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-coral to-coral-dark text-white text-sm font-semibold hover:shadow-glow-coral transition-all">Save Changes</button>
        </motion.div>
    );
}
