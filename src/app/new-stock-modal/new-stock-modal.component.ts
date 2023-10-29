import { Component, EventEmitter, Output } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Apollo } from 'apollo-angular';
import { POST_STOCK } from '../graphql.operations';

@Component({
  selector: 'app-new-stock-modal',
  templateUrl: './new-stock-modal.component.html',
  styleUrls: ['./new-stock-modal.component.less']
})
export class NewStockModalComponent {
  nome: string = '';
  @Output() modalClosed = new EventEmitter<void>();

  constructor(private activeModal: NgbActiveModal, private apollo: Apollo) {}

  saveStock() {
    const createdAt =  new Date()

    this.apollo
      .mutate({
        mutation: POST_STOCK,
        variables: {
          nome: this.nome,
          createdAt: createdAt,
        }
      })
      .subscribe(
        ({ data }) => {
          // console.log('Data: ', data)
        },
        (error) => {
          console.error('Erro ao criar o estoque:', error);
        }
      );

    this.activeModal.close();
    this.modalClosed.emit();


  }

  closeModal() {
     this.activeModal.dismiss();
  }


}
