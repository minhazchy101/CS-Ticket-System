import React from 'react';
import { FaCalendar } from 'react-icons/fa';
const TicketCard = ({ ticket, handleTask }) => {
  const {
    id,
    title,
    description,
    customer,
    priority,
    status,
    createdAt,
  } = ticket;

  // Format date as M/D/YYYY (adjust as needed)
  const formattedDate = new Date(createdAt).toLocaleDateString('en-US');

  // Priority color classes
  const priorityColors = {
    High: 'text-red-600 font-bold',
    Medium: 'text-yellow-600 font-semibold',
    Low: 'text-green-600',
  };

  // Status badge color
  const statusColors = {
    Open: 'bg-green-500 text-white',
    Pending: 'bg-yellow-500 text-black',
  };

  return (
    <div onClick={()=>handleTask(ticket)} className="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 max-w-md">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-gray-900 text-xl font-semibold">{title}</h3>
        <span
          className={`text-xs px-3 py-1 rounded-full ${statusColors[status] || 'bg-gray-300'}`}
        >
          {status}
        </span>
      </div>

      <p className="text-zinc-500 text-sm mb-3">{description}</p>

      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center text-sm gap-2">
            <p>#{id}</p>
            <p className={priorityColors[priority] || 'text-gray-600'}>{priority} Priority</p>
        </div>
        <div className="flex justify-between items-center text-sm gap-2">
            <p> {customer}</p>
            <p className='flex justify-between items-center gap-1'> <FaCalendar size={16} color="#4B5563" /> {formattedDate}</p>
        </div>
      </div>

    </div>
  );
};

export default TicketCard;