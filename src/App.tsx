import React, { useState } from 'react';
import AddServiceForm from './Components/AddServiceForm';
import ServiceList from './Components/ServiceList';
import UpdateServiceModal from './Components/UpdateServiceModal';
import ServiceOverviewChart from './Components/ServiceOverviewChart';
import { ServiceData } from './types';

const App: React.FC = () => {
  const [services, setServices] = useState<ServiceData[]>([
    { id: 1, name: 'General Checkup', description: 'Basic health checkup', price: 50 },
    { id: 2, name: 'Blood Test', description: 'Comprehensive blood analysis', price: 30 },
    { id: 3, name: 'X-Ray', description: 'X-Ray imaging service', price: 100 },
    { id: 4, name: 'Vaccination', description: 'Routine vaccinations for children', price: 20 },
  ]);
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  const handleAddService = (service: Omit<ServiceData, 'id'>) => {
    setServices((prev) => [...prev, { ...service, id: Date.now() }]);
  };

  const handleDeleteService = (id: number) => {
    setServices((prev) => prev.filter((service) => service.id !== id));
  };

  const handleUpdateService = (updatedService: ServiceData) => {
    setServices((prev) =>
      prev.map((service) => (service.id === updatedService.id ? updatedService : service))
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Healthcare Services</h1>
      <AddServiceForm onAddService={handleAddService} />
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-2/3 pr-4">
          <ServiceList
            services={services}
            onEditService={setSelectedService}
            onDeleteService={handleDeleteService}
          />
        </div>
        <div className="w-full md:w-1/3 mt-4 md:mt-0">
          <h2 className="text-xl font-bold">Service Overview</h2>
          <ServiceOverviewChart services={services} />
        </div>
      </div>
      {selectedService && (
        <UpdateServiceModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onUpdateService={handleUpdateService}
        />
      )}
    </div>
  );
};

export default App;
