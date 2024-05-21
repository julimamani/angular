import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Punto1Component } from './components/punto1/punto1.component';
import { AboutComponent } from './components/layout/about/about.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { Punto5Component } from './components/punto5/punto5.component';
import { ListaComponent } from './components/punto5/lista/lista.component';
//archivo de configuración de rutas 
const routes: Routes = [
    { path: 'punto1', component: Punto1Component },
    { path: 'about', component:AboutComponent},
    { path: 'punto3', component:Punto2Component},
    { path: 'punto5', component:Punto5Component},
    {path:'lista', component:ListaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
