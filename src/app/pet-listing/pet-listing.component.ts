import { Component, OnInit, OnDestroy } from '@angular/core';
import { PetService } from '../services/pet.service';
import { Subscription } from 'rxjs';
import { Pet } from '../models/pet.model';

@Component({
  selector: 'app-pet-listing',
  templateUrl: './pet-listing.component.html',
  styleUrls: ['./pet-listing.component.css']
})
export class PetListingComponent implements OnInit, OnDestroy {

  constructor(private petService: PetService) { }

  ngOnDestroy(): void {
    this.subscriptions$.forEach(sub => sub.unsubscribe());
  }
  subscriptions$: Subscription[] = [];
  pets: Pet[] = [];

  ngOnInit(): void {
    this.subscriptions$.push(this.petService._pets$.subscribe(array => {
      this.pets = array;
    }))
  }

}
