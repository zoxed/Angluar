import {FormBuilder, Validators } from '@angular/forms';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { Component} from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  
  form; 

  // form = new FormGroup({
  //    name: new FormControl('', Validators.required),
  //    contact: new FormGroup({
  //      email: new FormControl(),
  //      phone: new FormControl()
  //    }),
    
  //   topics: new FormArray([])
  // })
  // another approache
  constructor (fb:FormBuilder){
   this.form = fb.group({
      name:     ['',Validators.required],
      contact:  fb.group({
        email:  [],
        phone:  []
      }),
      topics: fb.array([])
    })
  }

  addTopic(topic:HTMLInputElement){
    this.topics.push(new FormControl(topic.value))
  }
  
  get topics(){
       return  this.form.get('topics') as FormArray
  }
}
