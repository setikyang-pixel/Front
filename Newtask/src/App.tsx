import { Users } from "./context/Users.tsx";
import AddUser from "./component/AddUser.tsx";
import UserList from "./component/UserList.tsx";

export default function App() {
  return (
    <Users>
      <div className="app-wrapper">
        <AddUser />
        <UserList />
      </div>
    </Users>
  );
}