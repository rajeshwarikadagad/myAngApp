import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mobilePatern'
})
export class MobilePaternPipe implements PipeTransform {

  transform(value: any) {
    value = value.substring(0,4)+'-';
    return value;
  }

}
