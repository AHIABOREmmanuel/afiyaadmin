import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-femmes',
  templateUrl: './list-femmes.component.html',
  styleUrl: './list-femmes.component.css'
})
export class ListFemmesComponent {
  constructor(private router: Router) {}

  addFemmes(): void {
    console.log('ici');
    this.router.navigate(['add-femmes']);
  }
}
