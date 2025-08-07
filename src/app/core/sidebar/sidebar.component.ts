import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuModule } from 'primeng/menu';

interface SidebarMenuItem {
  label?: string;
  icon?: string;
  routerLink?: string;
  separator?: boolean;
  style?: { [key: string]: string | number };
  disabled?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [MenuModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  currentRoute = '';
  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute = this.router.url;
      this.updateMenuStyles();
    });
  }
  items: SidebarMenuItem[] = [
    { label: 'Dashboard', icon: 'pi pi-objects-column', routerLink: '/dashboard' },
    { label: 'Products', icon: 'pi pi-shopping-bag', routerLink: '/products' },
    { label: 'Parcels', icon: 'pi pi-inbox', routerLink: '/parcels' },
    { label: 'Cargo', icon: 'pi pi-truck', routerLink: '/cargo' },
    { label: 'Recipients', icon: 'pi pi-users', routerLink: '/recipients' },
    { label: 'Finance', icon: 'pi pi-dollar', routerLink: '/finance' },
    { separator: true },
    {label:'',disabled:true,style:{height:'5rem',background:'transparent',display:'block'}},
    { label: 'Calculator', icon: 'pi pi-calculator' },
    { label: 'Legal info', icon: 'pi pi-file' },
    { label: 'English >', icon: 'pi pi-language' }
  ];
  updateMenuStyles() {
  this.items.forEach(item => {
    if (item.routerLink && this.currentRoute.startsWith(item.routerLink)) {
      item.style = { color: '#2e7d32', fontWeight: '600' }; // Active
    } else if (['Dashboard', 'Cargo', 'English >'].includes(item.label || '')) {
      item.style = { fontWeight: 'bold' }; // Emphasize
    } else {
      item.style = {}; // Reset
    }
  });
  this.items = [...this.items]; // Force refresh
}

}