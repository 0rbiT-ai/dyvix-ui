import './dependencies/style/style.css';
import positionData from './dependencies/positions.json';
import TypesData from './dependencies/types.json';
import React from 'react';
import { subscribe } from './bus';
import { DyvixToastItem } from './toast';

function DyvixToastContainer({position, segments, duration=100})
{
    const [toasts, setToasts] = React.useState([])
    const currentPosition = positionData.find(
    (e) => e.position.trim().toLowerCase() === position.trim().toLowerCase()
  );

  React.useEffect(() => {
    const unsub = subscribe(newToast => {
        setToasts((prev) => {
            const next = [...prev, {...newToast, id: Date.now()}];
            return next;
        })            
    });
    return unsub;
  }, []);
    
  console.log(toasts);


  return (
    <div className={`dyvix-toast-container ${currentPosition.class}`}>
        {toasts.map((toast)=> {
            const currentType = TypesData.find((e) => e.type.trim().toLowerCase() === toast.type.trim().toLowerCase()) 
            const currentclass = `dyvix-toast ${currentType.class}`;
            return <DyvixToastItem message={toast.message} onClose={()=> console.log("ggg")} Class={currentclass}/>
        })
        }
    </div>
    )
}

export default DyvixToastContainer;