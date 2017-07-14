import { Component } from "@angular/core";
import { Animations } from "../common/animations.common";

@Component({
    selector: "app-home",
    templateUrl: "./home.component.html",
    styleUrls: ["./home.component.styl"],
    animations: [Animations.FLY_IN_OUT, Animations.USER_STATE]
})
export class HomeComponent {
    
}
