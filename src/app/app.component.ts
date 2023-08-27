import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
interface Alert {
	type: string;
	message: string;
}

const ALERTS: Alert[] = [
	{
		type: 'success',
		message: 'This is an success alert',
	},
	{
		type: 'info',
		message: 'This is an info alert',
	},
	{
		type: 'warning',
		message: 'This is a warning alert',
	},
	{
		type: 'danger',
		message: 'This is a danger alert',
	},
	{
		type: 'primary',
		message: 'This is a primary alert',
	},
	{
		type: 'secondary',
		message: 'This is a secondary alert',
	},
	{
		type: 'light',
		message: 'This is a light alert',
	},
	{
		type: 'dark',
		message: 'This is a dark alert',
	},
];

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
	title = {
		name: "Darpan",
		age: 14
	};
	show = true;
	alerts: Alert[] = [];

	constructor() {
		this.reset();
	}

	close(alert: Alert) {
		this.alerts.splice(this.alerts.indexOf(alert), 1);
	}

	reset() {
		this.alerts = Array.from(ALERTS);
	}

	onSubmit(value: any) {
		console.log(value);
	}
	formatLabel(value: number): string {
		if (value >= 1000) {
			return Math.round(value / 1000) + 'k';
		}
		return `${value}`;
	}
	parentComponent(data: any){
		console.log(data);
	}
}
