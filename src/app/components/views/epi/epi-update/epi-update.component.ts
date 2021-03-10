import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { EpiService } from '../epi.service';
import { Epi } from '../epi.model';

@Component({
  selector: 'app-epi-update',
  templateUrl: './epi-update.component.html',
  styleUrls: ['./epi-update.component.css']
})
export class EpiUpdateComponent implements OnInit {

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
    this.epi.id = this.route.snapshot.paramMap.get('id')!
    this.findById()
  }
  
  cancel(): void {
    this.router.navigate([`categorias/${this.id_cat}/epis`]);
  }

  findById(): void {
    this.service.findById(this.epi.id!).subscribe((resposta) => {
      this.epi = resposta
    })
  }

  update(): void {
    this.service.update(this.epi).subscribe((resposta) => {
      this.router.navigate([`categorias/${this.id_cat}/epis`]);
      this.service.mensagem('Epi Atualizado com Sucesso!')
    }, err => {
      this.router.navigate([`categorias/${this.id_cat}/epis`]);
      this.service.mensagem('Falha ao Atualizar Epi! Tente mais tarde...')
    })
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

