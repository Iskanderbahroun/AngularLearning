import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResidenceService } from '../../core/services/residence.service';
import { Residence } from '../../core/models/residence.model';

@Component({
  selector: 'app-add-residence',
  templateUrl: './add-residence.component.html',
  styleUrls: ['./add-residence.component.css']
})
export class AddResidenceComponent implements OnInit {
  residenceForm!: FormGroup;
  residenceId!: number;
  residence!: Residence;

  constructor(
    private fb: FormBuilder,
    private residenceService: ResidenceService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.residenceForm = this.fb.group({
      id: [{ value: '', disabled: true }],
      name: ['', [Validators.required, Validators.minLength(3)]],
      address: ['', Validators.required],
      image: ['', Validators.required],
      status: ['Disponible', Validators.required]
    });

    this.residenceId = this.route.snapshot.params['id'];
    if (this.residenceId) {
      this.residenceService.getResidenceById(this.residenceId).subscribe((data) => {
        this.residence = data;
        this.residenceForm.patchValue(this.residence);
      });
    }
  }

  onFileChange(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.residenceForm.patchValue({
        image: file
      });
    }
  }

  addResidence(): void {
    if (this.residenceForm.valid) {
      const newResidence: Residence = this.residenceForm.getRawValue();
      if (this.residenceId) {
        this.residenceService.updateResidence(this.residenceId, newResidence).subscribe(() => {
          this.router.navigate(['/residences']);
        });
      } else {
        this.residenceService.addResidence(newResidence).subscribe(() => {
          this.router.navigate(['/residences']);
        });
      }
    }
  }

  resetForm(): void {
    this.residenceForm.reset({
      id: '',
      name: '',
      address: '',
      image: '',
      status: 'Disponible'
    });
  }
}
