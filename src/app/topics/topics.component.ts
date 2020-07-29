import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.css']
})
export class TopicsComponent implements OnInit {

  constructor(private route: ActivatedRoute,private httpClient: HttpClient) { }
  questions;
  title;
  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      console.log(params.id);
      this.httpClient.get("assets/questions.json").subscribe(data =>{
        this.questions = data[params.id].questions;
        this.title = data[params.id].title;
        console.log(this.questions);
        
      })
      
    })
  }

}
