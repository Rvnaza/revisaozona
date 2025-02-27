import Alert from '../Alert/Alert'
import './Body.css'
import Converter from '../Converter/Converter'
import Demo1 from '../Demo/Demo1'
import Demo2 from '../Demo/Demo2'
import Moedas from '../Moedas/Moedas'

function Body() {
    return (
        <div className='container-body'>
            <h1>Zoro funpage</h1>
            {/* <Demo2 /> */}
            {/* <Demo1 /> */}
            <Alert />
            <Converter />
            <Moedas />
            

        </div>
    )
}

export default Body