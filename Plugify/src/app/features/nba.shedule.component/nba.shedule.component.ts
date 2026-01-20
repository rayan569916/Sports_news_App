import { Component,OnInit } from '@angular/core';
import { Nba } from '../../services/nba';
import { Observable } from 'rxjs';
import { NbaSummary, events } from '../interface';

@Component({
  selector: 'app-nba.shedule.component',
  imports: [],
  templateUrl: './nba.shedule.component.html',
  styleUrl: './nba.shedule.component.css',
})
export class NbaSheduleComponent implements OnInit{
  constructor(private service:Nba){}

  nbaSummary:any|NbaSummary={}
  nbaEvent:events[]=[]

  ngOnInit(){
    this.loadSummaryData();
  }

  loadSummaryData(){
    this.service.getNbaSummary().subscribe(res=>{
      this.nbaSummary=res
      this.nbaEvent=this.nbaSummary.events;
    })
  }

}
