import { Component,EventEmitter, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-collection-modal-content',
  templateUrl: './collection-modal-content.component.html',
  styleUrls: ['./collection-modal-content.component.css']
})
export class CollectionModalContentComponent{
  closeResult: string;
  @Output() submitted = new EventEmitter();

  collectionForm = this.fb.group({
    name: ['', Validators.required],
    description: ['',Validators.required]
  });

  constructor(private modalService: NgbModal, private fb: FormBuilder) {}

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  submit() {
    this.submitted.emit(this.collectionForm.value);
    this.modalService.dismissAll();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}
