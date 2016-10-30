import {EstadoTarefa} from "./estado-tarefa";
export class Tarefa {
  keyReference:string;
  titulo:string;
  descricao?:string;
  state:EstadoTarefa;

  constructor(titulo?:string, descricao?:string){
    this.titulo = titulo;
    this.descricao = descricao;
    this.state = EstadoTarefa.NOVA;
  }
}
