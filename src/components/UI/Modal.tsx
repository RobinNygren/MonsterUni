import { Dialog } from "@headlessui/react";

type ModalContent = {
  title: string;
  description: string;
  image?: string;
};
type MyModalProps = {
  isOpen: boolean;
  onClose: () => void;
  content: ModalContent;
};

const MyModal = ({ isOpen, onClose, content }: MyModalProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        onClose={onClose}
        className="fixed inset-0 z-10 overflow-y-auto"
      >
        <div className="flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
          <Dialog.Panel className="bg-white rounded-lg shadow-xl max-w-md mx-auto p-6">
            <Dialog.Title as="h3" className="text-lg font-bold">
              {content.title}
            </Dialog.Title>
            {content.image && (
              <img
                src={content.image}
                alt={content.title}
                className="max-w-full h-auto mt-4"
              />
            )}
            <p className="mt-2 text-sm text-gray-500">{content.description}</p>
            <button
              onClick={onClose}
              className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default MyModal;
