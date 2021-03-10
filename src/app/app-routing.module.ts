import { CategoriaCreateComponent } from './components/views/categoria/categoria-create/categoria-create.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaReadComponent } from './components/views/categoria/categoria-read/categoria-read.component';
import { HomeComponent } from './components/views/home/home.component';
import { CategoriaDeleteComponent } from './components/views/categoria/categoria-delete/categoria-delete.component';
import { CategoriaUpdateComponent } from './components/views/categoria/categoria-update/categoria-update.component';
import { EpiAllComponent } from './components/views/epi/epi-all/epi-all.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path: 'categorias',
    component: CategoriaReadComponent
  },
  {
    path: 'categorias/create',
    component: CategoriaCreateComponent
  },
  {
    path : 'categorias/delete/:id',
    component: CategoriaDeleteComponent
  },
  {
    path : 'categorias/update/:id',
    component: CategoriaUpdateComponent
  },
  {
    path: 'categorias/:id_cat/epis',
    component: EpiAllComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
