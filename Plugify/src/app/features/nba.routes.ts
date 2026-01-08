import { NbaDashboardComponent } from "./nba.dashboard.component/nba.dashboard.component";
import { NbaPlayersComponent } from "./nba.players.component/nba.players.component";
import { NbaTeamsComponent } from "./nba.teams.component/nba.teams.component";
import {NbaPlayerDetailsComponent} from  './nba.players.component/nba.player.details.component/nba.player.details.component';
import { Routes } from '@angular/router';



export const nbaRoutes:  Routes = [
    { path: '', redirectTo: 'nbaDashboard', pathMatch: 'full' },
    { path: 'nbaDashboard', component: NbaDashboardComponent },
    { path: 'nbaPlayerList', component: NbaPlayersComponent},
    { path:'nbaPlayerList/:playerId', component: NbaPlayerDetailsComponent},
    { path: 'nbaTeamDetail', component: NbaTeamsComponent }
];