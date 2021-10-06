import { AbstractControl, ValidationErrors, ValidatorFn  } from "@angular/forms"

 export class uniqunessValidator{
  static checkuniquness(controll: AbstractControl) : Promise<ValidationErrors | null>
  {
    return new Promise((resolve,reject) =>{
      setTimeout(()=>{
        if(controll.value == "yasser.m22291@gmail.com"){
          resolve ({checkuniquness : true} );
        }
        else{
          resolve (null);
        }
      },2000)

    })

  }
}
