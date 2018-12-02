import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {

  @Input() post: Post;
  @Input() index: Number;

  constructor(private postService : PostService) { }

  ngOnInit() {
  }

  onLoveIt() {
    this.postService.loveIt(this.index);
  }

  onDontLoveIt() {
    this.postService.dontLoveIt(this.index);
  }

  onDeletePost() {
    this.postService.deletePost(this.index);
  }
}
