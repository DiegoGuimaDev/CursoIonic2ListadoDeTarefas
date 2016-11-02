import { NgModule } from '@angular/core';
import {Http} from '@angular/http';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import {LoginProvider} from "../providers/login-provider";
import {Registrar} from "../pages/registrar/registrar";
import firebase from "firebase";
import {TarefaListItem} from "../components/tarefa-list-item/tarefa-list-item";
import {TarefasList} from "../pages/tarefas-list/tarefas-list";
import {TarefasAdd} from "../pages/tarefas-add/tarefas-add";
import {TarefaProvider} from "../providers/tarefa-provider";
import {LovProvider} from "../providers/lov-provider";
import {TranslateModule, TranslateStaticLoader, TranslateLoader} from 'ng2-translate';
import {Linguagem} from "../pages/linguagem/linguagem";

export function createTranslateLoader(http:Http) {
  return new TranslateStaticLoader(http, './assets/i18n', '.json');
}

@NgModule({
  declarations: [
    MyApp,
    Login,
    Registrar,
    Linguagem,
    TarefasList,
    TarefaListItem,
    TarefasAdd
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: (createTranslateLoader),
      deps: [Http]
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    Registrar,
    Linguagem,
    TarefasList,
    TarefaListItem,
    TarefasAdd
  ],
  providers: [
    LoginProvider,
    TarefaProvider,
    LovProvider
  ]
})
export class AppModule {
  constructor(){
    //noinspection TypeScriptUnresolvedFunction
    firebase.initializeApp(firebaseConfig);
  }
}




const firebaseConfig = {
  apiKey: "AIzaSyCIfAfkOLIVv2rSBeyKBiHbyOiMACdWTd0",
  authDomain: "listadordetarefas-5d1ed.firebaseapp.com",
  databaseURL: "https://listadordetarefas-5d1ed.firebaseio.com",
  storageBucket: "",
  messagingSenderId: "642450848408"
};
