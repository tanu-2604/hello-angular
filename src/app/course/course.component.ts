import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
   title = "List of Courses";
   courses;
   imageUrl = "../../assets/imgwebp.webp";
   colSpan = 2;

  constructor(service:CourseService) { 
    
    this.courses = service.getCourse()
  }
  
  // onKeyUp(email){
  //   console.log(email.value)
  // }

  //on two way binding
// email = "me@example.com";
// onkeyup(){
//   console.log(this.email)
// }

// pipes

// course = {
//   title:"Complete course",
//   rating:4.975,
//   students:30123,
//   price:190,
//   releaseDate: new Date()
// }

// custom pipes
text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. L"


  ngOnInit(): void {
  }

}
