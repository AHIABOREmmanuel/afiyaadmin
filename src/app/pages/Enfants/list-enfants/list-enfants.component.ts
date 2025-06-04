import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-enfants',
  templateUrl: './list-enfants.component.html',
  styleUrl: './list-enfants.component.css'
})
export class ListEnfantsComponent {
  constructor(private router: Router) {}

  addEnfants(): void {
    console.log('ici');
    this.router.navigate(['add-femmes']);
  }
}
