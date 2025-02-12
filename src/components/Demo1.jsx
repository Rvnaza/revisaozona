import './Demo1.css'
import { FcMusic } from "react-icons/fc";


function Demo1() {
    function responderClique(){
        alert('Mugiwaraaaaaaaaaaa')
    }
    return (
        <div className='container-demo1'>
           <button onClick={responderClique}>Click here</button>
           <button onClick={() => {alert ("Eu nasci de uma arrow function")}}>➡️</button>

            <img
        src="https://profile-counter.glitch.me/rvnaza/count.svg"
        alt="Ilustração do número de visitantes no perfil"
    />
<img className='img-dev' src="./imagens/zorosolaimagem.webp" alt="" />
<FcMusic  onClick={responderClique} className='icone'/>
        </div>
    )
}

export default Demo1