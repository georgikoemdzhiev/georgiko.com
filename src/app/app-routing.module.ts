import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostsComponent } from './posts/posts.component';
import { NotFoundComponent } from './not-found/not-found.component';


const routes: Routes = [
  { path: 'post/:id', component: PostDetailComponent, pathMatch: 'full' },
  { path: '', component: PostsComponent, pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
