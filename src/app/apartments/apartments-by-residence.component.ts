import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apartment } from '../core/models/apartment.model';

@Component({
  selector: 'app-apartments-by-residence',
  templateUrl: './apartments-by-residence.component.html',
  styleUrls: ['./apartments-by-residence.component.css']
})
export class ApartmentsByResidenceComponent implements OnInit {
  residenceId!: number;
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
  filteredApartments: Apartment[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.residenceId = +params.get('residenceId')!;
      this.filteredApartments = this.apartments.filter(apartment => apartment.ResidenceId === this.residenceId);
    });
  }
}
