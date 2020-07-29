import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  questions;
  ngOnInit(): void {
    this.httpClient.get("assets/questions.json").subscribe(data =>{
      console.log(data);
      this.questions = data;
    })
  }

}
