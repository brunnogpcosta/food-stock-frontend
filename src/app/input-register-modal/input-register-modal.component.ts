import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-input-register-modal',
  templateUrl: './input-register-modal.component.html',
  styleUrls: ['./input-register-modal.component.less']
})
export class InputRegisterModalComponent {
  selectedItem: string = '';
  quantity: number = 0;
  addedItems: { item: string; quantity: number }[] = [];
  items: { id: number, name: string, quantity: number }[] = [
    { id: 1, name: 'Item 1', quantity: 0 },
    { id: 2, name: 'Item 2', quantity: 0 },
    { id: 3, name: 'Item 3', quantity: 0 },
    { id: 4, name: 'Item 4', quantity: 0 },
  ];
  

  constructor(private activeModal: NgbActiveModal) {}

  salvarAlimento() {
    // Lógica para salvar o alimento

    this.activeModal.close();

  }

  closeModal() {
    // Lógica para fechar o modal

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
