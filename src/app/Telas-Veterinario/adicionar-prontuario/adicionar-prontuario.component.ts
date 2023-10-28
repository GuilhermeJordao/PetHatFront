import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PetService } from 'src/app/Telas/TelasPrincipais/service/pet.service';
import { ProntuarioServiceService } from '../service/prontuario-service.service';
import { ReceitaService } from '../service/receita.service';
import { Assinatura } from '../service/assinatura.service';
import SignaturePad from 'signature_pad';

@Component({
  selector: 'app-adicionar-prontuario',
  templateUrl: './adicionar-prontuario.component.html',
  styleUrls: ['./adicionar-prontuario.component.scss'],
})
export class AdicionarProntuarioComponent {
  closeResult: any;
  signaturePad!: SignaturePad;
  form: FormGroup;
  idPet: any = 0;
  file!: File;
  prontuario = {
    petNome: [null],
  };

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private petService: PetService,
    private prontuarioService: ProntuarioServiceService,
    private receitaService: ReceitaService,
    private assinaturaService: Assinatura
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
      receita: [null],
      file: [null],
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idPet = params['id'];
      console.log(typeof this.idPet);

      this.petService.buscarPorId(this.idPet).subscribe((dados) => {
        console.log(dados);
        this.prontuario.petNome = (dados as any).nome;
      });
    });
  }

  onSubmit() {
    this.receitaService
      .buscar(Number(localStorage.getItem('idReceita')))
      .subscribe((receita) => {
        this.form.value.receita = receita;
        this.assinaturaService.upload(this.file).subscribe((data) => {
          const idAss = (data as any).id;
          this.prontuarioService
            .save(this.form.value, this.idPet)
            .subscribe((dados) => {
              const idPront = dados._id;
              localStorage.setItem(`${idPront}`, idAss);
              console.log(dados);
            });
        });
      });

    localStorage.removeItem('idReceita');
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

  addReceita() {
    this.router.navigate([`AddReceita/${this.idPet}`]);
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

  setSignaturePad(signaturePad: SignaturePad) {
    this.signaturePad = signaturePad;
  }

  setImageFile(file: File) {
    console.log(file);
    this.file = file;
  }
}

function openModal() {
  throw new Error('Function not implemented.');
}
