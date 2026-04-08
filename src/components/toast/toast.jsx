import './dependencies/style/style.css';
import positionData from './dependencies/positions.json';

function DyvixToast({position})
{
    const currentPosition = positionData.find(
    (e) => e.position.trim().toLowerCase() === position.trim().toLowerCase()
  );
    return (
        <div className={`dyvix-toast-container ${currentPosition.class}`}></div>
    )
}

export default DyvixToast;