import { Component } from '@angular/core';
import { Post } from './posts/model/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  storedPosts: Post[] = []

  onPostAdded(post) {
    this.storedPosts.push(post);
  }
}
