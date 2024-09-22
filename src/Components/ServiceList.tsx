import React from 'react';
import { ServiceData } from '../types';

interface ServiceListProps {
  services: ServiceData[];
  onEditService: (service: ServiceData) => void;
  onDeleteService: (id: number) => void;
}

const ServiceList: React.FC<ServiceListProps> = ({ services, onEditService, onDeleteService }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xl font-bold mb-4">Services</h2>
      <ul>
        {services.map((service) => (
          <li key={service.id} className="flex justify-between items-center border-b py-2">
            <div>
              <h3 className="font-semibold">{service.name}</h3>
              <p>{service.description}</p>
              <p className="text-gray-600">₹{service.price}</p>
            </div>
            <div className="flex">
              <button
                onClick={() => onEditService(service)}
                className="bg-yellow-500 text-white p-2 ml-4"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteService(service.id)}
                className="bg-red-500 text-white p-2 ml-4"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceList;
