import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
  transferencias: any[] = [];//Não pode esquecer de iniciá-lo

  transferir($event){
    console.log($event);
    const transferencia = {...$event, data: new Date()}// espread operator, pego o evento todo
    this.transferencias.push(transferencia);

  }


}
