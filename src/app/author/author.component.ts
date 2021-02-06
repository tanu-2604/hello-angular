import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { AuthorService } from './author.service';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.scss']
})
export class AuthorComponent implements OnInit {
   title = "Author";
  author;
  @Input() isActive: boolean;
  @Output() change = new EventEmitter();
  constructor(service: AuthorService) {
    this.author = service.getAuthor()
   }

   onclick(){
     this.isActive = !this.isActive;
     this.change.emit()
   }
  ngOnInit(): void {
  }

}
