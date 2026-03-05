
import { toast, ToastContainer } from "react-toastify";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Navbar from "./components/Navbar";
import TicketSection from "./components/TicketSection/TicketSection";
import { useState } from "react";
import Footer from "./components/Footer/Footer";


function App() {
    const [tasks, setTasks] = useState([])
    const [resolved, setResolved] = useState([])
    const [tickets, setTickets] = useState([])
    
  
        const handleTask =(ticket)=>{
          const newTask = [...tasks, ticket]
          toast.success("Task Added");
          setTasks(newTask)
        }
        const handleResolved =(task)=>{
          const remainTask = tasks.filter(t => t.id !== task.id)
          setTasks(remainTask);
          const remainTickets = tickets.filter(t => t.id !== task.id)
          setTickets(remainTickets);
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
    tickets={tickets}
    setTickets={setTickets}
    />
    <Footer/>
    </>
  );
}

export default App;
