import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PetService } from 'src/app/Telas/TelasPrincipais/service/pet.service';
import { ProntuarioServiceService } from '../service/prontuario-service.service';

@Component({
  selector: 'app-adicionar-prontuario',
  templateUrl: './adicionar-prontuario.component.html',
  styleUrls: ['./adicionar-prontuario.component.scss'],
})
export class AdicionarProntuarioComponent {
  closeResult: any;
  form: FormGroup;
  idPet: any = 0;
  prontuario = {
    petNome: [null],
  };

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private petService: PetService,
    private prontuarioService: ProntuarioServiceService
  ) {
    this.closeResult = this.closeResult;
    this.form = this.formBuilder.group({
      data: [null],
      horario: [null],
      imunizacao: [null],
      sinaisClinicos: [null],
      exames: [null],
      prescricao: [null],
      diagnostico: [null],
      observacao: [null],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idPet = params['id'];
      this.petService.buscarPorId(this.idPet).subscribe((dados) => {
        console.log(dados);
        this.prontuario.petNome = (dados as any).nome;
      });
    });
  }

  onSubmit() {
    this.prontuarioService
      .save(this.form.value, this.idPet)
      .subscribe((dados) => {
        console.log(dados);
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
}

function openModal() {
  throw new Error('Function not implemented.');
}
