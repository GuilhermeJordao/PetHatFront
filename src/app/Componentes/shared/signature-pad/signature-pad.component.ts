import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import SignaturePad from 'signature_pad';
import { AdicionarProntuarioComponent } from 'src/app/Telas-Veterinario/adicionar-prontuario/adicionar-prontuario.component';
import { Assinatura } from 'src/app/Telas-Veterinario/service/assinatura.service';
import { UploadImagemService } from 'src/app/Telas/TelasPrincipais/service/upload-imagem.service';

@Component({
  selector: 'app-signature-pad',
  templateUrl: './signature-pad.component.html',
  styleUrls: ['./signature-pad.component.scss'],
})
export class SignaturePadComponent implements OnInit {
  signatureNeeded!: boolean;
  signaturePad!: SignaturePad;
  @ViewChild('canvas') canvasEl!: ElementRef;
  signatureImg!: string;
  imageName: any;
  sucesso = false;

  constructor(private adicionarProntuario: AdicionarProntuarioComponent) {}

  ngOnInit(): void {}
  ngAfterViewInit() {
    this.signaturePad = new SignaturePad(this.canvasEl.nativeElement);
  }

  startDrawing(event: Event) {
    // works in device not in browser
  }

  moved(event: Event) {
    // works in device not in browser
  }

  clearPad() {
    this.signaturePad.clear();
  }

  savePad() {
    const base64Data = this.signaturePad.toDataURL();
    this.signatureImg = base64Data;
    const matchResult = base64Data.match(/data:([^;]+)/);

    if (matchResult) {
      const contentType = matchResult[1];
      const byteCharacters = atob(base64Data.split(',')[1]);
      const byteArrays = new Uint8Array(byteCharacters.length);

      for (let i = 0; i < byteCharacters.length; i++) {
        byteArrays[i] = byteCharacters.charCodeAt(i);
      }

      const blob = new Blob([byteArrays], { type: contentType });

      let file = new File([blob], `image.png`, { type: contentType });

      if (this.adicionarProntuario?.setImageFile) {
        console.log('Passou aqui');
        this.adicionarProntuario.setImageFile(file);
      }
    } else {
      console.error(
        'Não foi possível extrair o tipo de mídia dos dados Base64.'
      );
    }

    let signatureNeeded: boolean = this.signaturePad.isEmpty();
    if (!signatureNeeded) {
      signatureNeeded = false;
    }
  }
}
