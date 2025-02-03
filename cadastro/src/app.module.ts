import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroPessoasComponent } from './components/cadastro-pessoas.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroPessoasComponent,
    // outros componentes
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // outros módulos
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
