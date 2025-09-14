import { AccountingEntry, FinancialSummary } from '../types/accounting';

export const mockAccountingEntries: AccountingEntry[] = [
  // Property 1 - Income
  {
    id: '1',
    propertyId: '1',
    date: '2024-01-28',
    description: 'Monthly Rent - John Smith',
    category: 'income',
    subcategory: 'rent',
    amount: 3200,
    paymentMethod: 'bank_transfer',
    reference: 'TXN-001234',
    notes: 'February 2024 rent payment',
    createdAt: '2024-01-28T14:30:00Z',
    updatedAt: '2024-01-28T14:30:00Z'
  },
  {
    id: '2',
    propertyId: '1',
    date: '2024-02-28',
    description: 'Monthly Rent - John Smith',
    category: 'income',
    subcategory: 'rent',
    amount: 3200,
    paymentMethod: 'bank_transfer',
    reference: 'TXN-001567',
    notes: 'March 2024 rent payment',
    createdAt: '2024-02-28T10:15:00Z',
    updatedAt: '2024-02-28T10:15:00Z'
  },
  // Property 1 - Expenses
  {
    id: '3',
    propertyId: '1',
    date: '2024-01-15',
    description: 'Property Insurance Premium',
    category: 'expense',
    subcategory: 'insurance',
    amount: -450,
    paymentMethod: 'bank_transfer',
    reference: 'INS-2024-001',
    notes: 'Annual property insurance',
    createdAt: '2024-01-15T09:00:00Z',
    updatedAt: '2024-01-15T09:00:00Z'
  },
  {
    id: '4',
    propertyId: '1',
    date: '2024-02-10',
    description: 'Kitchen Faucet Repair',
    category: 'expense',
    subcategory: 'repairs',
    amount: -125,
    paymentMethod: 'credit_card',
    reference: 'REP-001',
    notes: 'Plumber service call',
    createdAt: '2024-02-10T16:45:00Z',
    updatedAt: '2024-02-10T16:45:00Z'
  },
  {
    id: '5',
    propertyId: '1',
    date: '2024-02-20',
    description: 'Property Management Fee',
    category: 'expense',
    subcategory: 'management',
    amount: -320,
    paymentMethod: 'bank_transfer',
    reference: 'MGMT-2024-02',
    notes: 'Monthly management fee (10%)',
    createdAt: '2024-02-20T11:30:00Z',
    updatedAt: '2024-02-20T11:30:00Z'
  },

  // Property 2 - Income
  {
    id: '6',
    propertyId: '2',
    date: '2024-01-15',
    description: 'Monthly Rent - Sarah Johnson',
    category: 'income',
    subcategory: 'rent',
    amount: 2800,
    paymentMethod: 'bank_transfer',
    reference: 'TXN-002345',
    notes: 'January 2024 rent payment',
    createdAt: '2024-01-15T09:30:00Z',
    updatedAt: '2024-01-15T09:30:00Z'
  },
  {
    id: '7',
    propertyId: '2',
    date: '2024-02-05',
    description: 'Monthly Rent - Sarah Johnson',
    category: 'income',
    subcategory: 'rent',
    amount: 2800,
    paymentMethod: 'bank_transfer',
    reference: 'TXN-002678',
    notes: 'February 2024 rent payment',
    createdAt: '2024-02-05T11:20:00Z',
    updatedAt: '2024-02-05T11:20:00Z'
  },
  // Property 2 - Expenses
  {
    id: '8',
    propertyId: '2',
    date: '2024-01-20',
    description: 'Property Tax Payment',
    category: 'expense',
    subcategory: 'taxes',
    amount: -1200,
    paymentMethod: 'bank_transfer',
    reference: 'TAX-2024-Q1',
    notes: 'Q1 2024 property taxes',
    createdAt: '2024-01-20T14:15:00Z',
    updatedAt: '2024-01-20T14:15:00Z'
  },
  {
    id: '9',
    propertyId: '2',
    date: '2024-02-15',
    description: 'HVAC Maintenance',
    category: 'expense',
    subcategory: 'maintenance',
    amount: -200,
    paymentMethod: 'credit_card',
    reference: 'HVAC-001',
    notes: 'Annual HVAC service',
    createdAt: '2024-02-15T10:00:00Z',
    updatedAt: '2024-02-15T10:00:00Z'
  },

  // Property 3 - Income (Robert Davis moved out)
  {
    id: '10',
    propertyId: '3',
    date: '2024-01-10',
    description: 'Monthly Rent - Robert Davis',
    category: 'income',
    subcategory: 'rent',
    amount: 4200,
    paymentMethod: 'bank_transfer',
    reference: 'TXN-003456',
    notes: 'January 2024 rent payment',
    createdAt: '2024-01-10T16:45:00Z',
    updatedAt: '2024-01-10T16:45:00Z'
  },
  // Property 3 - Expenses
  {
    id: '11',
    propertyId: '3',
    date: '2024-01-25',
    description: 'Property Insurance Premium',
    category: 'expense',
    subcategory: 'insurance',
    amount: -600,
    paymentMethod: 'bank_transfer',
    reference: 'INS-2024-002',
    notes: 'Annual property insurance',
    createdAt: '2024-01-25T12:00:00Z',
    updatedAt: '2024-01-25T12:00:00Z'
  },
  {
    id: '12',
    propertyId: '3',
    date: '2024-02-01',
    description: 'Marketing for New Tenant',
    category: 'expense',
    subcategory: 'marketing',
    amount: -300,
    paymentMethod: 'credit_card',
    reference: 'MKT-001',
    notes: 'Online listing fees and photography',
    createdAt: '2024-02-01T09:30:00Z',
    updatedAt: '2024-02-01T09:30:00Z'
  },

  // Property 4 - Income (Emily Wilson pending)
  {
    id: '13',
    propertyId: '4',
    date: '2024-02-15',
    description: 'Security Deposit - Emily Wilson',
    category: 'income',
    subcategory: 'rent',
    amount: 3500,
    paymentMethod: 'bank_transfer',
    reference: 'TXN-004567',
    notes: 'Security deposit received',
    createdAt: '2024-02-15T13:20:00Z',
    updatedAt: '2024-02-15T13:20:00Z'
  },
  // Property 4 - Expenses
  {
    id: '14',
    propertyId: '4',
    date: '2024-02-20',
    description: 'Property Management Fee',
    category: 'expense',
    subcategory: 'management',
    amount: -350,
    paymentMethod: 'bank_transfer',
    reference: 'MGMT-2024-02-4',
    notes: 'Monthly management fee (10%)',
    createdAt: '2024-02-20T11:30:00Z',
    updatedAt: '2024-02-20T11:30:00Z'
  },

  // Property 5 - Income (Commercial)
  {
    id: '15',
    propertyId: '5',
    date: '2024-01-05',
    description: 'Monthly Rent - Michael Brown',
    category: 'income',
    subcategory: 'rent',
    amount: 8500,
    paymentMethod: 'bank_transfer',
    reference: 'TXN-005678',
    notes: 'January 2024 rent payment',
    createdAt: '2024-01-05T10:30:00Z',
    updatedAt: '2024-01-05T10:30:00Z'
  },
  {
    id: '16',
    propertyId: '5',
    date: '2024-02-02',
    description: 'Monthly Rent - Michael Brown',
    category: 'income',
    subcategory: 'rent',
    amount: 8500,
    paymentMethod: 'bank_transfer',
    reference: 'TXN-005901',
    notes: 'February 2024 rent payment',
    createdAt: '2024-02-02T09:15:00Z',
    updatedAt: '2024-02-02T09:15:00Z'
  },
  // Property 5 - Expenses
  {
    id: '17',
    propertyId: '5',
    date: '2024-01-30',
    description: 'Commercial Property Tax',
    category: 'expense',
    subcategory: 'taxes',
    amount: -2100,
    paymentMethod: 'bank_transfer',
    reference: 'TAX-2024-COM-Q1',
    notes: 'Q1 2024 commercial property taxes',
    createdAt: '2024-01-30T15:00:00Z',
    updatedAt: '2024-01-30T15:00:00Z'
  },
  {
    id: '18',
    propertyId: '5',
    date: '2024-02-10',
    description: 'Building Maintenance',
    category: 'expense',
    subcategory: 'maintenance',
    amount: -500,
    paymentMethod: 'credit_card',
    reference: 'MAINT-001',
    notes: 'Monthly building maintenance',
    createdAt: '2024-02-10T14:30:00Z',
    updatedAt: '2024-02-10T14:30:00Z'
  }
];

export const mockFinancialSummaries: FinancialSummary[] = [
  {
    propertyId: '1',
    totalIncome: 6400,
    totalExpenses: -895,
    netIncome: 5505,
    monthlyRent: 3200,
    occupancyRate: 100,
    averageRent: 3200,
    lastUpdated: '2024-02-28T10:15:00Z'
  },
  {
    propertyId: '2',
    totalIncome: 5600,
    totalExpenses: -1400,
    netIncome: 4200,
    monthlyRent: 2800,
    occupancyRate: 100,
    averageRent: 2800,
    lastUpdated: '2024-02-05T11:20:00Z'
  },
  {
    propertyId: '3',
    totalIncome: 4200,
    totalExpenses: -900,
    netIncome: 3300,
    monthlyRent: 4200,
    occupancyRate: 0,
    averageRent: 4200,
    lastUpdated: '2024-02-01T09:30:00Z'
  },
  {
    propertyId: '4',
    totalIncome: 3500,
    totalExpenses: -350,
    netIncome: 3150,
    monthlyRent: 3500,
    occupancyRate: 0,
    averageRent: 3500,
    lastUpdated: '2024-02-20T11:30:00Z'
  },
  {
    propertyId: '5',
    totalIncome: 17000,
    totalExpenses: -2600,
    netIncome: 14400,
    monthlyRent: 8500,
    occupancyRate: 100,
    averageRent: 8500,
    lastUpdated: '2024-02-02T09:15:00Z'
  }
];
