import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  posts = [
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

  
}
