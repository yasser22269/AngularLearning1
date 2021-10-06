import { Component ,EventEmitter,Input, Output} from '@angular/core';

@Component({
  selector: 'app-xyz',
  templateUrl: './xyz.component.html',
  styleUrls: ['./xyz.component.css'],
  // Input : ["isFullHeart"]
})
export class XyzComponent {
  divClicked(){
    alert("divClicked");
  }
  //: { stopPropagation: () => void; }
  buttonClicked($event){
    $event.stopPropagation();
    alert("buttonClicked  without divClicked");
  }

  showKeyup;
  keyup($event){
    // without keyup.enter
    // if($event.keyCode == 13)
    //   alert("Enter To show alert");

    alert("MY Name is "+$event.target.value);
    this.showKeyup = $event.target.value;
  }
  showKeyup2;
  keyup2($t){

    alert("MY Name is "+$t);
    this.showKeyup2 = $t;

  }

  showKeyup3;
  keyup3($t){

    alert("MY Name is "+$t);
    this.showKeyup3 = $t;

  }

 //@Input('isFullHeart') isFullHeart = true;
   // @Output() change = new EventEmitter();


  isFullHeart = true;
  isFullHeartClick(){
    if(this.isFullHeart == false){
      this.isFullHeart = true;

    }else{
      this.isFullHeart =false;
    }


  //  this.change.emit();
  }



  //PIPES

  SummryTitle = "This small app is perfect for anyone starting to get to grips with JavaScript. The calculator functionality will be a nice test!"
  NameY = "Yasser Abd Elghany"

}

