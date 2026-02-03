import { Component } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent {

  posts = [
    {
      title: 'Community Update',
      description: 'Recent announcements and activities shared with members of the community.'
    },
    {
      title: 'New Features Released',
      description: 'We’ve added improvements to make the platform faster, cleaner, and easier to use.'
    },
    {
      title: 'Weekly Highlights',
      description: 'A recap of the most important updates and discussions from this week.'
    }
  ];

  deletePost(index: number) {
    this.posts.splice(index, 1);
  }
}