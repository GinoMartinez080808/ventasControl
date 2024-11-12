import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { Product } from "../../interfaces/product";
import { NgFor, NgIf } from '@angular/common';
import { CommonModule } from '@angular/common'; // Import if needed
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [HeaderComponent,NgFor,NgIf,CommonModule],
  templateUrl: './products.component.html', 
  styleUrl: './products.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsComponent {

  compra: Array<any> = [];

  products: Array<Product> = [
    // Harinas
    {
      id: 0,
      nombre: 'Harina P.A.N. Blanca',
      precio: 10.5,
      imagen: ['https://lh3.googleusercontent.com/p-K-FfFnpv0kgdVT1kNxI_lludARFkD-VpAFOimS0gbiIA9JxOP78PkQlhOnD6Q8W2cU-vvRkdLG0vdfvni86ChSo0UlXImPVYPJ2uUfAX78WSSd'],
      cantidad: 0,
      categoria: 'Harinas',
      descripcion: 'Harina de trigo blanca, ideal para todo tipo de preparaciones.',
      presentacion: 'Paquete de 1 kg'
    },
    {
      id: 1,
      nombre: 'Harina P.A.N. Integral',
      precio: 12.0,
      imagen: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBSzK0eYR2a9G89SBtofbsO2zOe_v3hoQxfw&s'],
      cantidad: 15,
      categoria: 'Harinas',
      descripcion: 'Harina de trigo integral, rica en fibra.',
      presentacion: 'Paquete de 900 g'
    },
    // Aceites
    {
      id: 2,
      nombre: 'Aceite Mazeite',
      precio: 18.0,
      imagen: ['https://costazul.sigo.com.ve/images/thumbs/0022159_aceite-de-maiz-mazeite-1-l_450.jpeg'],
      cantidad: 10,
      categoria: 'Aceites',
      descripcion: 'Aceite vegetal de maíz, ideal para freír y cocinar.',
      presentacion: 'Botella de 1 litro'
    },
    {
      id: 3,
      nombre: 'Aceite Sol de Maíz',
      precio: 16.5,
      imagen: ['https://costazul.sigo.com.ve/images/thumbs/0022159_aceite-de-maiz-mazeite-1-l_450.jpeg'],
      cantidad: 12,
      categoria: 'Aceites',
      descripcion: 'Aceite vegetal de maíz, alto oleico.',
      presentacion: 'Botella de 900 ml'
    },
    // Pastas
    {
      id: 4,
      nombre: 'Pasta Primor Espaguetti',
      precio: 8.5,
      imagen: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ08XEmA-XAkcYFSnU7pCnBqk_aBHGBEnU9Fw&s'],
      cantidad: 30,
      categoria: 'Pastas',
      descripcion: 'Espaguetti de trigo duro, ideal para acompañar salsas.',
      presentacion: 'Paquete de 500 g'
    },
    // ... Continúa con los otros productos
    {
      id: 5,
      nombre: 'Refresco Maltín Polar',
      precio: 5.5,
      imagen: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21pQf-7eLn-fiMIBWbTOZRKodlWuxeGxSeA&s'],
      cantidad: 25,
      categoria: 'Bebidas',
      descripcion: 'Refresco de malta, ideal para compartir.',
      presentacion: 'Lata de 350 ml'
    },
    {
      id: 6,
      nombre: 'Cerveza Polar',
      precio: 7.0,
      imagen: ['https://assets.tuzonamarket.com/images/producto/JrH882Ivf1.jpg'],
      cantidad: 40,
      categoria: 'Bebidas',
      descripcion: 'Cerveza lager, refrescante y ligera.',
      presentacion: 'Botella de 330 ml'
    },
    {
      id: 7,
      nombre: 'Mayonesa Mavesa',
      precio: 9.0,
      imagen: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOsnQqA2IilJOIc7zCG_48nzmP3ASVlZSfrw&s'],
      cantidad: 18,
      categoria: 'Condimentos',
      descripcion: 'Mayonesa clásica, ideal para sándwiches y ensaladas.',
      presentacion: 'Frasco de 450 g'
    },
    {
      id: 8,
      nombre: 'Atún Margarita',
      precio: 15.0,
      imagen: ['https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRx79wSbXeZYWFDxsH4_WiKztmKeIT8EDnKQw&s'],
      cantidad: 12,
      categoria: 'Enlatados',
      descripcion: 'Atún en agua, ideal para ensaladas y sándwiches.',
      presentacion: 'Lata de 185 g'
    }
  ];
 
  constructor(private router: Router){}

  irAComponente(ruta: string){
    this.router.navigate([ruta]);
  }

  addToCart(id: number){
    this.compra.push(id);
    console.log(this.compra);
  }
  deleteToCart(i: number){
    console.log(this.compra.indexOf(i)) 
    let ids = this.compra.indexOf(i);
    this.compra.splice(ids, 1);
    console.log(this.compra);
  }
}
