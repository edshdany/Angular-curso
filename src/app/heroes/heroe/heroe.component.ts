import { ClassGetter } from '@angular/compiler/src/output/output_ast';
import { Component } from '@angular/core';


@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'Iron man';
    edad: number = 31;

    get nombreCapitalizado(): string {
        return this.nombre.toUpperCase();
    }

    obtenerMNombre(): string{
        return `${ this.nombre } - ${ this.edad } `;
    }

    cambiarNombre(): void {
        this.nombre = 'Lovesno WEY';
    }

    cambiarEdad(): void{
        console.log('puchado');
        this.edad = 28;
    }

}