import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import {Button} from '../components/Button';
import '../styles/auth.scss';

import{FormEvent, useState} from 'react'

// Navegacao
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { database } from '../services/firebase';
import { useAuth } from '../hook/useAuth';
// import { useAuth } from '../hook/useAuth';


export function NewRom(){

  const [newRom, setNewRom] =useState('');
  const {user} = useAuth();

  

  // const {user} = useAuth();

  async function handleCreateRom(event: FormEvent){
    event.preventDefault();

    if(newRom.trim() ===''){
      return;
    }

    const roomRef = database.ref('rooms');

    const firebaseRom = await roomRef.push({
      title: newRom,
      authorId: 1,
    })
  }
  return(

    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustracao simbolizando perguntas e resposta"/>
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as duvidas da sua audiencia em tempo-real</p>
      </aside>

      <main>
        <div className="main-content">

          {/* <h1>{user?.name}</h1> */}
          <img src={logoImg} alt="Letmeask"/>
        
      <h2> Crie uma nova sala</h2>

          <form onSubmit={handleCreateRom}>
            <input 
            type="text"
            placeholder="Nome da sala"
            onChange={event =>setNewRom(event.target.value)}
            value={newRom}
            />

            <Button type="submit">
              Criar sala
            </Button>
          </form>
          <p>
            Quer entrar em uma sala existente? <Link to="/">clique aqui</Link>

          </p>
        </div>
      </main>



    </div>



    )



   
}