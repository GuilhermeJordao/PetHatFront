import { Component } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-teste-funcionalidades',
  templateUrl: './teste-funcionalidades.component.html',
  styleUrls: ['./teste-funcionalidades.component.scss']
})
export class TesteFuncionalidadesComponent {
  closeResult: any;
  constructor(
    private modalService: NgbModal,
  ){
    this.closeResult = this.closeResult
  }
  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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

function openModal() {
  throw new Error('Function not implemented.');
}
