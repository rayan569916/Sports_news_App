import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard.component';
import { NbaDashboardComponent } from './features/nba.dashboard.component/nba.dashboard.component';

export const routes: Routes = [
    { path:'',redirectTo: 'dashboard', pathMatch: 'full'},
    { path: 'dashboard', component: Dashboard },
    { path: 'nbaDashboard', component: NbaDashboardComponent }
];
