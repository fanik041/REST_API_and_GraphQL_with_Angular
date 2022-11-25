import { HttpClient, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { AppServiceService } from './app-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit{

  fields: any;
  urls: any;

  constructor(private appService: AppServiceService){
    
  }
  ngOnInit(): void {
      
  }
  
  loadData(){
    this.appService.getPosts().subscribe((response: any) => {
      console.log(response);
      this.fields = response.fields;
      this.urls = response.urls;
    });
  }

  posts: any[] = [];

  // loadPosts(){
  //   this.http
  //   .get('https://cdn.contentful.com/spaces/8utyj17y1gom/entries?access_token=e50d8ac79fd7a3545d8c0049c6a1216f5d358a192467c77584eca6fad21e0f37&content_type=pageTemplate&include=1&fields.url=%2Fhome%2Fsupport')
  //   // .get('https://jsonplaceholder.typicode.com/posts')
  //   .pipe(
  //     map((data: any) => data.items),
  //     catchError(error => { return throwError('Error') }))
  // .subscribe((posts: any[]) => {
  //     this.posts = posts;
  //   // .subscribe((posts: any[])=>{
  //   //   this.posts = posts;
  //     console.log(posts);
  //   //   // console.log(response);
  //   });


  //   // loadPosts(){
  //   //   this.http
  //   //   .get('https://cdn.contentful.com/spaces/8utyj17y1gom/entries?access_token=e50d8ac79fd7a3545d8c0049c6a1216f5d358a192467c77584eca6fad21e0f37&content_type=pageTemplate&include=1&fields.url=%2Fhome%2Fsupport')
  //   //   // .get('https://jsonplaceholder.typicode.com/posts')
  //   //   .subscribe((response) => {
  //   //     console.log(response);
  //   //   });
  // }
}
