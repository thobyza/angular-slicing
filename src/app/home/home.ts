import { Component, inject } from '@angular/core';
import { HousingLocation, HousingLocationInfo } from '../housing-location/housing-location'
import { HousingService } from '../housing.service'

@Component({
  selector: 'app-home',
  imports: [HousingLocation],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})

export class Home {
  public housingLocationList: HousingLocationInfo[] = [];
  public housingService: HousingService = inject(HousingService);
  
  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
