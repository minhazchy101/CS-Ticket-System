
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar";
import TicketSection from "./components/TicketSection/TicketSection";
import { useState } from "react";


function App() {
  const [tasks, setTasks] = useState([])
    const [resolved, setResolved] = useState([])
      
  
        const handleTask =(ticket)=>{
          const newTask = [...tasks, ticket]
          toast.success("Task Added");
          setTasks(newTask)
        }
        const handleResolved =(task)=>{
          const remainTask = tasks.filter(t => t.id !== task.id)
          setTasks(remainTask);
          toast.success("Task completed");
          const newResolved = [...resolved, task]
          setResolved(newResolved);
  
        }
//   toast("Custom toast", {
//   position: "top-right",
//   autoClose: 3000,
//   hideProgressBar: false,
//   closeOnClick: true,
//   pauseOnHover: true,
// });
  return (
    <>

      <ToastContainer />
    <Navbar/>
    <Banner
    tasks={tasks}
    resolved={resolved}
    />
    <TicketSection 
    handleTask={handleTask}
    handleResolved={handleResolved}
    tasks={tasks}
    resolved={resolved}
    />
    </>
  );
}

export default App;
