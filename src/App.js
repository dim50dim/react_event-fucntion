 import './App.css';
import React, { useRef } from 'react';
import { useState } from 'react';


function App() {
  let count4 = 0;
  const [isActive,setActive] = useState(false);

  function task1() {
    console.log('task1');
    
  }
  function task2() {
     setActive(true);
  }
  function task3(e) {
          console.log(e.target.value);
          
  }
  function task4() {

  }
  function task5() {

  }
  function task6() {

  }
  function task7() {

  }
  function task8() {

  }
  function task9() {

  }
  let ar10 = [5, 6, 7];
  function task10() {

  }

  return (
    <>
      <h1>События</h1>
      <section>
        <h2>Task 1</h2>
        <button className="task-1" onClick={task1} >Push</button>
      </section>
      <section>
        <h2>Task 2</h2>
        <div  className={`task-2 ${isActive ? 'active' : ''}`} onMouseEnter={task2} ></div>
      </section>
      <section>
        <h2>Task 3</h2>
        <input type="text" className="task-3" onInput={task3} />
      </section>
      <section>
        <h2>Task 4</h2>
        <button className="task-4">Count</button>
      </section>
      <section>
        <h2>Task 5</h2>
        <input type="checkbox" current="55" />
        <div className="out-5"></div>
      </section>
      <section>
        <h2>Task 6</h2>
        <select className="task-6">
          <option value="7">seven</option>
          <option value="4">four</option>
          <option value="9">nine</option>
          <option value="10">ten</option>
        </select>
      </section>
      <section>
        <h2>Task 7</h2>
        <div className="block-7"></div>
        <button className="task-7">Color</button>
      </section>
      <section>
        <h2>Task 8</h2>
        <input type="text" className="task-8"></input>
        <div className="out-8"></div>
      </section>
      <section>
        <h2>Task 9</h2>
        <input type="range" className="task-9"></input>
        <div className="out-9"></div>
      </section>
      <section>
        <h2>Task 10</h2>
        <input type="number" className="i-10"></input>
        <button className="task-10">Push</button>
      </section>
    </>
  );
}

export default App;
