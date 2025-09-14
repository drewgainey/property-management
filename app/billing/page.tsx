import BillingTable from '../../components/BillingTable';
import { mockBilling } from '../../data/mockBilling';

export default function BillingPage() {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Billing</h1>
          <p className="text-lg text-gray-600 mt-2">Track all rent payments and charges across all properties</p>
        </div>

        {/* Billing Table */}
        <BillingTable billing={mockBilling} />
      </div>
    </div>
  );
}
