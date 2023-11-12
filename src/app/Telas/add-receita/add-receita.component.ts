import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from 'src/app/Telas-Veterinario/service/receita.service';
import { ConsultaService } from '../TelasPrincipais/service/consulta.service';

@Component({
  selector: 'app-add-receita',
  templateUrl: './add-receita.component.html',
  styleUrls: ['./add-receita.component.scss'],
})
export class AddReceitaComponent {
  form: FormGroup;
  idPet: any;
  idConsulta: any;
  nomeVet: any;

  constructor(
    private receitaService: ReceitaService,
    private formBuilder: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute,
    private consultaService: ConsultaService
  ) {
    this.form = this.formBuilder.group({
      medicamentos: [null],
      dosagem: [null],
      dataEmissao: [null],
      dataValidade: [null],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.idPet = params['id'];
      this.idConsulta = params['idConsulta'];
    });

    this.consultaService.buscarPorId(this.idConsulta).subscribe((consulta) => {
      this.nomeVet = (consulta as any).veterinario.nome;
    });
  }

  navegar() {
    this.route.navigate([
      `AdicionarProntuario/${this.idPet}/${this.idConsulta}`,
    ]);
  }

  onSubmit() {
    this.receitaService.save(this.form.value).subscribe((dados) => {
      localStorage.setItem('idReceita', (dados as any)._id);
      localStorage.setItem('receitaData', JSON.stringify(this.form.value));
      this.route.navigate([
        `AdicionarProntuario/${this.idPet}/${this.idConsulta}`,
      ]);
    });
  }
}
