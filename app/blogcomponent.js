import {
  ComponentAnnotation as Component,
  ViewAnnotation as View, bootstrap, NgFor
}
from 'angular2/angular2';

import {
  BlogService
}
from 'myblogservice';

@
Component({
  selector: 'my-component',
  appInjector: [BlogService]

})

@ View({
  templateUrl: 'blog.html',
  directives: [NgFor]

})

export class BlogComponent {

  githubUrl:string;

  constructor(blogService: BlogService) {

    this.blogService = blogService;
    this.blogService.getBlogDetails().then((response) => {
      this.blogResponse = response;
    });
    this.githubUrl ="http://www.github.com/previousdeveloper"
  }


}
