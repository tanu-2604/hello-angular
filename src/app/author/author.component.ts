import { Component, OnInit } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
   title = "Author";
  author;
  isActive = false;
  constructor(service: AuthorService) {
    this.author = service.getAuthor()
   }

  ngOnInit(): void {
  }

}
