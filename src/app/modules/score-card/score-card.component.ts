import { getLocalePluralCase } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/interfaces/course';
import { Player } from 'src/app/interfaces/player';
import { ScoreServiceService } from 'src/app/services/score-service.service';
import { AppComponent } from '../../app.component'


const COURSE_DATA: Course[] = [
  { metric: 'Yardage', hole1: null, hole2: null, hole3: null, hole4: null, hole5: null, hole6: null, hole7: null, hole8: null, hole9: null, total: null },
  { metric: 'Par', hole1: null, hole2: null, hole3: null, hole4: null, hole5: null, hole6: null, hole7: null, hole8: null, hole9: null, total: null },
  { metric: 'Handicap', hole1: null, hole2: null, hole3: null, hole4: null, hole5: null, hole6: null, hole7: null, hole8: null, hole9: null, total: null },


];

let PLAYER_DATA: Player[] = [
  { metric: null, hole1: null, hole2: null, hole3: null, hole4: null, hole5: null, hole6: null, hole7: null, hole8: null, hole9: null, total: null }, { metric: null, hole1: null, hole2: null, hole3: null, hole4: null, hole5: null, hole6: null, hole7: null, hole8: null, hole9: null, total: null }, { metric: null, hole1: null, hole2: null, hole3: null, hole4: null, hole5: null, hole6: null, hole7: null, hole8: null, hole9: null, total: null }, { metric: null, hole1: null, hole2: null, hole3: null, hole4: null, hole5: null, hole6: null, hole7: null, hole8: null, hole9: null, total: null },

]

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.scss']
})
export class ScoreCardComponent implements OnInit {
  playerData = PLAYER_DATA
  course
  tee
  playerCount
  playerCount1
  playerCount2
  playerCount3
  playerCount4
  response: any;
  constructor(private scoreService: ScoreServiceService) { }
  data: string;
  async ngOnInit() {
    let course = JSON.parse(localStorage.getItem('courseID'))
    this.course = course
    this.tee = JSON.parse(localStorage.getItem('tee'))
    
    let playerCount = JSON.parse(localStorage.getItem('playerCount'))
    this.playerCount = playerCount
    
    if (playerCount === 1) {
      this.playerCount1 = true
    }
    else if (playerCount === 2) {
      this.playerCount1 = true;
      this.playerCount2 = true;
    }
    else if (playerCount === 3) {
      this.playerCount1 = true
      this.playerCount2 = true
      this.playerCount3 = true
    }
    else if (playerCount === 4) {
      this.playerCount1 = true
      this.playerCount2 = true
      this.playerCount3 = true
      this.playerCount4 = true
    }
    await this.scoreService.getCourse(course.id).subscribe(res => {
      this.response = res;
      console.log(this.response.data.holes[1].teeBoxes[1])
      this.renderCourse()
    })
  }

  displayedColumns: string[] = ['metric', 'hole1', 'hole2', 'hole3', 'hole4', 'hole5', 'hole6', 'hole7', 'hole8', 'hole9', 'total'];
  dataSource = COURSE_DATA;

  playerDataSource = PLAYER_DATA

  renderCourse() {
    //Yardage
    COURSE_DATA[0].hole1 = this.response.data.holes[0].teeBoxes[this.tee.id].yards
    COURSE_DATA[0].hole2 = this.response.data.holes[1].teeBoxes[this.tee.id].yards
    COURSE_DATA[0].hole3 = this.response.data.holes[2].teeBoxes[this.tee.id].yards
    COURSE_DATA[0].hole4 = this.response.data.holes[3].teeBoxes[this.tee.id].yards
    COURSE_DATA[0].hole5 = this.response.data.holes[4].teeBoxes[this.tee.id].yards
    COURSE_DATA[0].hole6 = this.response.data.holes[5].teeBoxes[this.tee.id].yards
    COURSE_DATA[0].hole7 = this.response.data.holes[6].teeBoxes[this.tee.id].yards
    COURSE_DATA[0].hole8 = this.response.data.holes[7].teeBoxes[this.tee.id].yards
    COURSE_DATA[0].hole9 = this.response.data.holes[8].teeBoxes[this.tee.id].yards
    COURSE_DATA[0].total = COURSE_DATA[0].hole1 + COURSE_DATA[0].hole2 + COURSE_DATA[0].hole3 + COURSE_DATA[0].hole4 + COURSE_DATA[0].hole5 + COURSE_DATA[0].hole6 + COURSE_DATA[0].hole7 + COURSE_DATA[0].hole8 + COURSE_DATA[0].hole9
    //Par
    COURSE_DATA[1].hole1 = this.response.data.holes[0].teeBoxes[this.tee.id].par
    COURSE_DATA[1].hole2 = this.response.data.holes[1].teeBoxes[this.tee.id].par
    COURSE_DATA[1].hole3 = this.response.data.holes[2].teeBoxes[this.tee.id].par
    COURSE_DATA[1].hole4 = this.response.data.holes[3].teeBoxes[this.tee.id].par
    COURSE_DATA[1].hole5 = this.response.data.holes[4].teeBoxes[this.tee.id].par
    COURSE_DATA[1].hole6 = this.response.data.holes[5].teeBoxes[this.tee.id].par
    COURSE_DATA[1].hole7 = this.response.data.holes[6].teeBoxes[this.tee.id].par
    COURSE_DATA[1].hole8 = this.response.data.holes[7].teeBoxes[this.tee.id].par
    COURSE_DATA[1].hole9 = this.response.data.holes[8].teeBoxes[this.tee.id].par
    COURSE_DATA[1].total = COURSE_DATA[1].hole1 + COURSE_DATA[1].hole2 + COURSE_DATA[1].hole3 + COURSE_DATA[1].hole4 + COURSE_DATA[1].hole5 + COURSE_DATA[1].hole6 + COURSE_DATA[1].hole7 + COURSE_DATA[1].hole8 + COURSE_DATA[1].hole9

    //Handicap
    COURSE_DATA[2].hole1 = this.response.data.holes[0].teeBoxes[this.tee.id].hcp
    COURSE_DATA[2].hole2 = this.response.data.holes[1].teeBoxes[this.tee.id].hcp
    COURSE_DATA[2].hole3 = this.response.data.holes[2].teeBoxes[this.tee.id].hcp
    COURSE_DATA[2].hole4 = this.response.data.holes[3].teeBoxes[this.tee.id].hcp
    COURSE_DATA[2].hole5 = this.response.data.holes[4].teeBoxes[this.tee.id].hcp
    COURSE_DATA[2].hole6 = this.response.data.holes[5].teeBoxes[this.tee.id].hcp
    COURSE_DATA[2].hole7 = this.response.data.holes[6].teeBoxes[this.tee.id].hcp
    COURSE_DATA[2].hole8 = this.response.data.holes[7].teeBoxes[this.tee.id].hcp
    COURSE_DATA[2].hole9 = this.response.data.holes[8].teeBoxes[this.tee.id].hcp
    COURSE_DATA[2].total = COURSE_DATA[2].hole1 + COURSE_DATA[2].hole2 + COURSE_DATA[2].hole3 + COURSE_DATA[2].hole4 + COURSE_DATA[2].hole5 + COURSE_DATA[2].hole6 + COURSE_DATA[2].hole7 + COURSE_DATA[2].hole8 + COURSE_DATA[2].hole9



  }

  saveData() {
    console.log(this.playerData)
    PLAYER_DATA[0].total = Number(PLAYER_DATA[0].hole1) + Number(PLAYER_DATA[0].hole2) + Number(PLAYER_DATA[0].hole3) + Number(PLAYER_DATA[0].hole4) + Number(PLAYER_DATA[0].hole5) + Number(PLAYER_DATA[0].hole6) + Number(PLAYER_DATA[0].hole7) + Number(PLAYER_DATA[0].hole8) + Number(PLAYER_DATA[0].hole9)
    PLAYER_DATA[1].total = Number(PLAYER_DATA[1].hole1) + Number(PLAYER_DATA[1].hole2) + Number(PLAYER_DATA[1].hole3) + Number(PLAYER_DATA[1].hole4) + Number(PLAYER_DATA[1].hole5) + Number(PLAYER_DATA[1].hole6) + Number(PLAYER_DATA[1].hole7) + Number(PLAYER_DATA[1].hole8) + Number(PLAYER_DATA[1].hole9)
    PLAYER_DATA[2].total = Number(PLAYER_DATA[2].hole1) + Number(PLAYER_DATA[2].hole2) + Number(PLAYER_DATA[2].hole3) + Number(PLAYER_DATA[2].hole4) + Number(PLAYER_DATA[2].hole5) + Number(PLAYER_DATA[2].hole6) + Number(PLAYER_DATA[2].hole7) + Number(PLAYER_DATA[2].hole8) + Number(PLAYER_DATA[2].hole9)
    PLAYER_DATA[3].total = Number(PLAYER_DATA[3].hole1) + Number(PLAYER_DATA[3].hole2) + Number(PLAYER_DATA[3].hole3) + Number(PLAYER_DATA[3].hole4) + Number(PLAYER_DATA[3].hole5) + Number(PLAYER_DATA[3].hole6) + Number(PLAYER_DATA[3].hole7) + Number(PLAYER_DATA[3].hole8) + Number(PLAYER_DATA[3].hole9)
   
  }
}
