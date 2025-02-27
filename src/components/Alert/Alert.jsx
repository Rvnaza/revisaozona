import './Alert.css'


function Alert() {

    function botao0(){
    alert('Celulares e jogos são proibidos no laboratório. Cada vez que alguém fizer isso a equipe perde um ponto na sprint corrente da SA')
}

  return (
    <div className='container-alert'>
        <h1>Teste 0</h1>
        <button onClick={botao0}>botão 0</button>
    </div>
  )
}

export default Alert