import { ConnectedOverlayPositionChange } from '@angular/cdk/overlay';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-set-up',
  templateUrl: './set-up.component.html',
  styleUrls: ['./set-up.component.scss']
})
export class SetUpComponent implements OnInit {

  @Input() childExample: string

  app = new AppComponent;
  title = this.app.title;
  course
  tee
  playerCount

  constructor() { }

  ngOnInit(): void {
    let course = JSON.parse(localStorage.getItem('courseID'))
    this.course = course
    this.tee = JSON.parse(localStorage.getItem('tee'))
    
    let playerCount = JSON.parse(localStorage.getItem('playerCount'))
    this.playerCount = playerCount
    
  }
  @Output() exampleOutput = new EventEmitter<string>()
  exampleChild: string = "al;sekdfjals;kjsadl;kfjasdl;fj";
  exampleMethodChild() {
    this.exampleOutput.emit(this.exampleChild)
  }
  courseChange(id) {
    if (id === '18300') {
      this.app.course18300()
    }
    else if (id === '11819') {
      this.app.course11819()
    }
    else if (id === '19002') {
      this.app.course19002()
    }
  }

  teeChange(id){
    if(id === 0){
      this.app.tee0()
    }
    else if(id === 1){
      this.app.tee1()
    }
    else if(id === 2){
      this.app.tee2()
    }
    else if(id === 3){
      this.app.tee3()
    }
  }

  playerCountChange(id){
    if(id === 1){
      this.app.playerCount1()
    }
    else if(id === 2){
      this.app.playerCount2()
    }
    else if(id === 3){
      this.app.playerCount3()
    }
    else if(id === 4){
      this.app.playerCount4()
    }
  }
  

}
