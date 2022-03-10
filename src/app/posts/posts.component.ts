import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  data:any = []
  p: number = 1;

  key = 'id';
  reverse:boolean=false;
  constructor(private _postService:PostService) { }

  ngOnInit(): void {
    this._postService.getData().subscribe(res=>{
      this.data=res;
      console.log(this.data)
    })
  }

  sort(key:string){
    this.key = key;
    this.reverse=!this.reverse;
  }

}
