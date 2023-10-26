import React from 'react';

interface NotificationProps {
  message: string;
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, onClose }) => {
  return (
    <div className="fixed bottom-5 right-5 w-64 p-4 bg-gray-800 text-red rounded-lg">
      <div>{message}</div>
      <button onClick={onClose} className="mt-2 bg-red-500 text-red py-1 px-3 rounded">Close</button>
    </div>
  );
};

export default Notification;
