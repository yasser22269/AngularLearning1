import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summryPipes'
})
export class SummryPipe implements PipeTransform {

  transform(value: string, limit?:number): unknown {
    if(! value)
    return null;
    let limitString = (limit) ? limit : 30;
    return value.substr(0,limitString) + "....";
  }

}
