import { Component, Output, EventEmitter } from "@angular/core";
import { Router } from "@angular/router";
import { Transferencia } from "../models/transferencia";
import { TransferenciaService } from "../services/transferencia.service";


@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})

export class NovaTransferenciaComponent{

  //Quero mandar os Dados para quem invocou (output)
  //Vou criar um evento dentro do meu objeto
  @Output() aoTransferir = new EventEmitter<any>();
  //Será do tipo EventEmmiter, se eu só tiver alguma coisa de output, nao vou ter capacidade de propagar esse dado

  valor: number;
  destino: number;

  //Vou passar o post diretemanete para o Service agora
  constructor(private service: TransferenciaService,
              private router: Router
              ){}

  transferir(){
    console.log('Solicitado nova transferência');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino};

    this.service.adicionar(valorEmitir).subscribe(resultado => {
        console.log(resultado);
        this.limparCampos();
        this.router.navigateByUrl('extrato');//vai ser redirecionado

      },
      (error) => console.error(error)
      );
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
