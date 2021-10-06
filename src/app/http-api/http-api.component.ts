import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css']
})
export class HttpApiComponent implements OnInit {

  constructor(private http: HttpClient) { }

  posts;
  url : string = 'https://jsonplaceholder.typicode.com/posts';

  ngOnInit(): void {
    this.http.get(this.url).subscribe(
      response => {
       this.posts = response;
      }
    );
  }

  CreatePost(input: HTMLInputElement){
      let post = {title : input.value , id:"" ,body: "TEST"};
    this.http.post(this.url , JSON.stringify(post))
    .subscribe(response =>{
      this.posts.push(post);
      // this.posts.splice(0,0,post);
    });
  }

    UpdatePost(post,InputPost){
      let Updatepost = {title : InputPost , id:post.id , body:post.body  };
      this.http.put(this.url + '/' + post.id , JSON.stringify(Updatepost)).subscribe(response =>{
        let index =  this.posts.indexOf(post);
        this.posts[index] =Updatepost;
    });
  }

}
