import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
        <h1> {{ titulo }}</h1>

        <button (click)=" sumar() "> + {{ base }} </button>

        <span> {{ contador }} </span>

        <button (click)=" restar() "> - {{ base }} </button>

        <button (click)=" acumular( base ) "> acumulador </button>
    `
})

export class ContadorComponent{
    titulo: string = 'bases';
    contador: number = 0;
    base: number = 5;
  
    sumar(){
      this.contador += this.base;
    }
  
    restar(){
      this.contador -= this.base;
    }
  
  
    acumular( valor: number ){
      this.contador += valor;
    }  
}