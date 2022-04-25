import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss']
})
export class ExtratoComponent implements OnInit {
  //Input vou receber de fora
  //Eu peguei a propriedade "transferencia" de app.component e passo p/ esse componente de extrato
  @Input() transferencias: any[];
  constructor() { }

  ngOnInit(): void {

  }

}
