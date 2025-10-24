import {Component, signal, computed, resource, ChangeDetectionStrategy} from '@angular/core';
import {loadUser} from '../user-api';

// managing async data with signals,
// https://angular.dev/tutorials/signals/4-managing-async-data-with-signals

@Component({
	selector: "app-user-profile",
	imports: [],
	templateUrl: "./user-profile.html",
	styleUrl: "./user-profile.scss",
})

export class UserProfile {
	public userId = signal(1);

	public userResource = resource({
		params: () => ({ id: this.userId() }),
		loader: (item) => loadUser(item.params.id),
	});

	// Resources provide:
	// - isLoading(): true when fetching data
	// - status() signal that can be 'loading', 'success', or 'error',
	// - value() signal for the loaded data,
	// - hasValue() method that safely checks if data is available.
	// - error(): returns the thrown Error
  // - hasError()
	// - reload(): method to manually refetch
	// >> see the html
	public isLoading = computed(() => this.userResource.status() === "loading");
	public hasError = computed(() => this.userResource.status() === "error");

	public loadUser(id: number) {
		this.userId.set(id);
	}

	public reloadUser() {
		this.userResource.reload();
	}
}
