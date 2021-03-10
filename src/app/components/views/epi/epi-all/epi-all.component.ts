import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Epi } from '../epi.model';
import { EpiService } from '../epi.service';

@Component({
  selector: 'app-epi-all',
  templateUrl: './epi-all.component.html',
  styleUrls: ['./epi-all.component.css']
})
export class EpiAllComponent implements OnInit {

  displayedColumns: string[] = ['id', 'produto', 'epis', 'acoes'];

  id_cat: String = ''

  epis: Epi[] = []

  constructor(private service: EpiService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id_cat = this.route.snapshot.paramMap.get('id_cat')! 
    this.findAll();
  }

  findAll(): void {
    this.service.findAllByCategoria(this.id_cat).subscribe((resposta) => {
      this.epis = resposta;
      console.log(this.epis)
    })

  }

}
