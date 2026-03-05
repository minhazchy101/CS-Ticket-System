import React, { Suspense} from 'react';
import Ticket from './Ticket';
import Task from './Task';
import Resolved from './Resolved';


const ticketPromise = fetch("/tickets.json")
      .then((res) => res.json())

const TicketSection = ({handleTask, handleResolved,tasks,resolved, tickets, setTickets }) => {
  
    return (
        <div className="px-6 md:px-16 lg:px-24 py-14 bg-base-200">
  <div className="flex flex-col lg:flex-row gap-8">
    <div className='flex-2'>
    <Suspense fallback={<p>Loading tickets...</p>}>
     <Ticket ticketPromise={ticketPromise}
     handleTask={handleTask}
      tickets={tickets}
    setTickets={setTickets}
     /> 
    </Suspense>

    </div>
    <div className='flex-1'>
      <Task handleResolved={handleResolved} tasks={tasks}/>

     <Resolved resolved={resolved}/>
    </div>
  </div>
</div>
    );
};

export default TicketSection;