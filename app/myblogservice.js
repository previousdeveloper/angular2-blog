export class BlogService {

  getBlogDetails(page):any {

    return Zone.bindPromiseFn(fetch)('http://gokhankaradas.com/wp-json/posts?filter[post_status]=publish&filter[posts_per_page]=25&page='+page+'&filter[orderby]=date&filter[order]=desc')
      .then(function(response) {
        return response.json();
      });
  }
}
