import { useState } from 'react';
import { ArrowsOut, Exam, X } from '@phosphor-icons/react';

interface FileModalProps {
  fileUrl: string;
  fileType: 'pdf' | 'image';
}

export const FileModal = ({ fileUrl, fileType }: FileModalProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="relative inline-flex">
        <button className="hover:text-gray-500" onClick={openModal}>
          <span className="absolute -top-0 -right-0 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs">
            <ArrowsOut size={10} weight="fill" />
          </span>
          <Exam size={64} weight="thin" className="max-md:size-10" />
        </button>
      </div>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center max-md:items-start bg-black bg-opacity-50 rounded-md">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full max-h-full overflow-auto md-max:mt-5 md:max-w-md sm:max-w-sm">
            <div className="mt-2">
              <button
                onClick={closeModal}
                className="absolute top-0 right-0 m-4 text-gray-500 hover:text-gray-700">
                <X size={16} weight="light" />
              </button>
            </div>
            <div>
              {fileType === 'pdf' ? (
                <iframe
                  src={fileUrl}
                  className="w-full h-full md:h-80vh sm:h-60vh"
                  title="PDF Viewer"
                />
              ) : (
                <img
                  src={fileUrl}
                  alt="File"
                  className="w-full h-auto max-h-full md:max-h-80vh sm:max-h-60vh"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
