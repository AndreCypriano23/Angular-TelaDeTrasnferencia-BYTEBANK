import { Component, Input, OnInit } from '@angular/core';
import { Transferencia } from '../models/transferencia';
import { TransferenciaService } from '../services/transferencia.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //Input vou receber de fora
  //Eu peguei a propriedade "transferencia" de app.component e passo p/ esse componente de extrato
  transferencias: any[];

  constructor(private service: TransferenciaService) { }

  ngOnInit(): void {
      //this.transferencias = this.service.transferencias;
      //vou colocar que está
      //no  meu getTransferencia e atribuo a minha propriedade transferencia
      this.service.todas().subscribe(
        (transferencias : Transferencia[]) => {
          console.table(transferencias);
          this.transferencias = transferencias;
        }
      );
  }

}
