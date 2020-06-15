import { Directive, HostListener, Input, HostBinding } from '@angular/core';
import { PetType } from './models/pet.model';

@Directive({
  selector: '[appBackGround]'
})
export class BackGroundDirective  {

  constructor() { }


  @Input() petType: PetType;


  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  @HostListener('mouseenter') public mEnter() {
    if (this.petType === PetType.DOG) {
      this.backgroundColor = 'blue';
    } else if (this.petType === PetType.CAT) {
      this.backgroundColor = 'red';
    }
  }
}
