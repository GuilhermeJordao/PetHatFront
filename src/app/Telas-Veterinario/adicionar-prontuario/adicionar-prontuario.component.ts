import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormGroupDirective } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { PetService } from 'src/app/Telas/TelasPrincipais/service/pet.service';
import { ProntuarioServiceService } from '../service/prontuario-service.service';
import { ReceitaService } from '../service/receita.service';
import { Assinatura } from '../service/assinatura.service';
import SignaturePad from 'signature_pad';
import { ConsultaService } from 'src/app/Telas/TelasPrincipais/service/consulta.service';

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
  idConsulta: any = 0;
  file!: File;
  sucessoReceita = false;
  sucessoAssinatura = false;
  sucessoProntuario = false;
  prontuario = {
    petNome: [null],
    data: [null],
    horario: [null],
  };

  constructor(
    private modalService: NgbModal,
    private route: ActivatedRoute,
    private router: Router,
    private formBuilder: FormBuilder,
    private petService: PetService,
    private prontuarioService: ProntuarioServiceService,
    private receitaService: ReceitaService,
    private assinaturaService: Assinatura,
    private consultaService: ConsultaService
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
    });
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.idPet = params['id'];
      this.idConsulta = params['idConsulta'];
      console.log(typeof this.idPet);
      const prontuarioData = localStorage.getItem('prontuarioData');
      const receitaData = localStorage.getItem('receitaData');
      if (prontuarioData) {
        const prontuario = JSON.parse(prontuarioData);
        this.form.patchValue(prontuario);
      }

      if (receitaData) {
        this.sucessoReceita = true;
      }
      this.petService.buscarPorId(this.idPet).subscribe((dados) => {
        console.log(dados);
        this.prontuario.petNome = (dados as any).nome;
      });

      this.consultaService
        .buscarPorId(this.idConsulta)
        .subscribe((consulta) => {
          console.log(consulta);

          this.prontuario.data = (consulta as any).dataConsulta;
          this.prontuario.horario = (consulta as any).hora;
          this.form.value.data = this.prontuario.data;
          this.form.value.horario = this.prontuario.horario;

          console.log(this.form.value);
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
    localStorage.removeItem('prontuarioData');
    localStorage.removeItem('receitaData');
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
    localStorage.setItem('prontuarioData', JSON.stringify(this.form.value));
    this.router.navigate([`AddReceita/${this.idPet}/${this.idConsulta}`]);
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
    if (this.file) {
      this.sucessoAssinatura = true;
    }
  }
}

function openModal() {
  throw new Error('Function not implemented.');
}
