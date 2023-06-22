import {BrowserRouter, Routes,Route} from 'react-router-dom'
import * as React from 'react';
import Button from '@mui/material/Button';
import {Home} from './home'
import { ProxTorneos,Mistorneos } from './usuario';
import {Registrar} from './registrar'
import { LoginAdmin, Torneos,FotoyVideo, SubirTorneo, MostrarLista, Resultados} from './admin/administrador'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Home/>} />
        <Route path='/proxtorneos' element = {<ProxTorneos/>}/>
        <Route path='/mistorneos' element = {<Mistorneos/>}/>
        <Route path='/registrar' element = {<Registrar/>} />
        <Route path = '/admin/login' element = {<LoginAdmin/>} />
        <Route path = '/admin/torneos' element = {<Torneos/>} />
        <Route path = '/admin/upload' element = {<FotoyVideo/>}/>
        <Route path = '/admin/subirtorneo' element = {<SubirTorneo/>} />
        <Route path = '/admin/resultado' element = {<MostrarLista/>} />
        <Route path = '/admin/tablas' element = {<Resultados/>}/>
      </Routes>
    </BrowserRouter>
  );
}
