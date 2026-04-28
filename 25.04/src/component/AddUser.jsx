import { useEffect } from "react";
import { useState } from "react";

function AddUser({arg} ) {    
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
  return (
    <div className="userInform">
      {userinfo.map((t) => {
        return (
          <div className="UserInfoDiv" key={t.id}>
            <p>{t.title}</p>
            <p>{t.id}</p>
            <p>{t.completed + ""}</p>
            <button onClick={() => pass(t.id)}>Pass</button>
            <button onClick={() => unpass(t.id)}>Unpass</button>
          </div>
        );
      })}
    </div>
  );
}
export default AddUser;
