import './dependencies/style/style.css';
import positionData from './dependencies/positions.json';
import React from 'react';
import { subscribe } from './bus';

function DyvixToastContainer({position})
{
    const [segments, setSegments] = React.useState([])
    const currentPosition = positionData.find(
    (e) => e.position.trim().toLowerCase() === position.trim().toLowerCase()
  );

  React.useEffect(() => {
    const unsub = subscribe(newToast => {
        setSegments((prev) => {
            const next = [...prev, {...newToast, id: Date.now()}];
            return next;
        })            
        console.log("next");

    });
    return unsub;
  }, []);
    
  console.log(segments);


  return (
    <div className={`dyvix-toast-container ${currentPosition.class}`}>
        {segments.map((segment)=> (
            <div className='dyvix-toast'>
                {segment.message}
            </div>
        ))
        }
    </div>
    )
}

export default DyvixToastContainer;