import { Component, NgModule } from '@angular/core';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { SplitButtonModule } from 'primeng/splitbutton';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [ CommonModule,
    ToolbarModule,
    ButtonModule,
    SplitButtonModule,
  DropdownModule,
FormsModule],
  templateUrl: './topbar.component.html',
  styleUrl: './topbar.component.scss'
})
export class TopbarComponent {
[x: string]: any[]|undefined;
items: any[] = [
  { label: 'Elizabeth', value: 'elizabeth' },
  { label: 'John', value: 'john' },
  { label: 'Alice', value: 'alice' }
];

selectedUser: any = 'elizabeth';

}
