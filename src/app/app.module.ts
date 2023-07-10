import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


//modulos
import { AppRoutingModule } from './app-routing.module';

//componentes

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { principalComponent } from './components/principal/principal.component';
import { IniciosesionComponent } from './components/iniciosesion/iniciosesion.component';
import { RegistroComponent } from './components/registro/registro.component';
import { RegistroasignaturaComponent } from './components/registroasignatura/registroasignatura.component';
import { RegistrosilaboComponent } from './components/registrosilabo/registrosilabo.component';
import { OlvidoComponent } from './components/olvido/olvido.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { DocentesComponent } from './components/docentes/docentes.component';
import { ContactanosComponent } from './components/contactanos/contactanos.component';
import { SobreNosotrosComponent } from './components/sobre-nosotros/sobre-nosotros.component';
import { silabosComponent } from './components/silabos/silabos.component';
import { asignaturaComponent } from './components/asignatura/asignatura.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocentesComponent,
    ContactanosComponent,
    principalComponent,
    IniciosesionComponent,
    RegistroComponent,
    RegistroasignaturaComponent,
    RegistrosilaboComponent,
    OlvidoComponent,
    PerfilComponent,
    SobreNosotrosComponent,
    silabosComponent,
    asignaturaComponent
 ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
