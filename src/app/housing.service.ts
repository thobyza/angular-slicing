import { Injectable } from '@angular/core';
import { HousingLocationInfo } from './housing-location/housing-location'

@Injectable({
  providedIn: 'root'
})

export class HousingService {
  public url = 'http://localhost:3000/locations';

  public async getAllHousingLocations(): Promise<HousingLocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  public async getHousingLocationById(id: number): Promise<HousingLocationInfo | undefined> {
    const data = await fetch(`${this.url}?id=${id}`);
    
    const locationJson = await data.json();

    return locationJson[0] ?? {};
  }

  public submitApplication(firstName: string, lastName: string, email: string) {
     console.log(
			`Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`
		);
  }
}
