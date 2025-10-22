
import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule } from "@angular/forms";
import { HousingService } from "../housing.service";
import { HousingLocationInfo } from "../housing-location/housing-location";

@Component({
	selector: "app-details",
	imports: [ReactiveFormsModule],
	templateUrl: "./details.html",
	styleUrls: ["./details.scss"],
})

export class Details {
	public route: ActivatedRoute = inject(ActivatedRoute);
	public housingService = inject(HousingService);
	public housingLocation: HousingLocationInfo | undefined;

	public applyForm = new FormGroup({
		firstName: new FormControl(''),
		lastName: new FormControl(''),
		email: new FormControl(''),
	});

	constructor() {
		const housingLocationId = Number(this.route.snapshot.params["id"]);
		this.housingService.getHousingLocationById(housingLocationId).then((item) => {
      this.housingLocation = item;
    });
	}

  public submitApplication() {
    this.housingService.submitApplication(
			this.applyForm.value.firstName ?? "",
			this.applyForm.value.lastName ?? "",
			this.applyForm.value.email ?? ""
		);
  }

}
