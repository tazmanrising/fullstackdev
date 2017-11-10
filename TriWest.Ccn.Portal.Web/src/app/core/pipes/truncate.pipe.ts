import { Pipe } from '@angular/core'

@Pipe({
  name: 'truncate'
})
export class TruncatePipe {
  transform(value: string, args: string): string {
    let limit = parseInt(args);
    console.log('limit', limit);
    let trail = args.length > 1 ? args : '...';
    let ret = value.length > limit ? value.substring(0, limit) + trail : value;
    console.log(ret);
    return ret;
  }
}



