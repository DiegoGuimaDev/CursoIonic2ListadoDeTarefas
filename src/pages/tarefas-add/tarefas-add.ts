import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import {Tarefa} from "../../model/tarefa";
import {LovProvider} from "../../providers/lov-provider";
import {TarefaProvider} from "../../providers/tarefa-provider";

@Component({
  selector: 'page-tarefas-add',
  templateUrl: 'tarefas-add.html'
})
export class TarefasAdd {

  tarefa:Tarefa;
  tarefaForm;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public tarefasProvider: TarefaProvider,
              public viewCtrl: ViewController,
              public fb: FormBuilder,
              public lovProvider: LovProvider) {
    this.initialize();
  }

  private initialize(){
    this.tarefaForm = this.fb.group({
      'titulo' : ['',Validators.required],
      'descricao' : ['', Validators.required]
    });
  }

  ionViewDidLoad() {
    this.tarefa = this.navParams.get('tarefa');
    if(!this.tarefa){
      this.tarefa = new Tarefa();
    }
  }

  salvarTarefa(){
    this.tarefasProvider.save(this.tarefa);
    this.viewCtrl.dismiss();
  }

}
