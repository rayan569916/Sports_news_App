import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    {
        path: 'nba', loadChildren: ()=>
            import('./features/nba.routes').then(m=>m.nbaRoutes)
    }
];
