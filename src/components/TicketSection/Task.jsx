import React from 'react';

const Task = ({tasks}) => {
    console.log(tasks)
    return (
        <div className='mb-4'>
             <h1 className="text-2xl font-bold">Task Status!</h1>
             {tasks== 0?<p className="py-3 text-gray-400">
        Select a ticket to add to Task Status
      </p> : 
      <div className='mt-8 space-y-6'>
        {tasks.map((task)=>(
             <div key={task.id} className="p-4 bg-white border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 w-full">
            <p className="text-gray-900 text-xl font-semibold my-2">
                {task.title}
            </p>
            
            <button className="bg-[#02A53B] hover:bg-[#02a53bc7] transition cursor-pointer px-6 py-2 font-medium rounded-md text-white text-sm w-full">
                Learn More
            </button>
        </div>
        ))}
     
      </div>
      }
              
        </div>
    );
};

export default Task;