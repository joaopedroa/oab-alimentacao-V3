import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { EventEmitter } from 'events';
import {Router} from '@angular/router'
@Injectable()
export class AuthService {
  authState
  constructor(private fire: AngularFireAuth,private router:Router) { }

  signInUser(email:string,senha:string) {
    this.fire.auth.signInWithEmailAndPassword(email, senha).then((user) => {        
      this.authState = user;
      this.router.navigate(['simulado']);
    }) .catch(error => {
      console.log('got an error',error);
      alert('Email ou Senha incorreto!')
  });
}

authUser(): boolean {
  return this.authState !== null && this.authState !== undefined ? true : false;
}
}