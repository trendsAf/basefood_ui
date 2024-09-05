import React, { useState } from "react";
import AddComponentModal from "../components/AddComponentModal";

const NewDashboard: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPlaceholder, setSelectedPlaceholder] = useState<number | null>(
    null,
  );

  const openModal = (placeholderIndex: number) => {
    setSelectedPlaceholder(placeholderIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPlaceholder(null);
  };

  const addComponent = (componentType: string) => {
    console.log(
      `Adding ${componentType} to placeholder ${selectedPlaceholder}`,
    );
    closeModal();
  };

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[85vh]">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-secondary-black p-4 rounded-lg min-h-[200px] flex items-center justify-center"
          >
            <button
              onClick={() => openModal(index)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              + Add Component
            </button>
          </div>
        ))}
      </div>
      <AddComponentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAdd={addComponent}
      />
    </div>
  );
};

export default NewDashboard;
