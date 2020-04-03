import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post.model';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  postContent: string;

  constructor(private route: ActivatedRoute, private postService: PostService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      console.log(`Loading post ${id}`);
      this.postService.getPost(id).subscribe(result => {
        this.postContent = result;
      });
    });
  }

}
