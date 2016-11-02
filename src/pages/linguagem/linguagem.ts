import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'page-linguagem',
  templateUrl: 'linguagem.html'
})
export class Linguagem {

  linguagens:Array<{label:string,key:string}>;

  constructor(public navCtrl: NavController,
              public translateService: TranslateService) {}

  ionViewDidLoad() {
    this.linguagens = [
      {label : 'global.labels.pt_BR', key: 'pt_BR'},
      {label : 'global.labels.en_US', key: 'en_US'},
    ]
  };

  isSelectedLinguagem(key:string){
    return localStorage.getItem('usedLanguage') == key;
  }

  selecionarLinguagem(key:string){
    localStorage.setItem('usedLanguage',key);
    this.translateService.use(key);
  }

}
