import { animation, state, style, trigger, transition, animate } from '@angular/animations';

export const expandCollapse=  trigger('expandCollapse',[
    state('collapsed',style({
      height:0,
      paddingTop:0,
      paddingBottom:0,
      opacity:0
    })),
    // state('expanded',style({
    //   height:'*',                  //NR
    //   padding:'*',
    //   overflow:'auto'
    // })),

    transition('collapsed=>expanded',[
      animate('300ms ease-out',style({
        height:'*',
        paddingTop:0,
        paddingBottom:0,
      })),
      animate('1s',style({opacity:1}))
    ]),
    transition('expanded=>collapsed',[
      animate('300ms ease-in')
    ])
    ])