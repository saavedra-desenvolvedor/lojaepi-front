import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EpiService } from '../epi.service';
import { Epi } from '../epi.model';

@Component({
  selector: 'app-epi-create',
  templateUrl: './epi-create.component.html',
  styleUrls: ['./epi-create.component.css'],
})
export class EpiCreateComponent implements OnInit {

  id_cat: String = ''

  epi: Epi = {
    id: '',
    produto: '',
    marca_produto: '',
    descricao: ''
  }

  produto = new FormControl('', [Validators.minLength(3)]);
  marca_produto = new FormControl('', [Validators.minLength(3)]);
  descricao = new FormControl('', [Validators.minLength(10)]);


  constructor(
    private service: EpiService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')!
  }

  create(): void {
    this.service.create(this.epi, this.id_cat).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/epis`]);
      this.service.mensagem('Epi criado com sucesso!');
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/epis`]);
      this.service.mensagem('Erro ao criar novo epi! Tente mais tarde' );

    }) 
  }
  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/epis`]);
  }

  getMessage() {
    if(this.produto.invalid) {      
      return "O campo PRODUTO deve conter entre 3 e 100 caracteres";
    }

    if(this.marca_produto.invalid) {      
      return "O campo MARCA DO PRODUTO deve conter entre 3 e 100 caracteres";
    }
     
    if(this.descricao.invalid) {      
      return "O campo DESCRIAO deve conter entre 10 e 2.000.000 caracteres";
    }
    return false;
  }

}
