import { Billing } from '../types/resident';

export const mockBilling: Billing[] = [
  // Property 1 - John Smith
  {
    id: '1',
    propertyId: '1',
    residentId: '1',
    amount: 3200,
    dueDate: '2024-02-01',
    paidDate: '2024-01-28',
    status: 'paid',
    description: 'Monthly Rent - February 2024',
    type: 'rent',
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-28T14:30:00Z'
  },
  {
    id: '2',
    propertyId: '1',
    residentId: '1',
    amount: 3200,
    dueDate: '2024-03-01',
    status: 'pending',
    description: 'Monthly Rent - March 2024',
    type: 'rent',
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z'
  },
  // Property 2 - Sarah Johnson
  {
    id: '3',
    propertyId: '2',
    residentId: '2',
    amount: 2800,
    dueDate: '2024-01-01',
    paidDate: '2024-01-15',
    status: 'paid',
    description: 'Monthly Rent - January 2024',
    type: 'rent',
    createdAt: '2023-12-01T10:00:00Z',
    updatedAt: '2024-01-15T09:30:00Z'
  },
  {
    id: '4',
    propertyId: '2',
    residentId: '2',
    amount: 2800,
    dueDate: '2024-02-01',
    paidDate: '2024-02-05',
    status: 'paid',
    description: 'Monthly Rent - February 2024',
    type: 'rent',
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-02-05T11:20:00Z'
  },
  {
    id: '5',
    propertyId: '2',
    residentId: '2',
    amount: 2800,
    dueDate: '2024-03-01',
    status: 'pending',
    description: 'Monthly Rent - March 2024',
    type: 'rent',
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z'
  },
  // Property 3 - Robert Davis (moved out)
  {
    id: '6',
    propertyId: '3',
    residentId: '3',
    amount: 4200,
    dueDate: '2024-01-01',
    paidDate: '2024-01-10',
    status: 'paid',
    description: 'Monthly Rent - January 2024',
    type: 'rent',
    createdAt: '2023-12-01T10:00:00Z',
    updatedAt: '2024-01-10T16:45:00Z'
  },
  {
    id: '7',
    propertyId: '3',
    residentId: '3',
    amount: 150,
    dueDate: '2024-01-15',
    paidDate: '2024-01-20',
    status: 'paid',
    description: 'Late Fee - January Rent',
    type: 'late_fee',
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-20T14:15:00Z'
  },
  // Property 4 - Emily Wilson (pending)
  {
    id: '8',
    propertyId: '4',
    residentId: '4',
    amount: 3500,
    dueDate: '2024-03-01',
    status: 'pending',
    description: 'Monthly Rent - March 2024',
    type: 'rent',
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z'
  },
  // Property 5 - Michael Brown
  {
    id: '9',
    propertyId: '5',
    residentId: '5',
    amount: 8500,
    dueDate: '2024-01-01',
    paidDate: '2024-01-05',
    status: 'paid',
    description: 'Monthly Rent - January 2024',
    type: 'rent',
    createdAt: '2023-12-01T10:00:00Z',
    updatedAt: '2024-01-05T10:30:00Z'
  },
  {
    id: '10',
    propertyId: '5',
    residentId: '5',
    amount: 8500,
    dueDate: '2024-02-01',
    paidDate: '2024-02-02',
    status: 'paid',
    description: 'Monthly Rent - February 2024',
    type: 'rent',
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-02-02T09:15:00Z'
  },
  {
    id: '11',
    propertyId: '5',
    residentId: '5',
    amount: 8500,
    dueDate: '2024-03-01',
    status: 'pending',
    description: 'Monthly Rent - March 2024',
    type: 'rent',
    createdAt: '2024-02-01T10:00:00Z',
    updatedAt: '2024-02-01T10:00:00Z'
  },
  {
    id: '12',
    propertyId: '5',
    residentId: '5',
    amount: 250,
    dueDate: '2024-02-15',
    status: 'overdue',
    description: 'Utilities - February 2024',
    type: 'utilities',
    createdAt: '2024-02-15T10:00:00Z',
    updatedAt: '2024-02-15T10:00:00Z'
  }
];
