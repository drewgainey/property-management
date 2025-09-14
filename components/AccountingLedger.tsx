'use client';

import { useState } from 'react';
import { AccountingEntry } from '../types/accounting';

interface AccountingLedgerProps {
  entries: AccountingEntry[];
}

export default function AccountingLedger({ entries }: AccountingLedgerProps) {
  const [filter, setFilter] = useState<'all' | 'income' | 'expense'>('all');
  const [sortBy, setSortBy] = useState<'date' | 'amount' | 'category'>('date');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc');

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const getCategoryIcon = (category: AccountingEntry['category']) => {
    return category === 'income' ? '💰' : '💸';
  };

  const getSubcategoryIcon = (subcategory: AccountingEntry['subcategory']) => {
    const icons = {
      rent: '🏠',
      utilities: '⚡',
      maintenance: '🔧',
      repairs: '🔨',
      insurance: '🛡️',
      taxes: '📊',
      management: '👥',
      marketing: '📢',
      legal: '⚖️',
      other: '📄',
    };
    return icons[subcategory] || '📄';
  };

  const getPaymentMethodIcon = (method: AccountingEntry['paymentMethod']) => {
    const icons = {
      cash: '💵',
      check: '📝',
      bank_transfer: '🏦',
      credit_card: '💳',
      other: '📄',
    };
    return icons[method] || '📄';
  };

  // Filter and sort entries
  const filteredEntries = entries
    .filter(entry => filter === 'all' || entry.category === filter)
    .sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'date':
          comparison = new Date(a.date).getTime() - new Date(b.date).getTime();
          break;
        case 'amount':
          comparison = Math.abs(a.amount) - Math.abs(b.amount);
          break;
        case 'category':
          comparison = a.subcategory.localeCompare(b.subcategory);
          break;
      }
      return sortOrder === 'asc' ? comparison : -comparison;
    });

  // Calculate totals
  const totalIncome = entries
    .filter(entry => entry.category === 'income')
    .reduce((sum, entry) => sum + entry.amount, 0);

  const totalExpenses = entries
    .filter(entry => entry.category === 'expense')
    .reduce((sum, entry) => sum + Math.abs(entry.amount), 0);

  const netIncome = totalIncome - totalExpenses;

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Accounting Ledger</h2>
            <p className="text-sm text-gray-600 mt-1">Track income and expenses for this property</p>
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-sm bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Add Entry
            </button>
          </div>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">{formatCurrency(totalIncome)}</div>
            <div className="text-sm text-gray-500">Total Income</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-red-600">{formatCurrency(totalExpenses)}</div>
            <div className="text-sm text-gray-500">Total Expenses</div>
          </div>
          <div className="text-center">
            <div className={`text-2xl font-bold ${netIncome >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {formatCurrency(netIncome)}
            </div>
            <div className="text-sm text-gray-500">Net Income</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900">{entries.length}</div>
            <div className="text-sm text-gray-500">Total Entries</div>
          </div>
        </div>
      </div>

      {/* Filters and Sorting */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex flex-wrap gap-4 items-center">
          <div className="flex space-x-2">
            <span className="text-sm font-medium text-gray-700">Filter:</span>
            {(['all', 'income', 'expense'] as const).map((filterType) => (
              <button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  filter === filterType
                    ? 'bg-indigo-100 text-indigo-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </button>
            ))}
          </div>
          
          <div className="flex space-x-2">
            <span className="text-sm font-medium text-gray-700">Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'date' | 'amount' | 'category')}
              className="text-sm border border-gray-300 rounded-md px-2 py-1"
            >
              <option value="date">Date</option>
              <option value="amount">Amount</option>
              <option value="category">Category</option>
            </select>
            <button
              onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              className="px-2 py-1 text-sm bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 transition-colors"
            >
              {sortOrder === 'asc' ? '↑' : '↓'}
            </button>
          </div>
        </div>
      </div>

      {/* Ledger Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Payment Method
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reference
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredEntries.map((entry) => (
              <tr key={entry.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{formatDate(entry.date)}</div>
                </td>
                <td className="px-6 py-4">
                  <div className="text-sm text-gray-900">{entry.description}</div>
                  {entry.notes && (
                    <div className="text-sm text-gray-500 mt-1">{entry.notes}</div>
                  )}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-2">{getCategoryIcon(entry.category)}</span>
                    <span className="text-sm text-gray-900 capitalize">
                      {entry.subcategory.replace('_', ' ')}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className={`text-sm font-medium ${
                    entry.category === 'income' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {entry.category === 'income' ? '+' : '-'}{formatCurrency(Math.abs(entry.amount))}
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <span className="mr-2">{getPaymentMethodIcon(entry.paymentMethod)}</span>
                    <span className="text-sm text-gray-900 capitalize">
                      {entry.paymentMethod.replace('_', ' ')}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{entry.reference}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {filteredEntries.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg">No accounting entries found</div>
          <div className="text-gray-400 text-sm mt-2">
            {filter === 'all' ? 'Add your first accounting entry' : `No ${filter} entries found`}
          </div>
        </div>
      )}
    </div>
  );
}
