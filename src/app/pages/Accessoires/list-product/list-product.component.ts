import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.css'
})
export class ListProductComponent {

  constructor(private router: Router) {}

  addProduct(): void {
    console.log('ici');
    this.router.navigate(['add-product']);
  }
}
