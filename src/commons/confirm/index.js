import React, {useState, useEffect} from 'react';
import ReactModal from 'react-modal';

export const Confirm = ({isVisible, onClose, onConfirm, name}) => {
  return (
    <ReactModal
      isOpen={isVisible}
      className="modal-confirm rounded-lg focus:outline-none mx-auto">
      <>
        <div className="bg-white w-full rounded-lg outline:none relative shadow">
          <div className="border-b border-gray-200 px-4 h-12 flex flex-column items-center">
            <h1 className="font-extrabold">Confirmation</h1>
          </div>

          <div className="content p-2 h-40">
            <p className="text-gray-500 mt-8 text-center">
              Are you sure you want to delete{' '}
              <b className="text-yellow-500">{name}</b>?
            </p>
          </div>

          <div className="w-full absolute bottom-0">
            <button
              onClick={onClose}
              className="bg-gray-900 text-white items-center justify-center h-12 w-1/2 rounded-bl-lg">
              CANCEL
            </button>
            <button
              className="bg-yellow-500 text-white items-center justify-center h-12 w-1/2 rounded-br-lg"
              onClick={onConfirm}>
              CONFIRM
            </button>
          </div>
        </div>
      </>
    </ReactModal>
  );
};
