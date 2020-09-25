import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  nombre: string = 'Capitan América';
  nombre2: string = 'oRioL MarTiNEz';
  array: number[] = [1, 2, 3, 4, 5];
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  heroe = {
    nombre: 'Logan',
    clave: 'wolverine',
    edad: 500,
    direccion: {
      calle: 'Charles Xavier Mansion',
      numero: '100',
    },
  };

  valorPromise = new Promise((resolve) => {
    setTimeout(() => {
      resolve('Llega la promesa');
    }, 4500);
  });

  fecha: Date = new Date();
}
