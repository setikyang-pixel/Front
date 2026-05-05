
interface NewUs{
    text:string,
    setText:(val:string)=>void,
    func:(val:string)=>void
}

export default function AddUser({text,setText,func}:NewUs) {
  return (
    <div className="userInput">
      <input
        className="user"
        placeholder=" XXX"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => func(text)}>Click</button>
    </div>
  );
}
