// src/components/AddServiceForm.tsx
import React, { useState } from 'react';
import { ServiceData } from '../types';

interface AddServiceFormProps {
  onAddService: (service: Omit<ServiceData, 'id'>) => void;
}

const AddServiceForm: React.FC<AddServiceFormProps> = ({ onAddService }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<number | ''>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && description && price !== '') {
      onAddService({ name, description, price: Number(price) });
      setName('');
      setDescription('');
      setPrice('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      <input
        type="text"
        placeholder="Service Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
        className="border p-2 mr-2"
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        className="border p-2 mr-2"
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => {
          const value = e.target.value;
          setPrice(value === '' ? '' : Number(value)); // Handle empty string and convert to number
        }}
        required
        className="border p-2 mr-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2">Add Service</button>
    </form>
  );
};

export default AddServiceForm;
