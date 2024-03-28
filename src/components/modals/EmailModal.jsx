'use client'
import React, { useState } from 'react';
import CustomPlanForm from '../forms/CustomPlanForm';
import { FaCross } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';

const EmailModal = ({modalTitle}) => {
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
    <div >

      {/* Trigger/Open The Modal */}
      {/* Trigger/Open The Modal */}
      <button onClick={openModal} className="bg-myDark text-white 
                         w-fit rounded-full  top-0 py-3 left-0  transition px-6 text-xs  duration-300 hover:bg-myBlue hover:shadow-xl shadow-md font-semibold cursor-pointer">
        {
          modalTitle? modalTitle : "open modal"
        }
      </button>

      {/* The Modal */}
      <div
        className={`fixed z-40 inset-0 overflow-y-auto  ${modalOpen ? 'block' : 'hidden'}`}
        onClick={handleCloseOutside}
      >
        {/* Modal content */}
        <div
         className={`transition-opacity duration-300  ${modalOpen ? 'opacity-100' : 'opacity-0'}`}>
          <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            {/* Background overlay */}
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-black opacity-75 z-40"></div>
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
                <div>
                  <h3 className="text-myBlue text-xl font-semibold text-center py-3">Please Fill In the form </h3>
                </div>
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
