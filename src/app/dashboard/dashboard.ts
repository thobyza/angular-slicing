import { Component, signal, resource, ChangeDetectionStrategy, computed, linkedSignal } from '@angular/core';

@Component({
	selector: "app-dashboard",
	imports: [],
	templateUrl: "./dashboard.html",
	styleUrls: ["./dashboard.scss"],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Dashboard {
	public userStatus = signal<"online" | "offline" | "away">("offline");

	// > computed signal : “derive a new value from other signals”
	// > its read-only, you can’t set it manually, automatically updates when its dependencies change.
	// public notificationsEnabled = computed(() => this.userStatus() === 'online');

	// > linked signal : “a two-way reactive bridge”
	// > you can read and overwrite, useful when you need two-way data flow.
	public notificationsEnabled = linkedSignal(
		() => this.userStatus() === "online"
	);

	public goOnline() {
		this.userStatus.set("online");
	}

	public goOffline() {
		this.userStatus.set("offline");
	}

	public goAway() {
		this.userStatus.set("away");
	}

	public toggleStatus() {
		this.userStatus.update((current) =>
			current === "online" ? "offline" : "online"
		);
	}

	// function support linked signal
	public toggleNotifications() {
		this.notificationsEnabled.set(!this.notificationsEnabled());
	}

	public statusMessage = computed(() => {
		const status = this.userStatus();

		switch (status) {
			case "online":
				return "Available for meetings and messages";
			case "away":
				return "Temporarily away, will respond soon";
			case "offline":
				return "Not available, check back later";
			default:
				return "Status unknown";
		}
	});

	public isWithinWorkingHours = computed(() => {
		const now = new Date();
		const hour = now.getHours();
		const isWeekday = now.getDay() > 0 && now.getDay() < 6;

		return (
			isWeekday && hour >= 9 && hour < 17 && this.userStatus() !== "offline"
		);
	});
}
