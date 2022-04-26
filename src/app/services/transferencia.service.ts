import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/transferencia';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {

  private listaTransferencia: any[];
  private url = "http://localhost:3000/transferencias";

  constructor(private httpClient: HttpClient) {
    this.listaTransferencia = [];//inicializei meu array de transferencia
  }

  get transferencias(){
    return this.listaTransferencia;
  }

  todas(): Observable<Transferencia[]>{
    //Esse get nao retorna uma lista, retorna um observable de alguma coisa, uma lista de TRANSFERENCIA, ou seja, eu tipei ela
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionar(transferencia: any){
    this.hidratar(transferencia);

    this.transferencias.push(transferencia);//Adicionando um elemento um um array

  }

  //quando passar por esse método vai adicionar uma nova data
  private hidratar(transferencia: any){
    transferencia.data = new Date();
  }





}
