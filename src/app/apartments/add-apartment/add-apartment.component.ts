import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Apartment } from '../../core/models/apartment.model';

@Component({
  selector: 'app-add-apartment',
  templateUrl: './add-apartment.component.html',
  styleUrls: ['./add-apartment.component.css']
})
export class AddApartmentComponent implements OnInit {
  apartForm!: FormGroup;
  newApart!: Apartment;
  residences = [
    { id: 1, name: 'Residence A' },
    { id: 2, name: 'Residence B' },
    { id: 3, name: 'Residence C' }
  ];

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.apartForm = this.fb.group({
      apartNum: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
      floorNum: ['', [Validators.required, Validators.pattern('^[0-9]*$'), Validators.min(1)]],
      surface: ['', [Validators.required, Validators.min(1)]],
      terrace: ['yes', Validators.required],
      surfaceterrace: [''],
      category: ['S+1', Validators.required],
      ResidenceId: ['', Validators.required]
    });

    this.apartForm.get('terrace')?.valueChanges.subscribe(value => {
      if (value === 'yes') {
        this.apartForm.get('surfaceterrace')?.setValidators([Validators.required, Validators.min(1)]);
      } else {
        this.apartForm.get('surfaceterrace')?.clearValidators();
      }
      this.apartForm.get('surfaceterrace')?.updateValueAndValidity();
    });
  }

  addApartment() {
    if (this.apartForm.valid) {
      this.newApart = this.apartForm.value;
      // Logic to add the apartment
      console.log('Apartment added:', this.newApart);
      this.router.navigate(['/apartments']);
    }
  }

  resetForm() {
    this.apartForm.reset({
      apartNum: '',
      floorNum: '',
      surface: '',
      terrace: 'yes',
      surfaceterrace: '',
      category: 'S+1',
      ResidenceId: ''
    });
  }
}
