import { Component, Output, EventEmitter } from "@angular/core";


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

  transferir(){
    console.log('Solicitado nova transferência');
    const valorEmitir = { valor: this.valor, destino: this.destino};
    this.aoTransferir.emit(valorEmitir);//vou emitir um evento
    this.limparCampos();
  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }

}
