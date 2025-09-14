import ResidentsTable from '../../components/ResidentsTable';
import { mockResidents } from '../../data/mockResidents';

export default function ResidentsPage() {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">All Residents</h1>
          <p className="text-lg text-gray-600 mt-2">Manage all residents across all properties</p>
        </div>

        {/* Residents Table */}
        <ResidentsTable residents={mockResidents} />
      </div>
    </div>
  );
}
