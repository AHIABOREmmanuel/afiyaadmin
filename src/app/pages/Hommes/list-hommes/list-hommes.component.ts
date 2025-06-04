import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-hommes',
  templateUrl: './list-hommes.component.html',
  styleUrl: './list-hommes.component.css'
})
export class ListHommesComponent {
  constructor(private router: Router) {}

  addHommes(): void {
    console.log('ici');
    this.router.navigate(['add-hommes']);
  }
}
