import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EpiService } from '../epi.service';
import { Epi } from '../epi.model';

@Component({
  selector: 'app-epi-read',
  templateUrl: './epi-read.component.html',
  styleUrls: ['./epi-read.component.css']
})
export class EpiReadComponent implements OnInit {

  id_cat: String = ''

  epi: Epi = {
    id: '',
    produto: '',
    marca_produto: '',
    descricao: ''
  }

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

}
