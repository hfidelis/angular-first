import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  mostraMenu = new Subject<boolean>();

  constructor(private _route: Router) { }

  login(usuario: string, senha: string):void {
    if(usuario === "admin" && senha === "1234") {
      localStorage.setItem('token', 'qwerty12345');
      // next from Subject
      this.mostraMenu.next(false);
    } else {
      alert('Login incorreto!')
      this._route.navigate(['/login'])
      this.mostraMenu.next(true);
    }
  }

  setMostraMenu(valor: boolean){
    this.mostraMenu.next(valor)
  }

  getMostraMenu() {
    return this.mostraMenu.asObservable()
  }

}
