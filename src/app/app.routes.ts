import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '', redirectTo: 'products', pathMatch: 'full'},
    {path: 'products', loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsModule)},
];
