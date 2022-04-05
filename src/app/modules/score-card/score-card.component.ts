import { getLocalePluralCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ScoreServiceService } from 'src/app/services/score-service.service';

export interface ScoreTable {
  metric: string,
  hole1: number,
  hole2: number,
  hole3: number,
  hole4: number,
  hole5: number,
  hole6: number,
  hole7: number,
  hole8: number,
  hole9: number,
  total: number
}

export interface PlayerTable {
  name: string,
  hole1: number,
  hole2: number,
  hole3: number,
  hole4: number,
  hole5: number,
  hole6: number,
  hole7: number,
  hole8: number,
  hole9: number,
  total: number
}

const COURSE_DATA: ScoreTable[] = [
  { metric: 'Yardage', hole1: 1, hole2: 2, hole3: 3, hole4: 4, hole5: 5, hole6: 6, hole7: 7, hole8: 8, hole9: 9, total: 48 },
  { metric: 'Par', hole1: 1, hole2: 2, hole3: 3, hole4: 4, hole5: 5, hole6: 6, hole7: 7, hole8: 8, hole9: 9, total: 48 },
  { metric: 'Handicap', hole1: 1, hole2: 2, hole3: 3, hole4: 4, hole5: 5, hole6: 6, hole7: 7, hole8: 8, hole9: 9, total: 48 },


];

const PLAYER_DATA: PlayerTable[] = [
  { name: 'Collin', hole1: 1, hole2: 2, hole3: 3, hole4: 4, hole5: 5, hole6: 6, hole7: 7, hole8: 8, hole9: 9, total: 48 },

]

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {

  constructor(private CourseService: ScoreServiceService) { }

  ngOnInit(): void {
    this.CourseService.getCourse('18300').subscribe(res => {
      let response: any = res;
     console.log(response)
      })
  }

  displayedColumns: string[] = ['metric', 'hole1', 'hole2', 'hole3', 'hole4', 'hole5', 'hole6', 'hole7', 'hole8', 'hole9', 'total'];
  dataSource = COURSE_DATA;

}
