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
  onKeyUp(email){
    console.log(email.value)
  }
  ngOnInit(): void {
  }

}
