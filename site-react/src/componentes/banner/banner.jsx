import './banner.css'

function Banner(props){
    return(
        <header>
            <h1 className='nova-classe'>Componentes Banner</h1>
            <p>Texto do componente</p>
            <p>{props.textoBanner}</p>
        </header>
    )
}

export default Banner