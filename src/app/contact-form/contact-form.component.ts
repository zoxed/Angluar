import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id: 1, name:'Microsoft'},
    {id: 2, name:'Google'},
    {id: 3, name:'Yahoo'},
  ]

log(x:any) {
  console.log(x);
}
submit(f:any){
  console.log(f)
}
}
