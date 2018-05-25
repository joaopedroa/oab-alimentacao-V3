import { Component, OnInit  } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import { EventEmitter } from 'events';
import {Router} from '@angular/router'
import { Observable } from 'rxjs/Observable';
import swal from 'sweetalert2'
import * as firebase from 'firebase/app';
import { AuthService } from '../guards/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


    email:any;
    senha:any;
   autent:any;


  constructor(private fire: AngularFireAuth,private router:Router,public server:AuthService) {
    this.fire.auth.signOut();
    
   }
  
  ngOnInit() {

 
  }
/*
  signInUser() {
      this.fire.auth.signInWithEmailAndPassword(this.email, this.senha).then((user) => {        
        this.router.navigate(['simulado']);
      }) .catch(error => {
        console.log('got an error',error);
        alert('Email ou Senha incorreto!')
    });
  }
  */
 signInUser(){
    this.server.signInUser(this.email,this.senha);
 }
}
