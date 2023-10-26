import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-food-modal',
  templateUrl: './add-food-modal.component.html',
  styleUrls: ['./add-food-modal.component.less']
})
export class AddFoodModalComponent {
  selectedItem: string = '';
  date: string = '';
  nome: string = '';
  quantity: number = 0;
  addedItems: { item: string; quantity: number }[] = [];
  items: { id: number, name: string, quantity: number }[] = [
    { id: 1, name: 'Kg', quantity: 0 },
    { id: 2, name: 'G', quantity: 0 },
    { id: 3, name: 'Pct', quantity: 0 },
    { id: 4, name: 'Und', quantity: 0 },
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
