import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hell';

  post ={
    title :"tanu",
    isActive : true
  }

  onActive(){
    console.log("sab kuc active hai")
  }
}
