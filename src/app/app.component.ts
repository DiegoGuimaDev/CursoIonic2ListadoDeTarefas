import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import {Login} from "../pages/login/login";
import {TranslateService} from 'ng2-translate';
import {Linguagem} from "../pages/linguagem/linguagem";
import {TarefasList} from "../pages/tarefas-list/tarefas-list";


@Component({
  template: `
  <ion-menu [content]="rootIonNav">
    <ion-content>
      <ion-list>
      <ion-list-header>
        Menu
      </ion-list-header>
        <button menuClose ion-item *ngFor="let menuSection of menuSections" (click)="navToComponent(menuSection.component)">
          {{menuSection.title | translate}}
          <ion-icon name="arrow-forward" item-right></ion-icon>
        </button>
      </ion-list>  
    </ion-content>
  </ion-menu>
  <ion-nav #rootIonNav [root]="rootPage"></ion-nav>`
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage = Login;
  menuSections:Array<{title:string,component:any}>

  constructor(platform: Platform, translateService: TranslateService) {
    platform.ready().then(() => {
      localStorage.setItem('usedLanguage','pt_BR');
      translateService.setDefaultLang('pt_BR');
      translateService.use('pt_BR');
      StatusBar.styleDefault();
      this.menuSections = [
        {title : 'pages.tarefas.title', component : TarefasList},
        {title : 'pages.linguagem.title', component : Linguagem}
      ]
    });
  }

  navToComponent(component:any){
    this.nav.setRoot(component);
  }
}
