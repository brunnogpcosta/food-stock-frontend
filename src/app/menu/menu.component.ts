import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewStockModalComponent } from '../new-stock-modal/new-stock-modal.component';
import { InputRegisterModalComponent } from '../input-register-modal/input-register-modal.component';
import { AddFoodModalComponent } from '../add-food-modal/add-food-modal.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  title = "Estoque de Alimentos";
  breadcrumbItems: { label: string; url: string; }[] = [];
  oneButton: boolean = true

  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.updateBreadcrumb();

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateBreadcrumb();
      }
    });
  }

  private extractLastSegment(url: string): string {
    const segments = url.split('/');
    return segments[segments.length - 1];
  }
  
  private updateBreadcrumb() {
    const lastSegment = this.extractLastSegment(this.router.url);

    if(lastSegment === 'estoques'){ 
    this.breadcrumbItems = [
      { label: 'Estoques', url: '/estoques' },
    ] 
    this.oneButton = false

  } else{
    this.breadcrumbItems = [
      { label: 'Estoques', url: '/estoques' },
      { label: lastSegment, url: this.router.url }
    ]
    this.oneButton = true

  }
  }

  openIncluirAlimentoModal() {
    const modalRef = this.modalService.open(NewStockModalComponent); 

    modalRef.componentInstance.modalClosed.subscribe(() => {
      location.reload();
    });
  }

  openInputRegisterModal() {
    const modalRef = this.modalService.open(InputRegisterModalComponent); 
  }

  openAddFoodModal() {
    const modalRef = this.modalService.open(AddFoodModalComponent); 
  }


}
