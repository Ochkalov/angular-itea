import { Pipe, PipeTransform } from "@angular/core";
 
@Pipe({
    name: "factorial"
})

// Exported pipe's class always implements PipeTransform
export class FactorialPipe implements PipeTransform {
  
    transform(value: number, args?: any): number {
        if(value <= 0) return 0;
    
        let res = 1;
        for(let i: number = 1; i <= value; i++){
            res = res * i;
        }
        return res;
    }
}