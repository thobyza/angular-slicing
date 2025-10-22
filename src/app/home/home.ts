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
  public filteredLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((item: HousingLocationInfo[]) => {
        this.housingLocationList = item;
        this.filteredLocationList = item;
      })
  }

  public filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return
    }

    this.filteredLocationList = this.housingLocationList.filter((item) => 
      item?.city.toLowerCase().includes(text.toLowerCase())
    )
  }

}
