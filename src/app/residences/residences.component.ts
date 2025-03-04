import { Component, OnInit } from '@angular/core';
import { Residence } from '../core/models/residence.model';
import { ResidenceService } from '../core/services/residence.service';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css'],
})
export class ResidencesComponent implements OnInit {
  address: string = '';
  adress: string = '';
  date: Date = new Date();
  listFavorite: Residence[] = [];
  listFiltred: Residence[] = [];
  listResidences: Residence[] = [];
  filteredResidences: Residence[] = [];

  constructor(private residenceService: ResidenceService) {}

  ngOnInit(): void {
    this.getResidences();
  }

  getResidences(): void {
    this.residenceService.getResidences().subscribe((residences) => {
      this.listResidences = residences;
      this.filteredResidences = residences;
    });
  }

  showLocation(address: string) {
    if (address === 'inconnu') {
      return alert("l'adresse est inconnue");
    } else {
      return alert("l'adresse est  " + address);
    }
  }

  addToFavorite(res: Residence) {
    if (!this.listFavorite.includes(res)) {
      this.listFavorite.push(res);
      alert(`Residence ${res.name} added to favorites successfully!`);
    } else {
      alert(`Residence ${res.name} is already in favorites.`);
    }
  }

  filterByAdress() {
    return this.listResidences.filter(res =>
      res.address.toLowerCase().includes(this.adress.toLowerCase())
    );
  }

  searchResidences(): void {
    this.filteredResidences = this.listResidences.filter(residence => 
      residence.name.toLowerCase().includes(this.adress.toLowerCase()) ||
      residence.address.toLowerCase().includes(this.adress.toLowerCase())
    );
  }

  getCountByStatus(status: string): number {
    return this.listResidences.filter(residence => residence.status === status).length;
  }

  getCountByAddress(address: string): number {
    return this.listResidences.filter(residence => residence.address === address).length;
  }

  deleteResidence(id: number): void {
    this.residenceService.deleteResidence(id).subscribe(() => {
      this.listResidences = this.listResidences.filter(res => res.id !== id);
      this.filteredResidences = this.filteredResidences.filter(res => res.id !== id);
    });
  }
}
