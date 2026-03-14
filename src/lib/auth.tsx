'use client';

import { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface User {
    id: string;
    name: string;
    email: string;
    role: 'admin' | 'agent';
    agency?: string;
    avatar: string;
}

interface AuthContextType {
    user: User | null;
    isAuthenticated: boolean;
    login: (email: string, password: string) => Promise<{ role: string }>;
    signup: (data: SignupData) => Promise<{ role: string }>;
    logout: () => void;
}

interface SignupData {
    name: string;
    email: string;
    password: string;
    role: 'admin' | 'agent';
    agency?: string;
    inviteCode?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/* ── Mock Users ── */
const MOCK_USERS: User[] = [
    { id: '1', name: 'Sarah Mitchell', email: 'agent@travelos.com', role: 'agent', avatar: 'SM' },
    { id: '2', name: 'Admin User', email: 'admin@travelos.com', role: 'admin', agency: 'TravelOS Agency', avatar: 'AU' },
];

export function AuthProvider({ children }: { children: ReactNode }) {
    const [user, setUser] = useState<User | null>(() => {
        if (typeof window !== 'undefined') {
            const stored = localStorage.getItem('travelos_user');
            return stored ? JSON.parse(stored) : null;
        }
        return null;
    });

    const login = useCallback(async (email: string, _password: string) => {
        /* Simulate API call */
        await new Promise(r => setTimeout(r, 800));

        const found = MOCK_USERS.find(u => u.email === email);
        const mockUser: User = found || {
            id: Date.now().toString(),
            name: email.split('@')[0],
            email,
            role: email.includes('admin') ? 'admin' : 'agent',
            avatar: email.slice(0, 2).toUpperCase(),
        };

        setUser(mockUser);
        localStorage.setItem('travelos_user', JSON.stringify(mockUser));
        localStorage.setItem('travelos_token', 'mock_jwt_' + mockUser.id);
        return { role: mockUser.role };
    }, []);

    const signup = useCallback(async (data: SignupData) => {
        await new Promise(r => setTimeout(r, 1000));

        const newUser: User = {
            id: Date.now().toString(),
            name: data.name,
            email: data.email,
            role: data.role,
            agency: data.agency,
            avatar: data.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
        };

        setUser(newUser);
        localStorage.setItem('travelos_user', JSON.stringify(newUser));
        localStorage.setItem('travelos_token', 'mock_jwt_' + newUser.id);
        return { role: newUser.role };
    }, []);

    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('travelos_user');
        localStorage.removeItem('travelos_token');
    }, []);

    return (
        <AuthContext.Provider value={{ user, isAuthenticated: !!user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within AuthProvider');
    return context;
}
