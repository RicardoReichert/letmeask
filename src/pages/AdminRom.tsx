import logoImg from '../assets/images/logo.svg'
import { Button } from '../components/Button';
import { RoomCode } from '../components/RoomCode';

import '../styles/room.scss';
export function AdminRoom(){
  return (
    <div id="page-room">
      <header>
         <div className="content">
           <img src={logoImg} alt="Letmeask"/>
           
           <div>
            <RoomCode  />
            <Button isOutlined  >Encerrar sala</Button>
          </div>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Sala React</h1>

          <span>4 perguntas</span>
        </div>

      
      </main>

    </div>
  );
}