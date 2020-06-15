import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PetService } from '../services/pet.service';
import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  addForm: FormGroup;
  

  constructor(private petService: PetService) { }


  ngOnInit(): void {
    this.addForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      type: new FormControl(null, [Validators.required, Validators.min(1), Validators.max(2)]),
      description: new FormControl(null, [Validators.required, Validators.maxLength(200)]),
    })
  }

  onSaveChanges() {
    let pet: Pet = {
      name: this.addForm.getRawValue().name,
      type: this.addForm.getRawValue().type,
      description: this.addForm.getRawValue().description
    }
    this.petService.add(pet);
  }

}
