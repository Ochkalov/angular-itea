import { trigger, state, style, animate, transition } from "@angular/animations";

export namespace Animations {
  export const FLY_IN_OUT: any = trigger("flyInOut", [
    state("inactive", style({transform: "translateX(0)"})),
    transition("void => *", [
      style({transform: "translateX(-100%)"}),
      animate(300)
    ]),
    transition("* => void", [
      animate(300, style({transform: "translateX(100%)"}))
    ])
  ]);

  export const USER_STATE: any = trigger("userState", [
    state("inactive", style({
      backgroundColor: "#eee",
      transform: "scale(1)"
    })),
    state("active",   style({
      backgroundColor: "#cfd8dc",
      transform: "scale(1.1)"
    })),
    transition("inactive => active", animate("300ms ease-in")),
    transition("active => inactive", animate("300ms ease-out"))
  ])
}
