import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { UserProfile } from '../../interfaces/user-profiles';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [HeaderComponent, MatButtonModule, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class DashboardComponent {
  user: UserProfile = {
    name: 'Gino',
    phone: '0412-2698503',
    email: 'ginomartinez@gmail.com',
    cedula: '32575690',
    sells: [],
    role: 'admin',
    comission: 5000,
    tax: 0,
    image: 'https://api.cadif1.com//alumno/foto/34455/0/1'
  }

}