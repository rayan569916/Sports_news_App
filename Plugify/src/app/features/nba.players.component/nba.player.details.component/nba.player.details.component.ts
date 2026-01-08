import { Component,OnInit } from '@angular/core';
import { Nba } from '../../../services/nba';

@Component({
  selector: 'app-nba.player.details.component',
  imports: [],
  templateUrl: './nba.player.details.component.html',
  styleUrl: './nba.player.details.component.css',
})
export class NbaPlayerDetailsComponent implements OnInit{
  constructor(private nbaService: Nba) {}

  ngOnInit(){
    this.getPlayerSummaryFromWikipedia();
    this.getPlayerMediaListFromWikipedia();
    this.getPlayerMobileSectionsFromWikipedia();
  }

  private getPlayerSummaryFromWikipedia(): any {
    this.nbaService.getPlayerSummaryFromWikipedia("LeBron_James").subscribe(res=>{
      console.log(res)
    });
  }

  private getPlayerMediaListFromWikipedia(): any {
    this.nbaService.getPlayerMediaListFromWikipedia("LeBron_James").subscribe(res=>{
      console.log(res)
    });
  }

  private getPlayerMobileSectionsFromWikipedia(): any {
    this.nbaService.getPlayerMobileSectionsFromWikipedia("LeBron_James").subscribe(res=>{
      console.log(res)
    });
  }
}
// mobile-sections
