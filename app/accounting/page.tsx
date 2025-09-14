import AccountingLedger from '../../components/AccountingLedger';
import FinancialSummaryComponent from '../../components/FinancialSummary';
import { mockAccountingEntries, mockFinancialSummaries } from '../../data/mockAccounting';

export default function AccountingPage() {
  // Calculate portfolio-wide totals
  const totalIncome = mockAccountingEntries
    .filter(entry => entry.category === 'income')
    .reduce((sum, entry) => sum + entry.amount, 0);

  const totalExpenses = mockAccountingEntries
    .filter(entry => entry.category === 'expense')
    .reduce((sum, entry) => sum + Math.abs(entry.amount), 0);

  const portfolioSummary = {
    propertyId: 'portfolio',
    totalIncome,
    totalExpenses,
    netIncome: totalIncome - totalExpenses,
    monthlyRent: 0, // Not applicable for portfolio view
    occupancyRate: 0, // Not applicable for portfolio view
    averageRent: 0, // Not applicable for portfolio view
    lastUpdated: new Date().toISOString()
  };

  return (
    <div className="bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Portfolio Accounting</h1>
          <p className="text-lg text-gray-600 mt-2">Track income and expenses across all properties</p>
        </div>

        {/* Portfolio Financial Summary */}
        <div className="mb-8">
          <FinancialSummaryComponent summary={portfolioSummary} />
        </div>

        {/* Individual Property Summaries */}
        <div className="mb-8">
          <div className="bg-white shadow-sm rounded-lg border border-gray-200 p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Property Financial Summaries</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockFinancialSummaries.map((summary) => (
                <div key={summary.propertyId} className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-3">Property {summary.propertyId}</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Net Income:</span>
                      <span className={`text-sm font-medium ${
                        summary.netIncome >= 0 ? 'text-green-600' : 'text-red-600'
                      }`}>
                        ${summary.netIncome.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Monthly Rent:</span>
                      <span className="text-sm font-medium text-gray-900">
                        ${summary.monthlyRent.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-500">Occupancy:</span>
                      <span className={`text-sm font-medium ${
                        summary.occupancyRate >= 90 ? 'text-green-600' : 
                        summary.occupancyRate >= 70 ? 'text-yellow-600' : 'text-red-600'
                      }`}>
                        {summary.occupancyRate}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Portfolio Accounting Ledger */}
        <div>
          <AccountingLedger entries={mockAccountingEntries} />
        </div>
      </div>
    </div>
  );
}
