import PropertiesTable from '../components/PropertiesTable';
import { mockProperties } from '../data/mockProperties';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Property Management</h1>
          <p className="text-lg text-gray-600 mt-2">Manage your property portfolio</p>
        </div>

        {/* Properties Table */}
        <PropertiesTable properties={mockProperties} />
      </div>
    </div>
  );
}
