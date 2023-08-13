import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDToEGP'
})
export class USDToEGPPipe implements PipeTransform 
{

  transform(value: number, rate: number): number 
  {
    return value * rate;
  }

}
