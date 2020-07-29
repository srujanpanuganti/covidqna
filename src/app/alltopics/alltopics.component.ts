import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-alltopics',
  templateUrl: './alltopics.component.html',
  styleUrls: ['./alltopics.component.css']
})
export class AlltopicsComponent implements OnInit {

  constructor(private httpClient: HttpClient) { }
  topics;
  ngOnInit(): void {
    this.httpClient.get("assets/questions.json").subscribe(data =>{
      console.log(data);
      this.topics = data;
    })
  }

}
