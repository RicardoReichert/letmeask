import copImg from '../assets/images/copy.svg';
import '../styles/roomCode.scss';


export function RoomCode(){

  return(
    <button className="room-code">
      <div>
      <img src={copImg} alt="Copy room code"/>
      </div>

      <span>Sala #1234567845</span>
    </button>
  )
}