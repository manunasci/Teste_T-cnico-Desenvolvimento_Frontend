import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CadastroPessoasComponent } from './components/cadastro-pessoas/cadastro-pessoas.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CadastroPessoasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cadastro';
}
