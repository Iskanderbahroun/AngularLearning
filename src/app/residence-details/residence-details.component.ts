import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../core/services/residence.service';
import { Residence } from '../core/models/residence.model';

@Component({
  selector: 'app-residence-details',
  templateUrl: './residence-details.component.html',
  styleUrls: ['./residence-details.component.css']
})
export class ResidenceDetailsComponent implements OnInit {
  residence!: Residence;
  residences: Residence[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private residenceService: ResidenceService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.residenceService.getResidenceById(id).subscribe((data) => {
      this.residence = data;
    });

    this.residenceService.getResidences().subscribe((data) => {
      this.residences = data;
    });
  }

  nextResidence(): void {
    const currentIndex = this.residences.findIndex(res => res.id === this.residence.id);
    const nextIndex = (currentIndex + 1) % this.residences.length;
    const nextResidenceId = this.residences[nextIndex].id;
    this.router.navigate(['/details', nextResidenceId]);
  }
}
