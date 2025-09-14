export interface AccountingEntry {
  id: string;
  propertyId: string;
  date: string;
  description: string;
  category: 'income' | 'expense';
  subcategory: 'rent' | 'utilities' | 'maintenance' | 'repairs' | 'insurance' | 'taxes' | 'management' | 'marketing' | 'legal' | 'other';
  amount: number;
  paymentMethod: 'cash' | 'check' | 'bank_transfer' | 'credit_card' | 'other';
  reference: string; // Check number, transaction ID, etc.
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FinancialSummary {
  propertyId: string;
  totalIncome: number;
  totalExpenses: number;
  netIncome: number;
  monthlyRent: number;
  occupancyRate: number;
  averageRent: number;
  lastUpdated: string;
}
