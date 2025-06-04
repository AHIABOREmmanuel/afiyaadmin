import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {
  isCollapsed = false;
  currentRoute: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    // Surveiller les changements de route
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      this.currentRoute = event.url;
    });
  }

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    const sidebar = document.querySelector('.left-sidebar');
    if (sidebar) {
      sidebar.classList.toggle('collapsed');
    }
  }

  isActive(route: string): boolean {
    return this.currentRoute.includes(route);
  }
}
