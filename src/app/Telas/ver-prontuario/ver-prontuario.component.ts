import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Prontuario } from 'src/app/Telas-Veterinario/model/prontuario';
import { ProntuarioServiceService } from 'src/app/Telas-Veterinario/service/prontuario-service.service';

@Component({
  selector: 'app-ver-prontuario',
  templateUrl: './ver-prontuario.component.html',
  styleUrls: ['./ver-prontuario.component.scss'],
})
export class VerProntuarioComponent {
  id: any = 0;
  prontuarios: Prontuario[] | undefined;
  closeResult: any;
  prontuarioSelected: any;
  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private prontuarioService: ProntuarioServiceService
  ) {
    this.closeResult = this.closeResult;
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.prontuarioService.listar(this.id).subscribe((dados) => {
        this.prontuarios = dados;
        console.log(this.prontuarios);
      });
    });
  }

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title' })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openFullscreen(content: any, prontuario: any) {
    this.prontuarioSelected = prontuario;
    this.modalService.open(content, { fullscreen: true });
  }
}

function openModal() {
  throw new Error('Function not implemented.');
}
