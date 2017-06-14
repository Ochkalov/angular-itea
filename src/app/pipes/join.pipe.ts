import { Pipe, PipeTransform } from "@angular/core";
 
@Pipe({
    name: "join"
})

export class JoinPipe implements PipeTransform {

    transform(arr: Array<any>, start?: number, end?: number): any {
        let res = arr;
        if(start !== undefined) {
            if(end !== undefined) {
                res = arr.slice(start - 1, end);
            } else {
                res = arr.slice(start - 1, res.length);
            }
        }
        return res.join(", ");
    }
}