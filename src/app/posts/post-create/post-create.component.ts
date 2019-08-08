import { Component, OnInit } from '@angular/core';
import { Post } from '../model/post';
import { NgForm } from '@angular/forms';
import { PostsService } from '../service/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
  enteredContent = "";
  enteredTitle = "";

  constructor(public postsService: PostsService) { }

  ngOnInit() {
  }

  // add post 
  onAddPost(form: NgForm) {

    if (form.invalid) {
      return;
    }
    const post: Post = {
      title: form.value.title,
      content: form.value.content
    };
    this.postsService.addPost(form.value.title, form.value.content);
  }
}
