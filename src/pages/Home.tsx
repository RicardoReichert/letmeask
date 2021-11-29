
// importacao de navegacao
import {useNavigate} from 'react-router-dom';
import{auth, firebase} from '../services/firebase';
// Imagens
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';

// componentes
import {Button} from '../components/Button';

// SCSS
import '../styles/auth.scss';


// funcao principal
export function Home(){
   
const navigate = useNavigate(); 

function handleCreateRom(){

  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).then(result => {
    console.log(result);
  })



  // navigate('/rooms/new')
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
          <img src={logoImg} alt="Letmeask"/>
          <button onClick={handleCreateRom} className="create-room">
          <img src={googleIconImg} alt="Logo do google"/>
          Crie sua sala com o google
          </button>

          <div className="separator"> 
            ou entre em uma sala
          </div>

          <form>
            <input 
            type="text"
            placeholder="Digite o codigo da sala"
            />

            <Button type="submit">
              Entrar na sala
            </Button>
          </form>
        </div>
      </main>



    </div>



    )



   
}