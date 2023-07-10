import { Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import {  principalComponent } from './components/principal/principal.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { OlvidoComponent } from './components/olvido/olvido.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroasignaturaComponent } from './components/registroasignatura/registroasignatura.component';
import { RegistrosilaboComponent } from './components/registrosilabo/registrosilabo.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component'; 
import { silabosComponent } from './components/silabos/silabos.component';
import { asignaturaComponent } from './components/asignatura/asignatura.component';

//se establecen las rutas para que cargue el componente

 const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
    {
        path:'contactanos',
        component:ContactanosComponent
    },
    {
        path:'docentes',
        component:DocentesComponent
    },
    {
        path:'iniciosesion',
        component:IniciosesionComponent
    },
    {
        path:'principal',
        component:principalComponent
    },
    {
        path:'olvido',
        component:OlvidoComponent
    },
    {
        path:'perfil',
        component:PerfilComponent
    },
    {
        path:'registro',
        component:RegistroComponent
    },
    {
        path:'registroasignatura',
        component:RegistroasignaturaComponent
    },
    {
        path:'registrosilabo',
        component:RegistrosilaboComponent
    },
    {
        path:'sobrenosotros',
        component:SobreNosotrosComponent
    },
    {
        path:'silabos',
        component:silabosComponent
    },
    {
        path: 'asignatura',
        component: asignaturaComponent
    }
];


@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
