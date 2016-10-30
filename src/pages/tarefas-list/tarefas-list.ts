import { Component, NgZone } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import {Tarefa} from "../../model/tarefa";
import {TarefaProvider} from "../../providers/tarefa-provider";
import {TarefasAdd} from "../tarefas-add/tarefas-add";

@Component({
  selector: 'page-tarefas-list',
  templateUrl: 'tarefas-list.html'
})
export class TarefasList {

  tarefas:Array<Tarefa>;

  constructor(public navCtrl: NavController,
              public tarefaProvider: TarefaProvider,
              public toastCtrl: ToastController,
              public ngZone: NgZone) {}

  ionViewDidLoad() {
    /*
     * value - Escuta todas as alterações da referencia
     * child_added - Ouvinte para quando um filtlo for adicionado
     * child_changed - Ouvinte para quando algum filtlo for alterado
     * child_removed - Ouvinte para quando algum filho for deletado
     * child_moved - Ouvinte para ouvir as mudanças na prioridade de um filho
     */
    this.tarefaProvider.reference.on('child_removed', (snapshot) => {
      let tarefaRemovida = snapshot.val();
      this.toastCtrl.create({
        message: 'Tarefa '+tarefaRemovida.titulo+' removida!',
        duration: 3000
      }).present();
    })

    this.tarefaProvider.reference.on('value', (snapshot) => {
      this.ngZone.run( () => {
        let innerArray = new Array();
        snapshot.forEach(elemento => {
          let el = elemento.val();
          innerArray.push(el);
        })
        this.tarefas = innerArray;
      })
    })
  }

  atualizarTarefa(tarefa:Tarefa){
    this.navCtrl.push(TarefasAdd,{'tarefa' : tarefa});
  }

  adicionarTarefa(){
    this.navCtrl.push(TarefasAdd,{'tarefa' : new Tarefa()});
  }

  deletarTarefa(tarefa:Tarefa){
    this.tarefaProvider.deletar(tarefa).then(
      sucesso => console.log('tarefa deletada')
    )
    .catch(error => console.log('nao foi possivel deletar a tarefa'));
  }

}
