import {Component} from "angular2/core";

@Component({
	selector: "varchar2000",
	templateUrl: "app/templates/varchar2000.html"
})

export class AppComponent {
	private currentCharsUsed: number = 0;
	private counter: number = 2000;

	private countChars(text: HTMLInputElement): void {
		let newlines: string[] = text.value.match(/(\r\n|\n|\r)/g);
        if (newlines != null) {
            this.currentCharsUsed = text.value.length + newlines.length;
        } else {
            this.currentCharsUsed = text.value.length;
		}

		this.counter = 2000 - this.currentCharsUsed;

		this.react();
	}

	/**
	 * Stolen shamelessly from Rochelle
	 **/
	private reset(): void {
		// Grab the textarea for our conveniance
		var textarea = document.getElementById("varchar2000");

		// Reset textarea colors on key up
		textarea.style.backgroundColor = "";
		textarea.style.color = "";
	}

	private react(): void {
		// Grab the elements for our conveniance
		var textarea = document.getElementById("varchar2000");
		var view = document.getElementById("view");
		// Create an array of fabulousness
		let colors: string[] = ["red", "orange", "yellow", "limegreen", "lightskyblue", "orchid"];

		let colorChance: number = 0;
		let cornChance: number = 0;

		if (this.currentCharsUsed >= 50) {
			// TODO
		}
		if (this.currentCharsUsed >= 100) {
			view.style.fontFamily = "\'Short Stack\'";
		}
		if (this.currentCharsUsed >= 200) {
			// TODO
		}
		if (this.currentCharsUsed >= 300) {
			colorChance = 10;
		}
		if (this.currentCharsUsed >= 400) {
			colorChance = 25;
		}
		if (this.currentCharsUsed >= 500) {
			textarea.className += " " + "animated infinite pulse";
			textarea.style.animationDuration = "1s";
		}
		if (this.currentCharsUsed >= 600) {
			colorChance = 50;
		}
		if (this.currentCharsUsed >= 700) {
			colorChance = 75;
		}
		if (this.currentCharsUsed >= 800) {
			colorChance = 100;
		}
		if (this.currentCharsUsed >= 900) {
			// TODO
		}
		if (this.currentCharsUsed >= 1000) {
			textarea.className += " " + "jello";
		}
		if (this.currentCharsUsed >= 1100) {
			textarea.style.animationDuration = "0.9s";
		}
		if (this.currentCharsUsed >= 1200) {
			textarea.style.animationDuration = "0.7s";
		}
		if (this.currentCharsUsed >= 1300) {
			textarea.style.animationDuration = "0.5s";
		}
		if (this.currentCharsUsed >= 1400) {
			textarea.style.animationDuration = "0.3s";
		}
		if (this.currentCharsUsed >= 1500) {
			textarea.style.animationDuration = "0.1s";
		}
		if (this.currentCharsUsed >= 1600) {
			// TODO
		}
		if (this.currentCharsUsed >= 1700) {
			cornChance = 5;
		}
		if (this.currentCharsUsed >= 1800) {
			cornChance = 10;
		}
		if (this.currentCharsUsed >= 1900) {
			cornChance = 15;
			view.style.backgroundImage = "url(app/img/bush.jpg)";
			view.style.backgroundSize = "cover";
		}
		if (this.currentCharsUsed >= 2000) {
			open("https://www.donaldjtrump.com/");
		}

		/**
		 * Apply a background color from the array of colors
		 * (Stolen shamelessly from Rochelle)
		 **/
		if ((Math.random() * 100) < colorChance) {
			textarea.style.backgroundColor=colors[Math.floor(Math.random() * colors.length)];
			textarea.style.color="white";
		}
	}
}
