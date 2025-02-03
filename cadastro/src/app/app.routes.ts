import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroPessoasComponent } from './components/cadastro-pessoas.component';

const routes: Routes = [
  { path: 'cadastro-pessoas', component: CadastroPessoasComponent },
  { path: '', redirectTo: '/cadastro-pessoas', pathMatch: 'full' },
  { path: '**', redirectTo: '/cadastro-pessoas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
