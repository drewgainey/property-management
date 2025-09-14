export interface Resident {
  id: string;
  propertyId: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  moveInDate: string;
  moveOutDate?: string;
  status: 'active' | 'inactive' | 'pending';
  emergencyContact: {
    name: string;
    phone: string;
    relationship: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Billing {
  id: string;
  propertyId: string;
  residentId: string;
  amount: number;
  dueDate: string;
  paidDate?: string;
  status: 'pending' | 'paid' | 'overdue' | 'cancelled';
  description: string;
  type: 'rent' | 'utilities' | 'maintenance' | 'late_fee' | 'other';
  createdAt: string;
  updatedAt: string;
}
