import { useEffect } from "react";
import { useState } from "react";

function AddUser({ arg }) {
  let [userinfo, setUserInfo] = useState(arg);
  useEffect(() => {
    setUserInfo(arg);
  }, [arg]);
  function pass(id) {
    setUserInfo(
      userinfo.map((i) => (i.id == id ? { ...i, completed: true } : i)),
    );
  }
  function unpass(id) {
    setUserInfo(
      userinfo.map((i) => (i.id == id ? { ...i, completed: false } : i)),
    );
  }
  function del(id) {
    setUserInfo(userinfo.filter((i) => i.id != id));
  }
  return (
    <div className="userInform">
      {userinfo.map((t, i) => {
        return (
          <div className="UserInfoDiv" key={i}>
            <p>{t.title}</p>
            <p>{t.completed + ""}</p>
            <button onClick={() => pass(t.id)}>Pass</button>
            <button onClick={() => unpass(t.id)}>Unpass</button>
            <button onClick={() => del(t.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
}
export default AddUser;
