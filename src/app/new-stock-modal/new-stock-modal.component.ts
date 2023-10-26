import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-new-stock-modal',
  templateUrl: './new-stock-modal.component.html',
  styleUrls: ['./new-stock-modal.component.less']
})
export class NewStockModalComponent {
  nome: string = '';

  constructor(private activeModal: NgbActiveModal) {}

  salvarAlimento() {
    // Lógica para salvar o alimento

    this.activeModal.close();

  }

  closeModal() {
    // Lógica para fechar o modal

    this.activeModal.dismiss();

  }


}
