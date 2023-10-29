import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Apollo } from 'apollo-angular';
import { GET_FOODS, POST_ENTER } from '../graphql.operations';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-input-register-modal',
  templateUrl: './input-register-modal.component.html',
  styleUrls: ['./input-register-modal.component.less']
})
export class InputRegisterModalComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();
  
  selectedItem: string = '';
  quantity: number = 0;
  itemId: number = 0;
  foodName: string = '';
  date: string = '';
  addedItems: { itemId: number; item: string; quantity: number; date: string; }[] = [];
  items: any[] = [];
  stockId: number = 0;

  constructor(private activeModal: NgbActiveModal, private apollo: Apollo, private modalService: NgbModal) {}


ngOnInit(): void {
  this.selectedItem = '';
  this.quantity = 0;
  this.date = '';
  this.addedItems = [];
  this.fetchFoods();
  this.getStockId()

}


getStockId(){
  const url = window.location.href;
  const partesDaURL = url.split('/'); 
  this.stockId = Number(partesDaURL[partesDaURL.length - 1]); 
}

  fetchFoods() {
    this.apollo
      .watchQuery({
        query: GET_FOODS,
      })
      .valueChanges.subscribe(
        ({ data, error }: any) => {
          if (error) {
            console.error('Erro na consulta:', error);
          } else {
            console.log('Dadata.allFoodsta: ', data.allFoods)
            this.items = data.allFoods
          }
        },
        (error) => {
          console.error('Erro inesperado:', error);
        }
      );
  }
  


  salvarAlimento() {

    try {
      for (const item of this.addedItems) {
        this.apollo
        .mutate({
          mutation: POST_ENTER,
          variables: {
            expirate: item.date,
            qtd: item.quantity,
            foodId: Number(item.itemId),
            stockId: this.stockId
    
          }
        })
        .subscribe(
          ({ data }) => {
            console.log('Entrada registrada:', data);
          },
          (error) => {
            console.error('Erro ao dar entrada no estoque:', error);
          }
        );
      }

      this.modalClosed.emit();
    } catch (error) {
      console.log('Error: ', error)
    }
  


  this.activeModal.close();
  }

  closeModal() {
    // Lógica para fechar o modal

    this.activeModal.dismiss();

  }

  onItemChange(event: any) {
    const selectedItem = this.items.find(item => item.id === event.target.value);
    
    this.foodName = selectedItem.nome
    this.itemId = event.target.value

    if (this.selectedItem === '') {
      this.selectedItem = '';
      this.quantity = 0;
      this.date = '';
      this.itemId = 0
    }
  }

  onAddItem() {
    if (this.selectedItem !== '' && this.quantity > 0) {


      this.addedItems.push({ itemId: this.itemId, item: this.foodName, quantity: this.quantity, date: this.date });
      this.selectedItem = '';
      this.quantity = 0;
      this.date = '';
    }
  }


}
