import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../../app.component'

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  app = new AppComponent;
  title = this.app.title;
  courseID = this.app.course.id;
  courseName = this.app.course.name
  tee = this.app.tee;
  playerCount = this.app.playerCount
  

  constructor() { }

  ngOnInit(): void {
    
  }

}
