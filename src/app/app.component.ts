import { Component, Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class AppComponent {
  exampleMethodParent($event) {
    this.exampleParent = $event
  }
  
  ngOnInit(): void {
    let tempCourse = localStorage.getItem('courseID')
    this.course = JSON.parse(tempCourse)
    this.tee = JSON.parse(localStorage.getItem('tee'))
    this.playerCount = JSON.parse(localStorage.getItem('playerCount'))
  }
  
  title = 'AngularGolfApp';
  course = { id: '18300', name: "Fox Hollow" }
  tee
  playerCount = 0
  parentExample: string = "Hello Angular 7"
  exampleParent: string;


  course18300() {
    this.course = { id: '18300', name: "Fox Hollow" }
    console.log(this.course)
    localStorage.setItem('courseID', JSON.stringify(this.course))

  }
  course11819() {
    this.course = { id: '11819', name: "Spanish Oaks" }
    console.log(this.course)
    localStorage.setItem('courseID', JSON.stringify(this.course))


  } course19002() {
    this.course = { id: '19002', name: "Thanksgiving Point" }
    console.log(this.course)
    localStorage.setItem('courseID', JSON.stringify(this.course))

  }

  tee0() {
    this.tee = {id: 0, name: "Pro"}
    localStorage.setItem('tee', JSON.stringify(this.tee))
  }
  tee1() {
    this.tee = {id: 0, name: "Champion"}
    localStorage.setItem('tee', JSON.stringify(this.tee))

  }
  tee2() {
    this.tee = {id: 0, name: "Men's"}
    localStorage.setItem('tee', JSON.stringify(this.tee))

  }
  tee3() {
    this.tee = {id: 0, name: "Women's"}
    localStorage.setItem('tee', JSON.stringify(this.tee))

  }

  playerCount1(){
this.playerCount = 1
localStorage.setItem('playerCount', JSON.stringify(this.playerCount))

  }
  playerCount2(){
this.playerCount = 2
localStorage.setItem('playerCount', JSON.stringify(this.playerCount))

    
  }
  playerCount3(){
this.playerCount = 3
localStorage.setItem('playerCount', JSON.stringify(this.playerCount))

    
  }
  playerCount4(){
this.playerCount = 4
localStorage.setItem('playerCount', JSON.stringify(this.playerCount))

    
  }
}
