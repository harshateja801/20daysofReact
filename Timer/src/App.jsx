import { useRef, useState } from 'react'
import "../src/App.css"

function padTime(time) {
  return time.toString().padStart(2, '0');
}
function App() {
  const [timer,Settimer]=useState(30);
  const timeRef=useRef(null);
  const [isRunning,SetisRunning]=useState(false);
  function startTimer (){
    SetisRunning(true);
    if (timeRef.current !== null) return; 
    timeRef.current=setInterval(()=>{
     Settimer((timer)=>{
      if(timer >=1) 
      return timer-1;
    else return 0;
     });
    },1000);

  }
  function stopTimer(){
    if (timeRef.current === null) return;
      clearInterval(timeRef.current);
      timeRef.current = null;
      SetisRunning(false);
  }
  function resetTimer (){
    clearInterval(timeRef.current);
    Settimer(30);
    timeRef.current=null;
    SetisRunning(false);
  }
  const minutes = padTime(Math.floor(timer / 60));
  const seconds = padTime(timer - minutes * 60);
  

  return (
    <div className="h-screen  bg-gradient-to-r from-slate-50 to-zinc-300">
    <div className='flex justify-center'>
      <div className='px-5'>
      <h2 className='py-10'>POMODORO TIMER</h2>
      <span  className='px-2'>{minutes}</span>
      <span  className='px-2'>:</span>
      <span className='px-4'>{seconds}</span>
      {!isRunning && <button className="px-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={startTimer}>Start</button>}
      {isRunning && <button className="px-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"onClick={stopTimer}>Stop</button>}
       <button className="px-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={resetTimer}>Reset</button>
       </div>
    </div>
    </div>
  )
}

export default App
