import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './layout/main/main.component';
import { ListCommandesComponent } from './pages/Commandes/list-commandes/list-commandes.component';
import { ListFemmesComponent } from './pages/Femmes/list-femmes/list-femmes.component';
import { ListHommesComponent } from './pages/Hommes/list-hommes/list-hommes.component';
import { ListEnfantsComponent } from './pages/Enfants/list-enfants/list-enfants.component';
import { ListProductComponent } from './pages/Accessoires/list-product/list-product.component';
import { DashboardComponent } from './pages/Dashboard/dashboard/dashboard.component';
import { AddFemmesComponent } from './pages/Femmes/add-femmes/add-femmes.component';
import { AddEnfantsComponent } from './pages/Enfants/add-enfants/add-enfants.component';
import { AddProductComponent } from './pages/Accessoires/add-product/add-product.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
      {path: 'dashboard', component: DashboardComponent},
      {path: 'commandes', component: ListCommandesComponent},
      {path: 'femmes', component: ListFemmesComponent},
      {path: 'hommes', component: ListHommesComponent},
      {path: 'enfants', component: ListEnfantsComponent},
      {path: 'accessoires', component: ListProductComponent},


      {path: 'add-femmes', component: AddFemmesComponent},
      {path: 'add-hommes', component: AddFemmesComponent},
      {path: 'add-enfants', component: AddEnfantsComponent},
      {path: 'add-product', component: AddProductComponent},



    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
