import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ReceitaService } from 'src/app/Telas-Veterinario/service/receita.service';

@Component({
  selector: 'app-add-receita',
  templateUrl: './add-receita.component.html',
  styleUrls: ['./add-receita.component.scss'],
})
export class AddReceitaComponent {
  form: FormGroup;
  idPet: any;

  constructor(
    private receitaService: ReceitaService,
    private formBuilder: FormBuilder,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      medicamentos: [null],
      dosagem: [null],
      dataEmissao: [null],
      dataValidade: [null],
      clinicaResponsavel: [null],
    });
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.idPet = params['id'];
    });
  }

  onSubmit() {
    this.receitaService.save(this.form.value).subscribe((dados) => {
      localStorage.setItem('idReceita', dados._id.toString());
      this.route.navigate([`AdicionarProntuario/${this.idPet}`]);
    });
  }
}
