import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { NgbModal, NgbNav } from '@ng-bootstrap/ng-bootstrap';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { NewStockModalComponent } from '../new-stock-modal/new-stock-modal.component';
import { InputRegisterModalComponent } from '../input-register-modal/input-register-modal.component';
import { RemoveFoodModalComponent } from '../remove-food-modal/remove-food-modal.component';



@Component({
  selector: 'app-table-details',
  templateUrl: './table-details.component.html',
  styleUrls: ['./table-details.component.less']
})
export class TableDetailsComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'name', 'unit', 'qtd', 'validity', 'input', 'output', 'createdAt', 'actions'];
  displayedMovimentColumns: string[] = ['code', 'name', 'unit', 'qtd', 'type', 'createdAt'];

  dataSource = new MatTableDataSource<any>(items);
  dataSourceMoviments = new MatTableDataSource<any>(itemsMoviments);

  @ViewChild(NgbNav) nav!: NgbNav;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild('itemsSort') itemsSort!: MatSort;
  @ViewChild('itemsPaginator') itemsPaginator!: MatPaginator;
  @ViewChild('movimentsSort') movimentsSort!: MatSort;
  @ViewChild('movimentsPaginator') movimentsPaginator!: MatPaginator;

  constructor(private modalService: NgbModal) {}

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.dataSourceMoviments.sort = this.movimentsSort;
    this.dataSourceMoviments.paginator = this.movimentsPaginator;
  }


  applyItemsFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue;
    this.dataSource.filterPredicate = (data, filter) => {
      const name = data.name.toLowerCase();
      const qtd = data.qtd.toString().toLowerCase();
      return name.includes(filter) || qtd.includes(filter);
    };
  }

  applyMovimentsFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceMoviments.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(row: any) {
    // console.log('Linha clicada:', row);
  }

  onActionClick(row: any) {
    this.openIncluirAlimentoModal()
    // console.log('Ação clicada para a linha:', row);
  }

  openIncluirAlimentoModal() {
    const modalRef = this.modalService.open(RemoveFoodModalComponent); 
  }
  
}

const items = [
  { code: '2154654', name: 'Item 1', unit: 'kg', qtd: 1, validity: '10/12/2023', input: '10/10/2012', output: '12/12/12', createdAt: '23/12/2010' },
  { code: '2112321', name: 'Item 2', unit: 'kg', qtd: 1, validity: '10/12/2023', input: '10/10/2012', output: '12/12/12', createdAt: '23/12/2010' }
];

const itemsMoviments = [
  { code: '2112321', name: 'Moviment 1', unit: 'kg', qtd: 1, type: 'output', createdAt: '23/12/2010' },
  { code: '2112321', name: 'Moviment 2', unit: 'kg', qtd: 1, type: 'input', createdAt: '23/12/2010' }
];
