import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InventoryComponent } from './pages/inventory/inventory.component';
import { FormComponent } from './pages/form/form.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ProductsComponent } from './pages/products/products.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'inventory', component: InventoryComponent},
  {path: 'createItem', component: FormComponent},
  {path:  'contact', component: ContactComponent},
  {path: 'products', component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


