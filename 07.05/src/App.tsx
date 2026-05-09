import AddUser from "./component/AddUser.tsx";
import ToDoList from "./component/ToDoList.tsx";
import UserBut from "./component/UserBut.tsx";
import DowUser from "./context/DowUser.tsx";

export default function App() {
  return (
    <div className="header">
      <DowUser>
        <UserBut />
        <AddUser />
        <ToDoList />
      </DowUser>
    </div>
  );
}
