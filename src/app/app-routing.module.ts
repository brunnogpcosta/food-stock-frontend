import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TableDetailsComponent } from './table-details/table-details.component';


const routes: Routes = [
  { path: '', redirectTo: '/estoques', pathMatch: 'full' },
  { path: 'estoques', component: TableComponent },
  { path: 'estoque/:id', component: TableDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
