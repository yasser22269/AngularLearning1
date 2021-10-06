import { AbstractControl, ValidationErrors, ValidatorFn  } from "@angular/forms"


 export class Testvalidator{
  static noSpaceAllowed(controll: AbstractControl) : ValidationErrors | null
  {
    //console.log((controll.value as string).indexOf(' '));
      if((controll.value as string).indexOf(' ')  != -1){
        return {'noSpaceAllowed' : true} ;
      }else{
        return (null);

      }
  }
}
