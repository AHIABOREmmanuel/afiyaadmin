import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './layout/main/main.component';
import { FooterComponent } from './layout/footer/footer.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { AddProductComponent } from './pages/Accessoires/add-product/add-product.component';
import { ListProductComponent } from './pages/Accessoires/list-product/list-product.component';
import { ModifyProductComponent } from './pages/Accessoires/modify-product/modify-product.component';
import { ListCommandesComponent } from './pages/Commandes/list-commandes/list-commandes.component';
import { DetailsCommandesComponent } from './pages/Commandes/details-commandes/details-commandes.component';
import { ListEnfantsComponent } from './pages/Enfants/list-enfants/list-enfants.component';
import { AddEnfantsComponent } from './pages/Enfants/add-enfants/add-enfants.component';
import { ModifyEnfantsComponent } from './pages/Enfants/modify-enfants/modify-enfants.component';
import { ModifyFemmesComponent } from './pages/Femmes/modify-femmes/modify-femmes.component';
import { AddFemmesComponent } from './pages/Femmes/add-femmes/add-femmes.component';
import { ListFemmesComponent } from './pages/Femmes/list-femmes/list-femmes.component';
import { ListHommesComponent } from './pages/Hommes/list-hommes/list-hommes.component';
import { AddHommesComponent } from './pages/Hommes/add-hommes/add-hommes.component';
import { ModifyHommesComponent } from './pages/Hommes/modify-hommes/modify-hommes.component';
import { DashboardComponent } from './pages/Dashboard/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    NavBarComponent,
    SideBarComponent,
    AddProductComponent,
    ListProductComponent,
    ModifyProductComponent,
    ListCommandesComponent,
    DetailsCommandesComponent,
    ListEnfantsComponent,
    AddEnfantsComponent,
    ModifyEnfantsComponent,
    ModifyFemmesComponent,
    AddFemmesComponent,
    ListFemmesComponent,
    ListHommesComponent,
    AddHommesComponent,
    ModifyHommesComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
