// ────── Mock Data for Travel OS ──────

// ── Revenue & Charts ──
export const revenueData = [
    { month: 'Jan', revenue: 185000, bookings: 245 },
    { month: 'Feb', revenue: 198000, bookings: 267 },
    { month: 'Mar', revenue: 215000, bookings: 312 },
    { month: 'Apr', revenue: 242000, bookings: 338 },
    { month: 'May', revenue: 268000, bookings: 356 },
    { month: 'Jun', revenue: 295000, bookings: 398 },
    { month: 'Jul', revenue: 324000, bookings: 412 },
    { month: 'Aug', revenue: 312000, bookings: 385 },
    { month: 'Sep', revenue: 278000, bookings: 342 },
    { month: 'Oct', revenue: 305000, bookings: 378 },
    { month: 'Nov', revenue: 318000, bookings: 395 },
    { month: 'Dec', revenue: 358000, bookings: 445 },
];

export const commissionData = [
    { month: 'Jan', flights: 4200, hotels: 3100, packages: 2800, activities: 900 },
    { month: 'Feb', flights: 4800, hotels: 3400, packages: 3200, activities: 1100 },
    { month: 'Mar', flights: 5200, hotels: 3900, packages: 3600, activities: 1300 },
    { month: 'Apr', flights: 5800, hotels: 4500, packages: 4100, activities: 1500 },
    { month: 'May', flights: 6200, hotels: 4800, packages: 4400, activities: 1700 },
    { month: 'Jun', flights: 6800, hotels: 5200, packages: 4900, activities: 1900 },
];

export const destinationData = [
    { name: 'Europe', value: 35 },
    { name: 'Asia', value: 25 },
    { name: 'Americas', value: 20 },
    { name: 'Middle East', value: 12 },
    { name: 'Africa', value: 8 },
];

export const DESTINATION_COLORS = ['#0A2647', '#1B9C85', '#FF6B4A', '#FFB800', '#635BFF'];

// ── Colors ──
export const COLORS = {
    navy: '#0A2647',
    teal: '#1B9C85',
    amber: '#FFB800',
    coral: '#FF6B4A',
};

export const avatarColors = [
    'linear-gradient(135deg, #0A2647, #144272)',
    'linear-gradient(135deg, #1B9C85, #2BC4A8)',
    'linear-gradient(135deg, #FF6B4A, #FF8E75)',
    'linear-gradient(135deg, #FFB800, #FFCB45)',
    'linear-gradient(135deg, #635BFF, #8B85FF)',
    'linear-gradient(135deg, #E11D48, #FB7185)',
];

// ── Bookings ──
export interface Booking {
    id: string;
    client: string;
    destination: string;
    type: string;
    amount: number;
    commission: number;
    status: string;
    date: string;
}

export const bookings: Booking[] = [
    { id: 'BK-2025001', client: 'Sophia Chen', destination: 'Maldives', type: 'Package', amount: 12500, commission: 1500, status: 'confirmed', date: '2025-03-15' },
    { id: 'BK-2025002', client: 'Hans Mueller', destination: 'Swiss Alps', type: 'Hotel', amount: 8200, commission: 984, status: 'confirmed', date: '2025-03-12' },
    { id: 'BK-2025003', client: 'Isabella Romano', destination: 'Tokyo', type: 'Flight', amount: 4800, commission: 480, status: 'pending', date: '2025-03-10' },
    { id: 'BK-2025004', client: 'David Kim', destination: 'Dubai', type: 'Package', amount: 15000, commission: 1800, status: 'confirmed', date: '2025-03-08' },
    { id: 'BK-2025005', client: 'Maria Santos', destination: 'Santorini', type: 'Hotel', amount: 6500, commission: 780, status: 'pending', date: '2025-03-05' },
    { id: 'BK-2025006', client: 'James Wilson', destination: 'London', type: 'Flight', amount: 3200, commission: 320, status: 'cancelled', date: '2025-03-03' },
    { id: 'BK-2025007', client: 'Yuki Tanaka', destination: 'Bali', type: 'Package', amount: 9800, commission: 1176, status: 'confirmed', date: '2025-03-01' },
    { id: 'BK-2025008', client: 'Emma Thompson', destination: 'Paris', type: 'Activity', amount: 2400, commission: 360, status: 'confirmed', date: '2025-02-28' },
    { id: 'BK-2025009', client: 'Pierre Dupont', destination: 'New York', type: 'Flight', amount: 5600, commission: 560, status: 'pending', date: '2025-02-25' },
    { id: 'BK-2025010', client: 'Sarah Ahmed', destination: 'Cape Town', type: 'Package', amount: 11200, commission: 1344, status: 'confirmed', date: '2025-02-20' },
];

// ── Clients ──
export interface Client {
    id: string; name: string; avatar: string; email: string; phone: string; nationality: string;
    tier: string; destination: string; lastTrip: string; bookings: number; totalSpent: number;
    preferences: string[]; passportExpiry: string; dietary: string;
}

export const clients: Client[] = [
    { id: 'CL001', name: 'Sophia Chen', avatar: 'SC', email: 'sophia@email.com', phone: '+971 55 123 4567', nationality: 'Singaporean', tier: 'platinum', destination: 'Maldives', lastTrip: 'Feb 2025', bookings: 24, totalSpent: 186400, preferences: ['Luxury', 'Beach', 'Spa'], passportExpiry: '2027-08', dietary: 'Vegetarian' },
    { id: 'CL002', name: 'Hans Mueller', avatar: 'HM', email: 'hans@email.com', phone: '+49 170 234 5678', nationality: 'German', tier: 'gold', destination: 'Swiss Alps', lastTrip: 'Jan 2025', bookings: 15, totalSpent: 98000, preferences: ['Ski', 'Mountain', 'Wellness'], passportExpiry: '2026-11', dietary: 'None' },
    { id: 'CL003', name: 'Isabella Romano', avatar: 'IR', email: 'isabella@email.com', phone: '+39 347 345 6789', nationality: 'Italian', tier: 'platinum', destination: 'Tokyo', lastTrip: 'Mar 2025', bookings: 31, totalSpent: 245000, preferences: ['Culture', 'Food', 'Adventure'], passportExpiry: '2028-03', dietary: 'Gluten-Free' },
    { id: 'CL004', name: 'David Kim', avatar: 'DK', email: 'david@email.com', phone: '+82 10 456 7890', nationality: 'Korean', tier: 'gold', destination: 'Dubai', lastTrip: 'Feb 2025', bookings: 18, totalSpent: 134500, preferences: ['Luxury', 'Shopping', 'Dining'], passportExpiry: '2027-05', dietary: 'Halal' },
    { id: 'CL005', name: 'Maria Santos', avatar: 'MS', email: 'maria@email.com', phone: '+55 11 567 8901', nationality: 'Brazilian', tier: 'silver', destination: 'Santorini', lastTrip: 'Dec 2024', bookings: 8, totalSpent: 52000, preferences: ['Beach', 'Romance', 'Photography'], passportExpiry: '2026-09', dietary: 'None' },
    { id: 'CL006', name: 'James Wilson', avatar: 'JW', email: 'james@email.com', phone: '+1 212 678 9012', nationality: 'American', tier: 'silver', destination: 'London', lastTrip: 'Jan 2025', bookings: 12, totalSpent: 67800, preferences: ['Business', 'History', 'Theater'], passportExpiry: '2027-12', dietary: 'None' },
];

// ── Agents ──
export interface Agent {
    id: string; name: string; avatar: string; email: string; role: string; team: string;
    revenue: number; commission: number; bookingsThisMonth: number; conversionRate: number;
    activeLeads: number; rating: number; status: string; target: number; targetProgress: number;
}

export const agents: Agent[] = [
    { id: 'AG001', name: 'Sarah Mitchell', avatar: 'SM', email: 'sarah@travelagency.com', role: 'Senior Agent', team: 'Luxury Travel', revenue: 485000, commission: 58200, bookingsThisMonth: 23, conversionRate: 78, activeLeads: 12, rating: 4.9, status: 'online', target: 500000, targetProgress: 97 },
    { id: 'AG002', name: 'Daniel Park', avatar: 'DP', email: 'daniel@travelagency.com', role: 'Agent', team: 'Corporate', revenue: 312000, commission: 37440, bookingsThisMonth: 18, conversionRate: 65, activeLeads: 8, rating: 4.7, status: 'online', target: 400000, targetProgress: 78 },
    { id: 'AG003', name: 'Rebecca Torres', avatar: 'RT', email: 'rebecca@travelagency.com', role: 'Team Lead', team: 'Group Travel', revenue: 528000, commission: 63360, bookingsThisMonth: 15, conversionRate: 82, activeLeads: 6, rating: 4.8, status: 'away', target: 600000, targetProgress: 88 },
    { id: 'AG004', name: 'Ahmed Hassan', avatar: 'AH', email: 'ahmed@travelagency.com', role: 'Senior Agent', team: 'Middle East', revenue: 425000, commission: 51000, bookingsThisMonth: 20, conversionRate: 71, activeLeads: 14, rating: 4.6, status: 'online', target: 450000, targetProgress: 94 },
    { id: 'AG005', name: 'Lisa Chen', avatar: 'LC', email: 'lisa@travelagency.com', role: 'Agent', team: 'Asia Pacific', revenue: 278000, commission: 33360, bookingsThisMonth: 16, conversionRate: 68, activeLeads: 10, rating: 4.5, status: 'offline', target: 350000, targetProgress: 79 },
];

// ── Notifications ──
export const notifications = [
    { id: 1, text: '<b>Sophia Chen</b> confirmed Maldives package — $12,500', time: '2 min ago', read: false },
    { id: 2, text: 'New inquiry from <b>Hans Mueller</b> for Swiss Alps', time: '15 min ago', read: false },
    { id: 3, text: 'Commission payout of <b>$8,340</b> processed', time: '1 hour ago', read: true },
    { id: 4, text: '<b>Isabella Romano</b> requested itinerary changes', time: '3 hours ago', read: true },
    { id: 5, text: 'Booking <b>BK-2025006</b> cancelled by James Wilson', time: '5 hours ago', read: true },
];

// ── Flight Results ──
export const flightResults = [
    { id: 'FL001', airline: 'Emirates', airlineCode: 'EK', class: 'Business', departure: 'DXB', arrival: 'LHR', departTime: '08:15', arriveTime: '12:30', duration: '7h 15m', stops: 0, price: 4850, seats: 6, supplier: 'Amadeus' },
    { id: 'FL002', airline: 'Qatar Airways', airlineCode: 'QR', class: 'Business', departure: 'DXB', arrival: 'LHR', departTime: '10:30', arriveTime: '16:45', duration: '8h 15m', stops: 1, price: 4200, seats: 4, supplier: 'Sabre' },
    { id: 'FL003', airline: 'British Airways', airlineCode: 'BA', class: 'First', departure: 'DXB', arrival: 'LHR', departTime: '14:00', arriveTime: '18:15', duration: '7h 15m', stops: 0, price: 7800, seats: 2, supplier: 'Amadeus' },
    { id: 'FL004', airline: 'Etihad', airlineCode: 'EY', class: 'Business', departure: 'DXB', arrival: 'LHR', departTime: '22:00', arriveTime: '02:30+1', duration: '7h 30m', stops: 0, price: 4600, seats: 8, supplier: 'Travelport' },
    { id: 'FL005', airline: 'Turkish Airlines', airlineCode: 'TK', class: 'Business', departure: 'DXB', arrival: 'LHR', departTime: '06:45', arriveTime: '14:20', duration: '9h 35m', stops: 1, price: 3400, seats: 12, supplier: 'Sabre' },
];

// ── Itinerary ──
export const sampleItinerary = [
    {
        day: 1, title: 'Arrival in Rome', location: 'Rome, Italy', date: 'Jun 15',
        activities: [
            { time: '10:00', title: 'Emirates First Class', description: 'DXB to FCO, 6h 15m direct', type: 'flight', cost: 4800 },
            { time: '16:30', title: 'Private Airport Transfer', description: 'Luxury sedan to Hotel de Russie', type: 'transfer', cost: 120 },
            { time: '17:30', title: 'Hotel de Russie Check-in', description: 'Popolo Suite, city view', type: 'hotel', cost: 890 },
            { time: '20:00', title: 'Welcome Dinner', description: 'La Pergola — 3 Michelin Stars', type: 'meal', cost: 450 },
        ],
    },
    {
        day: 2, title: 'Ancient Rome', location: 'Rome, Italy', date: 'Jun 16',
        activities: [
            { time: '09:00', title: 'Private Colosseum Tour', description: 'VIP underground access with historian guide', type: 'activity', cost: 320 },
            { time: '12:30', title: 'Lunch at Roscioli', description: 'Authentic Roman cuisine', type: 'meal', cost: 180 },
            { time: '14:30', title: 'Vatican Museums', description: 'Skip-the-line, private docent', type: 'activity', cost: 280 },
            { time: '19:00', title: 'Trastevere Food Walk', description: 'Guided evening food tour', type: 'activity', cost: 150 },
        ],
    },
    {
        day: 3, title: 'Transfer to Florence', location: 'Florence, Italy', date: 'Jun 17',
        activities: [
            { time: '09:30', title: 'First Class Train', description: 'Rome to Florence, Italo', type: 'transfer', cost: 165 },
            { time: '12:00', title: 'Four Seasons Firenze', description: 'Renaissance Suite check-in', type: 'hotel', cost: 1200 },
            { time: '15:00', title: 'Tuscan Cooking Class', description: 'Private pasta making with chef', type: 'activity', cost: 280 },
            { time: '20:00', title: 'Dinner at Enoteca Pinchiorri', description: '3 Michelin Stars', type: 'meal', cost: 520 },
        ],
    },
];

// ── Tasks ──
export const tasks = [
    { id: 'TSK-001', title: 'Send visa documents to Sophia Chen', client: 'Sophia Chen', priority: 'high', status: 'todo', due: '2025-03-05' },
    { id: 'TSK-002', title: 'Follow up on Swiss Alps quotation', client: 'Hans Mueller', priority: 'medium', status: 'todo', due: '2025-03-06' },
    { id: 'TSK-003', title: 'Book airport transfers for Tokyo trip', client: 'Isabella Romano', priority: 'high', status: 'in_progress', due: '2025-03-04' },
    { id: 'TSK-004', title: 'Process refund for cancelled booking', client: 'James Wilson', priority: 'high', status: 'in_progress', due: '2025-03-03' },
    { id: 'TSK-005', title: 'Update Dubai package pricing', client: 'David Kim', priority: 'low', status: 'done', due: '2025-03-02' },
    { id: 'TSK-006', title: 'Confirm hotel reservation in Santorini', client: 'Maria Santos', priority: 'medium', status: 'in_progress', due: '2025-03-08' },
    { id: 'TSK-007', title: 'Prepare group travel proposal', client: 'Corporate Client', priority: 'medium', status: 'todo', due: '2025-03-10' },
    { id: 'TSK-008', title: 'Renew Amadeus GDS credentials', client: 'System', priority: 'low', status: 'done', due: '2025-03-01' },
];

// ── Messages ──
export const messageThreads = [
    {
        id: 'MSG001', sender: 'Sophia Chen', avatar: 'SC', channel: 'whatsapp' as const,
        preview: 'Hi! Can we add a sunset cruise to the Maldives itinerary?',
        time: '2m ago', unread: true, sentiment: 'positive' as const,
        messages: [
            { from: 'client', text: 'Hi! Can we add a sunset cruise to the Maldives itinerary?', time: '10:32 AM' },
            { from: 'agent', text: 'Absolutely! I have a fantastic luxury dhoni cruise option. $380 per person, includes champagne. Shall I add it to Day 3?', time: '10:35 AM' },
            { from: 'client', text: 'That sounds perfect! Yes please, Day 3 works great.', time: '10:36 AM' },
        ],
    },
    {
        id: 'MSG002', sender: 'Hans Mueller', avatar: 'HM', channel: 'email' as const,
        preview: 'I need to change my reservation dates for the Alps trip',
        time: '15m ago', unread: true, sentiment: 'neutral' as const,
        messages: [
            { from: 'client', text: 'Dear Travel Team, I need to change my reservation dates for the Alps trip. Can we move it from March 15-22 to March 22-29?', time: '9:45 AM' },
            { from: 'agent', text: 'Hi Hans! Let me check availability for those dates. I will get back to you within the hour.', time: '9:50 AM' },
        ],
    },
    {
        id: 'MSG003', sender: 'David Kim', avatar: 'DK', channel: 'sms' as const,
        preview: 'Can you send me the updated invoice for the Dubai package?',
        time: '1h ago', unread: false, sentiment: 'positive' as const,
        messages: [
            { from: 'client', text: 'Can you send me the updated invoice for the Dubai package?', time: '9:00 AM' },
            { from: 'agent', text: 'Sent! Please check your email. The updated total reflects the suite upgrade.', time: '9:05 AM' },
            { from: 'client', text: 'Got it. Thanks for the quick turnaround!', time: '9:08 AM' },
        ],
    },
];

// ── Suppliers ──
export const suppliersList = [
    { id: 'SUP001', name: 'Emirates Airlines', type: 'Airline', commissionRate: 8, responseTime: '< 2h', rating: 4.9, totalBookings: 1250, revenue: 2400000, complaints: 3, status: 'active', contract: '2025-12-31', paymentTerms: 'Net 30' },
    { id: 'SUP002', name: 'Marriott International', type: 'Hotel Chain', commissionRate: 12, responseTime: '< 4h', rating: 4.7, totalBookings: 890, revenue: 1800000, complaints: 8, status: 'active', contract: '2025-06-30', paymentTerms: 'Net 45' },
    { id: 'SUP003', name: 'Hotelbeds', type: 'Bed Bank', commissionRate: 15, responseTime: '< 1h', rating: 4.5, totalBookings: 2100, revenue: 3200000, complaints: 12, status: 'active', contract: '2026-03-31', paymentTerms: 'Net 30' },
    { id: 'SUP004', name: 'Arabian Adventures', type: 'DMC', commissionRate: 18, responseTime: '< 3h', rating: 4.8, totalBookings: 450, revenue: 890000, complaints: 2, status: 'active', contract: '2025-09-30', paymentTerms: 'Net 15' },
    { id: 'SUP005', name: 'Viator', type: 'Activity Provider', commissionRate: 20, responseTime: '< 1h', rating: 4.4, totalBookings: 1800, revenue: 650000, complaints: 15, status: 'active', contract: '2025-12-31', paymentTerms: 'Net 30' },
    { id: 'SUP006', name: 'TUI Group', type: 'Tour Operator', commissionRate: 14, responseTime: '< 6h', rating: 4.6, totalBookings: 320, revenue: 1200000, complaints: 5, status: 'active', contract: '2026-01-31', paymentTerms: 'Net 45' },
];

// ── Products ──
export const products = [
    { id: 'PRD001', name: 'Maldives Overwater Villa - 7N All-Inclusive', type: 'Hotel', destination: 'Maldives', supplier: 'Marriott', price: 8900, currency: 'USD', season: 'Peak', available: 12, allocated: 23, rating: 4.9, status: 'active' },
    { id: 'PRD002', name: 'Dubai to London Business Class', type: 'Flight', destination: 'Multi-city', supplier: 'Emirates', price: 4850, currency: 'USD', season: 'Year-round', available: 45, allocated: 120, rating: 4.8, status: 'active' },
    { id: 'PRD003', name: 'Grand Tour of Italy - 10 Days', type: 'Tour', destination: 'Italy', supplier: 'TUI Group', price: 5200, currency: 'EUR', season: 'Summer', available: 8, allocated: 32, rating: 4.7, status: 'active' },
    { id: 'PRD004', name: 'Private Colosseum Underground Tour', type: 'Activity', destination: 'Rome', supplier: 'Viator', price: 320, currency: 'EUR', season: 'Year-round', available: 2, allocated: 48, rating: 4.9, status: 'active' },
    { id: 'PRD005', name: 'Tokyo Cherry Blossom Week', type: 'Tour', destination: 'Japan', supplier: 'Arabian Adv.', price: 6800, currency: 'USD', season: 'Spring', available: 0, allocated: 20, rating: 4.8, status: 'sold_out' },
    { id: 'PRD006', name: 'Swiss Alps Ski Chalet - 5N', type: 'Hotel', destination: 'Switzerland', supplier: 'Hotelbeds', price: 4200, currency: 'CHF', season: 'Winter', available: 4, allocated: 16, rating: 4.6, status: 'active' },
];

// ── Financial Data ──
export const financialData = {
    totalRevenue: 3190000,
    netProfit: 892000,
    accountsReceivable: 245000,
    accountsPayable: 178000,
    monthlyPL: [
        { month: 'Jan', revenue: 185000, expenses: 132000, profit: 53000 },
        { month: 'Feb', revenue: 198000, expenses: 141000, profit: 57000 },
        { month: 'Mar', revenue: 215000, expenses: 148000, profit: 67000 },
        { month: 'Apr', revenue: 242000, expenses: 165000, profit: 77000 },
        { month: 'May', revenue: 268000, expenses: 182000, profit: 86000 },
        { month: 'Jun', revenue: 295000, expenses: 198000, profit: 97000 },
    ],
    currencies: [
        { code: 'USD', rate: 1.00, balance: 1245000 },
        { code: 'EUR', rate: 0.92, balance: 456000 },
        { code: 'GBP', rate: 0.79, balance: 234000 },
        { code: 'AED', rate: 3.67, balance: 890000 },
        { code: 'CHF', rate: 0.88, balance: 123000 },
    ],
    invoices: [
        { id: 'INV-2025001', supplier: 'Emirates Airlines', amount: 48500, currency: 'USD', due: '2025-04-15', status: 'pending' },
        { id: 'INV-2025002', supplier: 'Marriott International', amount: 32100, currency: 'USD', due: '2025-04-01', status: 'overdue' },
        { id: 'INV-2025003', supplier: 'Hotelbeds', amount: 28900, currency: 'EUR', due: '2025-04-30', status: 'paid' },
        { id: 'INV-2025004', supplier: 'Arabian Adventures', amount: 12800, currency: 'AED', due: '2025-03-25', status: 'paid' },
        { id: 'INV-2025005', supplier: 'TUI Group', amount: 45200, currency: 'EUR', due: '2025-04-10', status: 'pending' },
    ],
};

// ── Audit Log ──
export const auditLog = [
    { id: 1, severity: 'info', timestamp: '2025-03-03 10:32:15', user: 'Sarah Mitchell', action: 'Created booking', target: 'BK-2025001', ip: '192.168.1.45' },
    { id: 2, severity: 'info', timestamp: '2025-03-03 10:28:03', user: 'Daniel Park', action: 'Updated client profile', target: 'CL004', ip: '192.168.1.52' },
    { id: 3, severity: 'warning', timestamp: '2025-03-03 10:15:42', user: 'System', action: 'Failed login attempt', target: 'admin@agency.com', ip: '203.45.67.89' },
    { id: 4, severity: 'info', timestamp: '2025-03-03 09:58:19', user: 'Rebecca Torres', action: 'Generated invoice', target: 'INV-2025005', ip: '192.168.1.33' },
    { id: 5, severity: 'critical', timestamp: '2025-03-03 09:45:11', user: 'System', action: 'Rate limit exceeded', target: 'API Gateway', ip: '10.0.0.1' },
    { id: 6, severity: 'info', timestamp: '2025-03-03 09:30:05', user: 'Ahmed Hassan', action: 'Approved discount', target: 'BK-2025004', ip: '192.168.1.67' },
];

// ── Integrations ──
export const integrations = [
    { id: 'INT001', name: 'Amadeus', category: 'GDS', status: 'connected', lastSync: '2 min ago', requestsToday: 12450, errorRate: 0.2, logoColor: '#1A54C4' },
    { id: 'INT002', name: 'Sabre', category: 'GDS', status: 'connected', lastSync: '5 min ago', requestsToday: 8900, errorRate: 0.3, logoColor: '#E4002B' },
    { id: 'INT003', name: 'Travelport', category: 'GDS', status: 'connected', lastSync: '10 min ago', requestsToday: 5400, errorRate: 0.5, logoColor: '#003B71' },
    { id: 'INT004', name: 'Stripe', category: 'Payments', status: 'connected', lastSync: '1 min ago', requestsToday: 3200, errorRate: 0.1, logoColor: '#635BFF' },
    { id: 'INT005', name: 'SendGrid', category: 'Communication', status: 'connected', lastSync: '30 min ago', requestsToday: 1800, errorRate: 0.4, logoColor: '#1A82E2' },
    { id: 'INT006', name: 'Twilio', category: 'Communication', status: 'error', lastSync: '2 hours ago', requestsToday: 450, errorRate: 2.1, logoColor: '#F22F46' },
    { id: 'INT007', name: 'QuickBooks', category: 'Accounting', status: 'connected', lastSync: '1 hour ago', requestsToday: 890, errorRate: 0.2, logoColor: '#2CA01C' },
];

// ── Helpers ──
export function formatCurrency(amount: number, currency = 'USD'): string {
    return new Intl.NumberFormat('en-US', { style: 'currency', currency, minimumFractionDigits: 0 }).format(amount);
}

export function formatNumber(num: number): string {
    return new Intl.NumberFormat('en-US').format(num);
}

export function getStatusBadgeClass(status: string): string {
    switch (status.toLowerCase()) {
        case 'confirmed': case 'active': case 'connected': case 'completed': case 'paid': return 'success';
        case 'pending': case 'in_progress': case 'away': return 'warning';
        case 'cancelled': case 'error': case 'overdue': case 'sold_out': return 'danger';
        default: return 'info';
    }
}
