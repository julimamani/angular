import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { AboutComponent } from './components/layout/about/about.component';
import { Punto2Component } from './components/punto2/punto2.component';
import { FormsModule } from '@angular/forms';
import { Punto5Component } from './components/punto5/punto5.component';
import { ListaComponent } from './components/punto5/lista/lista.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Punto1Component,
    AboutComponent,
    Punto2Component,
    Punto5Component,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
