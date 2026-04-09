import './dependencies/style/style.css';
import positionData from './dependencies/positions.json';
import TypesData from './dependencies/types.json';
import React from 'react';
import { subscribe } from './bus';
import { DyvixToastItem } from './toast';

function DyvixToastContainer({
  position,
  segments,
  duration = 3000,
  animation = 'zoom'
}) {
  const [toasts, setToasts] = React.useState([]);
  const currentPosition = positionData.find(
    (e) => e.position.trim().toLowerCase() === position.trim().toLowerCase()
  );

  React.useEffect(() => {
    const unsub = subscribe((newToast) => {
      setToasts((prev) => {
        const next = [...prev, { ...newToast, id: prev.length + 1 }];
        return next;
      });
    });
    return unsub;
  }, []);

  return (
    <div className={`dyvix-toast-container ${currentPosition.class}`}>
      {toasts.map((toast, i) => {
        const currentType = TypesData.find(
          (e) => e.type.trim().toLowerCase() === toast.type.trim().toLowerCase()
        );
        const currentclass = `dyvix-toast ${currentType.class}`;
        return (
          <DyvixToastItem
            key={toast.id}
            message={toast.message}
            onClose={() =>
              setToasts((prev) => prev.filter((t) => t.id !== toast.id))
            }
            Class={currentclass}
            duration={duration}
            animation={animation}
          />
        );
      })}
    </div>
  );
}

export default DyvixToastContainer;
