import { Component, Input } from '@angular/core';
import {Tarefa} from "../../model/tarefa";


@Component({
  selector: 'tarefa-list-item',
  templateUrl: 'tarefa-list-item.html'
})
export class TarefaListItem {

  @Input()
  tarefa:Tarefa;

}
