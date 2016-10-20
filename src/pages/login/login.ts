import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Registrar} from "../registrar/registrar";
import {LoginProvider} from "../../providers/login-provider";
import {Credencial} from "../../model/credencial";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  credencial:Credencial;

  constructor(public navCtrl: NavController,
              public loginProvider: LoginProvider) {}

  ionViewDidLoad() {
    this.credencial = new Credencial();
    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user => console.log(user)
    )
    this.loginProvider.loginFalhaEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  loginComCredencial(){
    this.loginProvider.loginComCredencial(this.credencial);
  }

  loginComGoogle(){
    this.loginProvider.loginComGoogle();
  }

  sair(){
    this.loginProvider.sair();
  }

  doRegister(){
    this.navCtrl.push(Registrar);
  }

}
