import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import {Registrar} from "../registrar/registrar";
import {LoginProvider} from "../../providers/login-provider";
import {Credencial} from "../../model/credencial";
import {TarefasList} from "../tarefas-list/tarefas-list";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class Login {

  credencial:Credencial;

  constructor(public navCtrl: NavController,
              public loginProvider: LoginProvider,
              public menuCtrl: MenuController) {
    this.initialize();
  }

  private initialize(){
    this.credencial = new Credencial();
  }

  ionViewDidEnter(){
    this.menuCtrl.enable(false);
    this.menuCtrl.swipeEnable(false);
  }

  ionViewDidLoad() {
    this.loginProvider.loginSucessoEventEmitter.subscribe(
      user => {
        this.menuCtrl.enable(true);
        this.menuCtrl.swipeEnable(true);
        this.navCtrl.setRoot(TarefasList)
      }
    );
    this.loginProvider.loginFalhaEventEmitter.subscribe(
      error => console.log(error)
    )
  }

  loginComFacebook(){
    this.loginProvider.loginComFacebook();
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
