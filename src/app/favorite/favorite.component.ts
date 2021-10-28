import { Component, Input, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
  styles:[
    `
      .glyphicon{
    color:green;
    background-color: yellow;
      
}

    `
  ]
})


export class FavoriteComponent {

      @Input('isFavorite') isSelected: boolean = true;
      @Output('change')  click = new EventEmitter();
      
     
     
onClick() {

      this.isSelected = !this.isSelected;
      this.click.emit({newValue: this.isSelected})

        }
        

   }

export interface FavoriteChangesEventArgs{
       newValue: boolean;
  }