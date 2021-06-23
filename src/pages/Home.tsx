import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleImg from '../assets/images/google-icon.svg';

import { Button } from '../components/Buttons';
import '../styles/auth.scss';

export function Home() {
    return(
        <div id="page-auth">
            <aside>
                <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as suas dúvidas de sua audiência em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="Letmeask" />
                    <button className="create-room">
                        <img src={googleImg} alt="Logo do Google" />
                        Crie sua sala com o Google
                    </button>
                    <div className="separator">ou entre em um sala</div>
                    <form>
                        <input 
                            type="text"
                            placeholder="Digite sua sala"
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