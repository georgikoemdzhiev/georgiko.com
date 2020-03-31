import { Component, OnInit } from '@angular/core';
import { Post } from '../posts/post.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  id: string;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {

    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.id = id;
      console.log(`Loading post ${id}`);
      // this.post = ???;
      // TODO create PostService and retrieve to the post from Assets
    });
  }

}
