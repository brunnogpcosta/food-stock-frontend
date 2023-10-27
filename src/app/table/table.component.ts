import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { GET_STOCKS } from '../graphql.operations';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit, AfterViewInit {
  selectedItemId: string | null = null;
  items: any[] = [];
  displayedColumns: string[] = ['code', 'name', 'createdAt'];
  dataSource = new MatTableDataSource<any>();

  constructor(private router: Router, private apollo: Apollo) {}

  ngOnInit() {
    this.fetchStocks();
  }

convertTimestamp(date: any){
  const newDate = new Date(+date)
  return newDate.toLocaleString()
}

fetchStocks() {
  this.apollo
    .watchQuery({
      query: GET_STOCKS,
    })
    .valueChanges.subscribe(
      ({ data, error }: any) => {
        if (error) {
          console.error('Erro na consulta:', error);
        } else {
          this.items = data.allStocks.map((stock: { id: any; nome: any; createdAt: any; }) => ({
            code: stock.id,
            name: stock.nome,
            createdAt: this.convertTimestamp(stock.createdAt),
          }));
          this.dataSource.data = this.items;
        }
      },
      (error) => {
        console.error('Erro inesperado:', error);
      }
    );
}


  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(column: string, event: Event) {
    const filterValue = (event.target as HTMLInputElement).value.toLowerCase();

    this.dataSource.filterPredicate = (data, filter) => {
      const value = data[column].toLowerCase();
      return value.includes(filter);
    };

    this.dataSource.filter = filterValue;
  }

  onRowClick(itemId: string) {
    console.log('item: ', itemId);
    this.selectedItemId = itemId;
    this.router.navigate([`/estoque/${itemId}`]);
  }
}
