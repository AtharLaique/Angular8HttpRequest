import { Component, OnInit } from '@angular/core';
//Step 0 import http module here
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Post } from './post.model';

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
    this.http.post("https://ang-http-9c7c1.firebaseio.com/post.json",postData)
    .subscribe(res=>{
      //This subscribe Method is mendatory to send the request
      console.log(res) 
    })
  }

  onFetchPosts() {
    // Send Http request
    this.http.get("https://ang-http-9c7c1.firebaseio.com/post.json")
    .pipe(map(res=>{
      const postArray=[];
      for (const key in res){
        if(res.hasOwnProperty(key)){
          postArray.push({...res[key] , id:key})
        }
      }
      return postArray;
    }))
    .subscribe(data=>{
      console.log(data)
    })
  }

  onClearPosts() {
    // Send Http request
  }
}
