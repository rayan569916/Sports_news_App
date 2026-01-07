import { Component } from '@angular/core';
import { Nba } from '../../services/nba';

@Component({
  selector: 'app-nba.dashboard.component',
  standalone: true, 
  imports: [],
  templateUrl: './nba.dashboard.component.html',
  styleUrl: './nba.dashboard.component.css',
})
export class NbaDashboardComponent {
  playerDetails = [];
  constructor(private nbaService: Nba){}

  ngOnInit(){
    // this.getPlayerDetails()
  }
  getPlayerDetails(){
    this.nbaService.getPlayerDetails().subscribe(res=>{
      this.playerDetails=res.data;
    })
  }
}
