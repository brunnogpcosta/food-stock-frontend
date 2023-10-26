import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements AfterViewInit {
  selectedItemId: string | null = null;
  constructor(private router: Router) {}

  displayedColumns: string[] = ['code', 'name', 'createdAt'];
  dataSource = new MatTableDataSource<any>(items);

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
    console.log('item: ', itemId)
    this.selectedItemId = itemId;
    this.router.navigate([`/estoque/${itemId}`]);

  }
}

const items = [
  { code: '684968', name: 'Estoque A', createdAt: '26/10/2023' },
  { code: '231361', name: 'Estoque B', createdAt: '26/10/2023' },
  { code: '984654', name: 'Estoque C', createdAt: '26/10/2023' },
];
