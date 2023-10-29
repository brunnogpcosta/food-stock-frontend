import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Apollo } from 'apollo-angular';
import { GET_UNITIES, POST_FOOD } from '../graphql.operations';

@Component({
  selector: 'app-add-food-modal',
  templateUrl: './add-food-modal.component.html',
  styleUrls: ['./add-food-modal.component.less']
})
export class AddFoodModalComponent implements OnInit {
  @Output() modalClosed = new EventEmitter<void>();
  
  selectedItem: string = '';
  date: string = '';
  nome: string = '';
  quantity: number = 0;
  addedItems: { item: string; quantity: number }[] = [];
  items: any[] = [];
  

  constructor(private activeModal: NgbActiveModal, private apollo: Apollo) {}

ngOnInit(): void {
  this.fetchFoods()
}
  
  fetchFoods() {
    this.apollo
      .watchQuery({
        query: GET_UNITIES,
      })
      .valueChanges.subscribe(
        ({ data, error }: any) => {
          if (error) {
            console.error('Erro na consulta:', error);
          } else {
            console.log(data)
            this.items = data.allUnities
          }
        },
        (error) => {
          console.error('Erro inesperado:', error);
        }
      );
  }
  

  salvarAlimento() {
    try {
        this.apollo
        .mutate({
          mutation: POST_FOOD,
          variables: {
            nome: this.nome.toLocaleLowerCase(),
            unidadeMedida: this.selectedItem.toString(),
          }
        })
        .subscribe(
          ({ data }) => {
            this.modalClosed.emit();
          },
          (error) => {
            console.error('Erro ao registrar alimento:', error);
          }
        );

 

    } catch (error) {
      console.log('Error: ', error)
    }
  


    this.activeModal.close();

  }

  closeModal() {
     this.activeModal.dismiss();

  }

  onItemChange() {
    if (this.selectedItem === '') {
      this.quantity = 0;
    }
  }

  onAddItem() {
    if (this.selectedItem !== '' && this.quantity > 0) {
      this.addedItems.push({ item: this.selectedItem, quantity: this.quantity });
      this.selectedItem = '';
      this.quantity = 0;
    }
  }


}
