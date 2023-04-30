import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../../service/cliente.service';
import { PetService } from '../../service/pet.service';

@Component({
  selector: 'app-perfil-pet',
  templateUrl: './perfil-pet.component.html',
  styleUrls: ['./perfil-pet.component.css'],
})
export class PerfilPetComponent implements OnInit {
  pet = {
    nome: [null],
    especie: [null],
    sexo: [null],
    raca: [null],
    idade: [null],
  };
  private id: number = 0;
  id_cliente: any = 0;
  nome: string | undefined;
  form: FormGroup;
  erroMensagem = false;
  sucessoMensagem = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petServico: PetService,
    private clienteService: ClienteService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nome: [null],
      especie: [null],
      sexo: [null],
      raca: [null],
      idade: [null],
    });
  }

  ngOnInit(): void {
    console.log(this.route);
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.petServico.buscarPorId(this.id).subscribe((dados) => {
        this.pet = {
          nome: (dados as any).nome,
          especie: (dados as any).especie,
          sexo: (dados as any).sexo,
          raca: (dados as any).raca,
          idade: (dados as any).idade,
        };
      });
      console.log(this.id);
    });

    this.clienteService.buscarIdPorEmail().subscribe((dados) => {
      this.id_cliente = dados;
      this.clienteService
        .visualizarPerfil(this.id_cliente)
        .subscribe((data) => {
          this.nome = (data as any).nome;
          console.log(this.nome);
        });
    });
  }

  onSubmit() {
    this.petServico.buscarPorId(this.id).subscribe((data) => {
      if (this.form.value.nome === null) {
        this.form.value.nome = data.nome;
      }

      if (this.form.value.especie === null) {
        this.form.value.especie = data.especie;
      }

      if (this.form.value.idade === null) {
        this.form.value.idade = data.idade;
      }

      if (this.form.value.raca === null) {
        this.form.value.raca = data.raca;
      }

      if (this.form.value.sexo === null) {
        this.form.value.sexo = data.sexo;
      }

      this.petServico.alterarPet(this.id, this.form.value).subscribe((data) => {
        console.log('Pet atualizado com sucesso!');
        window.location.reload();
      });
    });
  }

  deletarPet() {
    console.log(this.id);
    this.petServico.deletarPet(this.id).subscribe();
    this.router.navigate(['/VisualisarPets']);
  }
}
