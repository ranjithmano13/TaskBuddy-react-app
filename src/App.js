import { useState } from "react";
import "./App.css";
import { Navbar, WidgetCard } from "./components";
import {
  Taskcountdisplay,
  Taskdatacounter,
  TodoListContainer,
} from "./containers";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openTasks, setOpenTasks] = useState(0);
  const [closedTasks, setClosedTasks] = useState(3);

  return (
    <div className="App">
      <Navbar setIsMenuOpen={setIsMenuOpen} />
        <TodoListContainer />
        <Taskdatacounter openTasks={openTasks} closedTasks={closedTasks} />
    </div>
  );
}

export default App;
