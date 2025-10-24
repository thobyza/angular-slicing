import {Routes} from '@angular/router';
import {Home} from './home/home';
import {Details} from './details/details';
import {Dashboard} from './dashboard/dashboard';
import {UserProfile} from './user-profile/user-profile'
import {Products} from './products/products'

const routeConfig: Routes = [
	{
		path: "",
		component: Home,
		title: "Home Page",
	},
	{
		path: "details/:id",
		component: Details,
		title: "Home Details",
	},
	{
		path: "dashboard",
		component: Dashboard,
		title: "User Dashboard",
	},
	{
		path: "user-profile",
		component: UserProfile,
		title: "User Profile",
	},
	{
		path: "products",
		component: Products,
		title: "Product Page",
	},
];

export default routeConfig;