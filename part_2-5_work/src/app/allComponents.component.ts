import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post, Query } from './types';

@Component({
  selector: 'app-list',
  template: `
    Posts
    <ul>
      <li *ngFor="let post of (posts | async)">
        {{ post.title }} by {{ post.author.firstName }}
        {{ post.author.lastName }} ({{ post.votes }} votes)
        <app-upvoter [postId]="post.id"></app-upvoter>
      </li>
    </ul>
  `,
})
export class ListComponent implements OnInit {
  posts: Observable<Post[]>;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.posts = this.apollo
      .watchQuery<Query>({
        query: gql`
        query{
            pageTemplateCollection{
              items{
                seo{
                  entryTitle
                  title
                  description
                  isNoIndex
                }    
              }
            }
            pageCategoryCollection{
              items{
                entryTitle
                url
                name
                parent{
                  name
                  entryTitle
                  parent{
                    name
                  }
                }
                
              }
            }
          }
          `,
      })
      .valueChanges.pipe(map((result) => result.data.posts));
  }
}
