import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent {

  arrays : string[] = ["A","B","C","D"];


 PushItem(item){
   this.arrays.push(item.value);
   item.value ="";
  }

  RemoveItem(item){
    let index =  this.arrays.indexOf(item);
    console.log(item);
    this.arrays.splice(item,1);
  }

  trackByItems(item){
    return item ? item : undefined;
  }

  setViewValue = "courses";
  Setview(setView){
      this.setViewValue = setView;
  }
}
