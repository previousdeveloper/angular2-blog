export class BlogService {
  
  getBlogDetails():any {

    return Zone.bindPromiseFn(fetch)('http://www.gokhankaradas.com/wp-json/posts')
      .then(function(response) {
        return response.json();
      });
  }
}
