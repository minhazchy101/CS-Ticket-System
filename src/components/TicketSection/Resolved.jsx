import React from 'react';

const Resolved = ({resolved}) => {
    return (
        <div>
              <h1 className="text-2xl font-bold">Resolved Task</h1>
              {resolved==0 ?<p className="py-3 text-gray-400">
        No resolved tasks yet.
      </p>  :   <div className='mt-8 space-y-6'>
        {resolved.map((resolve)=>(
             <div key={resolve.id} className="p-4 bg-[#E0E7FF] border border-gray-200 hover:-translate-y-1 transition duration-300 rounded-lg shadow shadow-black/10 w-full">
            <p className="text-gray-900 text-xl font-semibold">
                {resolve.title}
            </p>
            
        </div>
        ))}
     
      </div>}
              
        </div>
    );
};

export default Resolved;