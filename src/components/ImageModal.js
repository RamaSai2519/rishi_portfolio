import React from 'react';

const ImageModal = ({ isOpen, photo, title, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
            <div className="relative bg-white rounded-lg shadow-lg max-w-3xl w-full p-4 flex flex-col items-center">
                <button
                    className="absolute top-2 right-2 text-gray-700 hover:text-red-500 text-2xl font-bold"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <img src={photo} alt={title} className="max-h-[70vh] w-auto object-contain rounded mb-4" />
                <div className="text-lg font-semibold text-center text-gray-800">{title}</div>
            </div>
        </div>
    );
};

export default ImageModal;
