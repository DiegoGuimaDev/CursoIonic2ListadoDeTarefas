import {EstadoTarefa} from "./estado-tarefa";
export class Tarefa {
  codigo:number;
  titulo:string;
  descricao?:string;
  state:EstadoTarefa;
}
