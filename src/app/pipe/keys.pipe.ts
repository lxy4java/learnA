import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'keys'
})
export class KeysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
     if (typeof(value) !== 'object')
            throw 'keysPipe value must be object';

        return Object.keys(value);
  }

}
/*****pipe 是过滤器， 该过滤器接受一个 对象 并把对象的 键 输出为字符数组 */