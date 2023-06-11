import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaService } from '../service/consulta.service';

@Component({
  selector: 'app-visualizar-consultal',
  templateUrl: './visualizar-consultal.component.html',
  styleUrls: ['./visualizar-consultal.component.css'],
})
export class VisualizarConsultalComponent implements OnInit {
  private id: any = 0;
  consulta = {
    nomeCliente: [null],
    hora: [null],
    dataConsulta: [null],
    petNome: [null],
    petEspecie: [null],
    veterinarioNome: [null],
    veterinarioEspecialidade: [null],
  };

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private consultaService: ConsultaService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.id = Number(params['id']);
      this.consultaService.buscarPorId(this.id).subscribe((dados) => {
        console.log(dados);

        this.consulta = {
          nomeCliente: (dados as any).pet.cliente.nome,
          hora: (dados as any).hora,
          dataConsulta: (dados as any).dataConsulta,
          petNome: (dados as any).pet.nome,
          petEspecie: (dados as any).pet.especie,
          veterinarioNome: (dados as any).veterinario.nome,
          veterinarioEspecialidade: (dados as any).veterinario.especialidade,
        };
      });
    });
  }

  cancelar() {
    this.consultaService.cancelar(this.id).subscribe((data) => {
      console.log('cancelo');
      this.router.navigate(['/ConsultaAgendada']);
    });
  }
}
