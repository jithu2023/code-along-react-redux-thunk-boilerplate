import React, { useState } from "react";
import './App.css';
import action_provider from './compnents/Action';
import store from "./compnents/Store";

function App() {
  const [data, setData] = useState([]);
  const [removeBtn, setRemoveBtn] = useState(false);

  store.subscribe(() => {
    const newData = store.getState().data.data;
    setData(newData);
    console.log(newData);
  });

  const fetchData = () => {
    store.dispatch(action_provider());
    setRemoveBtn(true);
  };

  const removeData = () => {
    const newData = data.slice(-1,0);
    setRemoveBtn(false);

    setData(newData);
  };

  return (
    <div className="main">
      <button className="btn" onClick={fetchData}>Fetch data</button>

      {data.map((item) => (
        <div className="box" key={item.id}>
          <li>{item.name}</li>
          <li>{item.email}</li>
        </div>
      ))}
            {removeBtn && (
        <button className="btn" onClick={removeData}>Remove data</button>
      )}
    </div>
  );
}

export default App;
