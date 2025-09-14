import { notFound } from 'next/navigation';
import Link from 'next/link';
import { mockProperties } from '../../../data/mockProperties';
import { mockResidents } from '../../../data/mockResidents';
import { mockBilling } from '../../../data/mockBilling';
import { mockAccountingEntries, mockFinancialSummaries } from '../../../data/mockAccounting';
import { Property } from '../../../types/property';
import { Resident, Billing } from '../../../types/resident';
import { AccountingEntry, FinancialSummary } from '../../../types/accounting';
import ResidentsTable from '../../../components/ResidentsTable';
import BillingTable from '../../../components/BillingTable';
import AccountingLedger from '../../../components/AccountingLedger';
import FinancialSummaryComponent from '../../../components/FinancialSummary';

interface PropertyDetailPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function PropertyDetailPage({ params }: PropertyDetailPageProps) {
  const { id } = await params;
  const property: Property | undefined = mockProperties.find(p => p.id === id);

  if (!property) {
    notFound();
  }

  // Get residents, billing, and accounting for this property
  const propertyResidents: Resident[] = mockResidents.filter(r => r.propertyId === id);
  const propertyBilling: Billing[] = mockBilling.filter(b => b.propertyId === id);
  const propertyAccounting: AccountingEntry[] = mockAccountingEntries.filter(a => a.propertyId === id);
  const propertyFinancialSummary: FinancialSummary | undefined = mockFinancialSummaries.find(s => s.propertyId === id);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(amount);
  };

  const formatSquareFeet = (sqft: number) => {
    return `${sqft.toLocaleString()} sq ft`;
  };

  const getStatusBadge = (status: Property['status']) => {
    const statusStyles = {
      available: 'bg-green-100 text-green-800',
      occupied: 'bg-blue-100 text-blue-800',
      maintenance: 'bg-yellow-100 text-yellow-800',
      unavailable: 'bg-red-100 text-red-800',
    };

    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${statusStyles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const getTypeIcon = (type: Property['type']) => {
    const icons = {
      apartment: '🏢',
      house: '🏠',
      condo: '🏘️',
      townhouse: '🏘️',
      commercial: '🏢',
    };
    return icons[type] || '🏠';
  };

  return (
    <div className="bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 transition-colors mb-4"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Properties
          </Link>
          
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{property.name}</h1>
              <p className="text-lg text-gray-600 mt-2">{property.address}</p>
            </div>
            <div className="flex items-center space-x-4">
              {getStatusBadge(property.status)}
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-900">{formatCurrency(property.rent)}</div>
                <div className="text-sm text-gray-500">per month</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {/* Property Details */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Property Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Overview */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Property Overview</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <div className="text-sm text-gray-500">Type</div>
                    <div className="text-lg font-medium text-gray-900 flex items-center">
                      <span className="mr-2">{getTypeIcon(property.type)}</span>
                      {property.type.charAt(0).toUpperCase() + property.type.slice(1)}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Bedrooms</div>
                    <div className="text-lg font-medium text-gray-900">{property.bedrooms}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Bathrooms</div>
                    <div className="text-lg font-medium text-gray-900">{property.bathrooms}</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">Square Feet</div>
                    <div className="text-lg font-medium text-gray-900">{formatSquareFeet(property.squareFeet)}</div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Description</h2>
                <p className="text-gray-700 leading-relaxed">{property.description}</p>
              </div>

              {/* Amenities */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Amenities</h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((amenity, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <button className="w-full bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    Edit Property
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Add Resident
                  </button>
                  <button className="w-full bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                    Create Bill
                  </button>
                </div>
              </div>

              {/* Property Info */}
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Property Information</h3>
                <dl className="space-y-3">
                  <div>
                    <dt className="text-sm text-gray-500">Property ID</dt>
                    <dd className="text-sm font-medium text-gray-900">{property.id}</dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Created</dt>
                    <dd className="text-sm text-gray-900">
                      {new Date(property.createdAt).toLocaleDateString()}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm text-gray-500">Last Updated</dt>
                    <dd className="text-sm text-gray-900">
                      {new Date(property.updatedAt).toLocaleDateString()}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>

          {/* Residents Section */}
          <div>
            <ResidentsTable residents={propertyResidents} />
          </div>

          {/* Billing Section */}
          <div>
            <BillingTable billing={propertyBilling} />
          </div>

          {/* Financial Summary Section */}
          {propertyFinancialSummary && (
            <div>
              <FinancialSummaryComponent summary={propertyFinancialSummary} />
            </div>
          )}

          {/* Accounting Ledger Section */}
          <div>
            <AccountingLedger entries={propertyAccounting} />
          </div>
        </div>
      </div>
    </div>
  );
}
