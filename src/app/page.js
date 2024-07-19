
import Header from "./componets/Header.js";
import TaskInput from "./componets/TaskInput.js";
import Task from "./componets/Task.js";
import Footer from "./componets/Footer.js";

export default function Home() {
  const tasks = [
    { id: 1, title: "Read a book", isDone: true },
    { id: 2, title: "Take a shower", isDone: false },
    { id: 3, title: "Sleep", isDone: false },
  ];
  return (

    <div className="container mx-auto">
      <Header />
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput />
        <Task {...tasks[0]} />
        <Task {...tasks[1]} />
        <Task {...tasks[2]} />
      </div>
      <Footer year = "2024" fullName = "Wachirawit Chaiyamat" studentId = "660612156"/>
    </div>
  );
}