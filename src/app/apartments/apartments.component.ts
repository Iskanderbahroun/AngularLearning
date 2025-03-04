import { Component } from '@angular/core';
import { Apartment } from '../core/models/apartment.model';

@Component({
  selector: 'app-apartments',
  templateUrl: './apartments.component.html',
  styleUrls: ['./apartments.component.css']
})
export class ApartmentsComponent {
  apartments: Apartment[] = [
    {
      apartNum: 101,
      floorNum: 1,
      surface: 75,
      terrace: true,
      surfaceterrace: 10,
      category: 'Luxury',
      ResidenceId: 1
    },
    {
      apartNum: 102,
      floorNum: 1,
      surface: 80,
      terrace: false,
      surfaceterrace: 0,
      category: 'Standard',
      ResidenceId: 1
    },
    // Add more apartments as needed
  ];
}
