import { Component, input } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

export interface HousingLocationInfo {
  id: number,
  name: string,
  city: string,
  state: string,
  photo: string,
  availableUnits: number,
  wifi: boolean,
  laundry: boolean
} 

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule, RouterLink],
  templateUrl: './housing-location.html',
  styleUrls: ['./housing-location.scss'],
})

export class HousingLocation {
  housingLocation = input.required<HousingLocationInfo>();
}
