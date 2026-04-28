function UserApp({ text, setText, onAdd }) {
  return (
    <div>
      <input
        className="user"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onAdd(text)}>Click</button>
    </div>
  );
}

export default UserApp;
