import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuComponent } from './menu/menu.component';
import { FilterComponent } from './filter/filter.component';
import { TableComponent } from './table/table.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { TableDetailsComponent } from './table-details/table-details.component';
import { MatSortModule } from '@angular/material/sort';
import { NewStockModalComponent } from './new-stock-modal/new-stock-modal.component';
import { MatIconModule } from '@angular/material/icon';
import { InputRegisterModalComponent } from './input-register-modal/input-register-modal.component';
import { AddFoodModalComponent } from './add-food-modal/add-food-modal.component';
import { RemoveFoodModalComponent } from './remove-food-modal/remove-food-modal.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FilterComponent,
    TableComponent,
    TableDetailsComponent,
    NewStockModalComponent,
    InputRegisterModalComponent,
    AddFoodModalComponent,
    RemoveFoodModalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AppRoutingModule,
    MatIconModule,
    GraphQLModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
