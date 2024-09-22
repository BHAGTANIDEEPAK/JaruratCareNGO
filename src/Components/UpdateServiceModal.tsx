// src/components/UpdateServiceModal.tsx
import React, { useState } from 'react';
import { ServiceData } from '../types';

interface UpdateServiceModalProps {
  service: ServiceData;
  onClose: () => void;
  onUpdateService: (service: ServiceData) => void;
}

const UpdateServiceModal: React.FC<UpdateServiceModalProps> = ({
  service,
  onClose,
  onUpdateService,
}) => {
  const [name, setName] = useState(service.name);
  const [description, setDescription] = useState(service.description);
  const [price, setPrice] = useState(service.price);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateService({ ...service, name, description, price });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Update Service</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Service Name"
            className="border p-2 mb-2 w-full"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            className="border p-2 mb-2 w-full"
            required
          />
          <input
            type="number"
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            placeholder="Price"
            className="border p-2 mb-4 w-full"
            required
          />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Update
          </button>
          <button type="button" onClick={onClose} className="ml-2 bg-gray-300 p-2 rounded">
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateServiceModal;
