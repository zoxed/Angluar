import { Component } from "@angular/core";
// import { CoursesService } from "./course.service";




@Component({
    selector: 'courses',
    template: `
    <input/>
                
    `
})





export class CourseComponent{

        onFavoriteChange(){
        }
   
}


      
  // service injection exemple : 

      //   courses:any

    // constructor(service: CoursesService){
    //     this.courses = service.getCourses()
    // }

//   onSave($event:any){
//         $event.stopPropagation();
//         console.log('button was clicked', $event)
//     }

//     onDivClicked(){
//         console.log('Div was clicked')
//     }
