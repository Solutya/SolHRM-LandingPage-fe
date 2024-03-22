'use client'
import React, { useState } from 'react';
import CustomPlanForm from '../forms/CustomPlanForm';
import { FaCross } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const EmailModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  // Function to open the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  // Function to close the modal if clicked outside of it
  const handleCloseOutside = (event) => {
    if (event.target === event.currentTarget) {
      setModalOpen(false);
    }
  };

  return (
    <div>
      <h2>Modal Example</h2>

      {/* Trigger/Open The Modal */}
      {/* Trigger/Open The Modal */}
      <button onClick={openModal} className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded">
        Open Modal
      </button>

      {/* The Modal */}
      <div
        className={`fixed z-10 inset-0 overflow-y-auto  ${modalOpen ? 'block' : 'hidden'}`}
        onClick={handleCloseOutside}
      >
        {/* Modal content */}
        <div
         className={`transition-opacity duration-300  ${modalOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
            </div>

            {/* Modal panel */}
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse ">
                <button onClick={closeModal} type="button" className="bg-rose-500 text-white rounded-full p-1 transition duration-700  hover:bg-rose-600 ">
                  <IoClose className="text-xl" />
                </button>
              </div>
              <div>
                <CustomPlanForm/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmailModal;
