import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ScoreServiceService {

  constructor(private _http: HttpClient) { }

  getCourse(course: string){
    let url: string = `https://golf-courses-api.herokuapp.com/courses/${course}`;
    return this._http.get(url);
  }
}
