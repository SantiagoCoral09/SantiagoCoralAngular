import { Component } from '@angular/core';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  
  //algunos tipos de datos
  name: string = 'Santiago Coral';
  age: number = 23;
  phone: null = null;
  otrotipo: undefined = undefined;
  cualqquierdato: any;
  variostipos: string | number = 'esto es un dato';
  variostipos2: string | number = 10;

  listCars: Array<any> = [1, 'cadena', null];///lista de tipo Array o vector
  listCars2: Array<CarModel> = [{
    marca:'sandero',
    modelo:'steepway',
    year:2020
  },
  {
    marca: 'chevrolet',
    modelo: 'modelo',
    year: 2012
  }
  ]
  //////DEFINICIÓN DE OBJETOS
  car: any = {
    marca: 'chevrolet',
    modelo: 'spark',
    year: 2000
  }
  car2: CarModel={
    marca: 'BMW',
    modelo: 'Porche',
    year: 2002
  }

  persona1: Persona={
    nombre: 'David',
    apellido: 'Ceballos',
    edad: 25,
    telefono: 3125697558
  }

  lista1: Array<Productos> = [{
    codigo_interno: 1,
    nombre:'f',
    valor:3000,
    cantidad:20,
    embalaje:54,
    precio:3500,
  },
  {
    codigo_interno: 2,
    nombre:'i',
    valor:4500,
    cantidad:40,
    embalaje:55,
    precio:5500,
  }
  ]
}
//////interfaces: es definir un contrato de operacion, que condiciona a las variables a comportarse de una
///manera determinada
interface CarModel{
  marca: string;
  modelo: string;
  year: number;
    
}



interface Persona{
  nombre: string;
  apellido: string;
  edad: number;
  telefono: number;
}

///Definir 3 listas que dependan de la definicion de datos de una interface denominada  Productos
/// en cada lista definir 2 objetos dependientes de la interface

interface Productos{
  codigo_interno:number;
  nombre: string;
  valor:number;
  cantidad:number;
  embalaje:any;
  precio:number;

}

