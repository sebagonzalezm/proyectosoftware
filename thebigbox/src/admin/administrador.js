import {NavHome,NavNegro} from '../allNav'
import {IniciarSesion} from './componentes/loginregis'
import { Dashboard } from './componentes/navadmin'
import {UploadFile,TituloyDescrip} from './componentes/fileupload'
import {TorneosAdmin,Tablaresultados} from './componentes/torneos'
import {Listado} from './componentes/resultados'

export function LoginAdmin(){
    return(
        <>
        <NavNegro/>
        <NavHome/>
        <IniciarSesion/>
        </>
    )
}
export function Torneos(){
    return(
        <div className='d-flex'>
        <Dashboard/>
        <div className = 'contenedor justify-content-center align-items-center'style={{marginTop: '20px'}}>
        <TorneosAdmin/>
        </div>       
        </div>
    )
}
export function FotoyVideo(){
    return(
        
        <div className='d-flex'>
        <Dashboard/>
        <div className="contenedor d-flex justify-content-center" style={{ marginTop: '100px'}}>  
        <h1>Publicación de fotos y videos</h1>
        <div style = {{marginTop: '150px'}}>
        <UploadFile/>
        </div>        
        </div>
        </div>
    )
}
export function SubirTorneo(){
    return(
        <div className='d-flex'>
        <Dashboard/>
        <div className='contenedor flex justify-content-center' style={{marginTop: '100px'}}>
        <h1>Nuevo torneo</h1>
        <div style={{marginTop:'40px'}}>

        <TituloyDescrip/>
        <UploadFile/>

        </div>
        </div>
        </div>
    )
}
export function MostrarLista(){
    return(
    <div className='d-flex'>
    <Dashboard/>
    <div style={{marginTop: '80px'}}>
    <Listado/>
    </div>
    
    </div>    
    )
}
export function Resultados(){
    return(

        <div className='d-flex'>
        <Dashboard/>
        <div style={{marginTop: '80px'}}>
        <Tablaresultados/>
        </div>
        
        </div>        
    )
}