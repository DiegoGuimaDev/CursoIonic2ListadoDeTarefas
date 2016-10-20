import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import {LoginProvider} from "../providers/login-provider";
import {Registrar} from "../pages/registrar/registrar";
import firebase from "firebase";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Registrar
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Registrar
  ],
  providers: [
    LoginProvider
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
