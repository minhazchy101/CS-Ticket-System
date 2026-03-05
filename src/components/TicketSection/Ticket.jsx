import React, { use, useEffect } from 'react';
import TicketCard from './TicketCard';

const Ticket = ({ticketPromise, handleTask, tickets, setTickets }) => {
    const ticketData = use(ticketPromise)
      useEffect(() => {
    setTickets(ticketData);
  }, []);
    console.log(tickets)
    return (
        <div>
           <h1 className="text-2xl font-bold">Customer Tickets {ticketData.length}</h1> 
           <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-8'>
            {tickets.map(ticket => <TicketCard 
            key={ticket.id}
            ticket={ticket} 
            handleTask={handleTask}
            
            />)}
           </div>
        </div>
    );
};

export default Ticket;