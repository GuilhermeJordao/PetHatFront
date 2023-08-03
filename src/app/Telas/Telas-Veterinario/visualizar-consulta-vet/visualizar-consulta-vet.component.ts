import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConsultaService } from '../../service/consulta.service';

@Component({
  selector: 'app-visualizar-consulta-vet',
  templateUrl: './visualizar-consulta-vet.component.html',
  styleUrls: ['./visualizar-consulta-vet.component.scss'],
})
export class VisualizarConsultaVetComponent {
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

  concluir() {
    this.consultaService.concluir(this.id).subscribe((data) => {
      console.log('cancelo');
      this.router.navigate(['/ConsultaAgendada']);
    });
  }
}
