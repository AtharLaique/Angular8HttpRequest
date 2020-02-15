import { Component, OnInit } from '@angular/core';
//Step 0 import http module here
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
//Step 1 Make object of http module to use in component
  constructor(private http: HttpClient) {}

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    this.http.post('https://ang-http-9c7c1.firebaseio.com/posts',postData)
    .subscribe(res=>{
      //This subscribe Method is mendatory to send the request 
    })
  }

  onFetchPosts() {
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
}
