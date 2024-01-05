import { Routes } from '@angular/router';
import {AccountComponent} from "./main-features/private/account/account.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, //default route
  { path: 'home', component: AccountComponent },
];
