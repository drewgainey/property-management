import { Resident } from '../types/resident';

export const mockResidents: Resident[] = [
  {
    id: '1',
    propertyId: '1',
    firstName: 'John',
    lastName: 'Smith',
    email: 'john.smith@email.com',
    phone: '(555) 123-4567',
    moveInDate: '2024-01-01',
    status: 'active',
    emergencyContact: {
      name: 'Jane Smith',
      phone: '(555) 123-4568',
      relationship: 'Spouse'
    },
    createdAt: '2024-01-01T10:00:00Z',
    updatedAt: '2024-01-01T10:00:00Z'
  },
  {
    id: '2',
    propertyId: '2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    email: 'sarah.johnson@email.com',
    phone: '(555) 234-5678',
    moveInDate: '2023-11-15',
    status: 'active',
    emergencyContact: {
      name: 'Mike Johnson',
      phone: '(555) 234-5679',
      relationship: 'Brother'
    },
    createdAt: '2023-11-15T14:30:00Z',
    updatedAt: '2023-11-15T14:30:00Z'
  },
  {
    id: '3',
    propertyId: '3',
    firstName: 'Robert',
    lastName: 'Davis',
    email: 'robert.davis@email.com',
    phone: '(555) 345-6789',
    moveInDate: '2023-09-01',
    moveOutDate: '2024-01-31',
    status: 'inactive',
    emergencyContact: {
      name: 'Lisa Davis',
      phone: '(555) 345-6790',
      relationship: 'Sister'
    },
    createdAt: '2023-09-01T09:15:00Z',
    updatedAt: '2024-01-31T16:20:00Z'
  },
  {
    id: '4',
    propertyId: '4',
    firstName: 'Emily',
    lastName: 'Wilson',
    email: 'emily.wilson@email.com',
    phone: '(555) 456-7890',
    moveInDate: '2024-02-01',
    status: 'pending',
    emergencyContact: {
      name: 'David Wilson',
      phone: '(555) 456-7891',
      relationship: 'Father'
    },
    createdAt: '2024-01-25T11:20:00Z',
    updatedAt: '2024-01-25T11:20:00Z'
  },
  {
    id: '5',
    propertyId: '5',
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@email.com',
    phone: '(555) 567-8901',
    moveInDate: '2023-12-01',
    status: 'active',
    emergencyContact: {
      name: 'Jennifer Brown',
      phone: '(555) 567-8902',
      relationship: 'Wife'
    },
    createdAt: '2023-12-01T13:10:00Z',
    updatedAt: '2023-12-01T13:10:00Z'
  }
];
