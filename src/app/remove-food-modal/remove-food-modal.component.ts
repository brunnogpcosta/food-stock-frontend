import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-remove-food-modal',
  templateUrl: './remove-food-modal.component.html',
  styleUrls: ['./remove-food-modal.component.less']
})
export class RemoveFoodModalComponent implements OnInit {
  selectedItem: string = '';
  quantity: number = 0;
  addedItems: { item: string; quantity: number }[] = [];
  items: [] = []
  maxLength: number = 1;

  constructor(private activeModal: NgbActiveModal) {}


  ngOnInit(): void {
    
  }

  removeFood() {
    this.activeModal.close();

  }

  closeModal() {
    this.activeModal.dismiss();
  }



}
