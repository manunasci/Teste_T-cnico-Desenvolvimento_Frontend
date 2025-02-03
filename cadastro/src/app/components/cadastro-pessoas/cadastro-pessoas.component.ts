import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cadastro-pessoas',
  templateUrl: './cadastro-pessoas.component.html',
  styleUrls: ['./cadastro-pessoas.component.css']
})
export class CadastroPessoasComponent {
  formulario!: FormGroup;
  pessoas: any[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.formulario = this.fb.group({
      nome: ['', [Validators.required, Validators.maxLength(150), Validators.pattern(/^[a-zA-Z\u00C0-\u00FF\s]*$/)]],
      cpf: ['', [Validators.required, Validators.pattern(/^\d{11}$/)]],
      data: ['', Validators.required],
      email: ['', [Validators.required, Validators.email, Validators.maxLength(200)]],
      cep: ['', [Validators.required, Validators.pattern(/^\d{8}$/)]],
      logradouro: [''],
      bairro: [''],
      cidade: [''],
      estado: ['']
    });
  }

  buscarEnderecoPorCEP() {
    const cep = this.formulario.get('cep')?.value;
    if (cep) {
      this.http.get(`http://viacep.com.br/ws/${cep}/json/`).subscribe((data: any) => {
        this.formulario.patchValue({
          logradouro: data.logradouro,
          bairro: data.bairro,
          cidade: data.localidade,
          estado: data.uf
        });
      });
    }
  }

  cadastro() {
    if (this.formulario.valid) {
      const pessoa = this.formulario.value;
      pessoa.idade = this.calcularIdade(pessoa.data);
      this.pessoas.push(pessoa);
      this.formulario.reset();
    }
  }

  calcularIdade(dataNascimento: string): number {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    let idade = hoje.getFullYear() - nascimento.getFullYear();
    const mes = hoje.getMonth() - nascimento.getMonth();
    if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
      idade--;
    }
    return idade;
  }
}
