'use client';

import { FinancialSummary } from '../types/accounting';

interface FinancialSummaryProps {
  summary: FinancialSummary;
}

export default function FinancialSummaryComponent({ summary }: FinancialSummaryProps) {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  const getNetIncomeColor = (netIncome: number) => {
    if (netIncome > 0) return 'text-green-600';
    if (netIncome < 0) return 'text-red-600';
    return 'text-gray-600';
  };

  const getOccupancyColor = (rate: number) => {
    if (rate >= 90) return 'text-green-600';
    if (rate >= 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Financial Summary</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Income */}
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600 mb-2">
            {formatCurrency(summary.totalIncome)}
          </div>
          <div className="text-sm text-gray-500">Total Income</div>
          <div className="text-xs text-gray-400 mt-1">All time</div>
        </div>

        {/* Total Expenses */}
        <div className="text-center">
          <div className="text-3xl font-bold text-red-600 mb-2">
            {formatCurrency(summary.totalExpenses)}
          </div>
          <div className="text-sm text-gray-500">Total Expenses</div>
          <div className="text-xs text-gray-400 mt-1">All time</div>
        </div>

        {/* Net Income */}
        <div className="text-center">
          <div className={`text-3xl font-bold mb-2 ${getNetIncomeColor(summary.netIncome)}`}>
            {formatCurrency(summary.netIncome)}
          </div>
          <div className="text-sm text-gray-500">Net Income</div>
          <div className="text-xs text-gray-400 mt-1">Profit/Loss</div>
        </div>

        {/* Monthly Rent */}
        <div className="text-center">
          <div className="text-3xl font-bold text-indigo-600 mb-2">
            {formatCurrency(summary.monthlyRent)}
          </div>
          <div className="text-sm text-gray-500">Monthly Rent</div>
          <div className="text-xs text-gray-400 mt-1">Current rate</div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Occupancy Rate */}
          <div className="text-center">
            <div className={`text-2xl font-bold mb-2 ${getOccupancyColor(summary.occupancyRate)}`}>
              {formatPercentage(summary.occupancyRate)}
            </div>
            <div className="text-sm text-gray-500">Occupancy Rate</div>
            <div className="text-xs text-gray-400 mt-1">Current occupancy</div>
          </div>

          {/* Average Rent */}
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 mb-2">
              {formatCurrency(summary.averageRent)}
            </div>
            <div className="text-sm text-gray-500">Average Rent</div>
            <div className="text-xs text-gray-400 mt-1">Historical average</div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="text-xs text-gray-400 text-center">
          Last updated: {new Date(summary.lastUpdated).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>
      </div>
    </div>
  );
}
