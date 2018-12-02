import { Subject } from 'rxjs';

export class PostService {

  postSubject = new Subject<any[]>();

  private posts = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus blandit fermentum. Sed commodo efficitur risus vel semper. Duis id congue lorem. Cras volutpat vestibulum interdum. Phasellus felis turpis, vehicula in pretium vitae, faucibus vitae libero. Maecenas sit amet odio eu nibh tincidunt bibendum vitae ac mi.',
      loveIts: 1,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus blandit fermentum. Sed commodo efficitur risus vel semper. Duis id congue lorem. Cras volutpat vestibulum interdum. Phasellus felis turpis, vehicula in pretium vitae, faucibus vitae libero. Maecenas sit amet odio eu nibh tincidunt bibendum vitae ac mi.',
      loveIts: -1,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras maximus blandit fermentum. Sed commodo efficitur risus vel semper. Duis id congue lorem. Cras volutpat vestibulum interdum. Phasellus felis turpis, vehicula in pretium vitae, faucibus vitae libero. Maecenas sit amet odio eu nibh tincidunt bibendum vitae ac mi.',
      loveIts: 0,
      created_at: new Date()
    }
  ];

  emitPosts() {
    this.postSubject.next(this.posts.slice());
  }

  loveIt(i) {
    this.posts[i].loveIts++;

    this.emitPosts();
  }

  dontLoveIt(i) {
    this.posts[i].loveIts--;

    this.emitPosts();
  }

  /* Ajout d'un nouveau poste */
  addPost(title, content) {
    const newPost = {
      title: '',
      content: '',
      loveIts: 0,
      created_at: new Date()
    };

    newPost.title = title;
    newPost.content = content;
    this.posts.push(newPost);

    this.emitPosts();
  }

  /* Suppression d'un poste */
  deletePost(i) {
    this.posts.splice(i, 1);

    this.emitPosts();
  }
}
