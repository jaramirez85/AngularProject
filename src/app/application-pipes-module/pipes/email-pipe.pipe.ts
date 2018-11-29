import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emailPipe'
})
export class EmailPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let text = "email:";
    return text + value;
  }

}
