import { trigger, animate, transition, style, query, group } from '@angular/animations';

export const slideAnimation = trigger('slideAnimation', [
    // Arrivée de la page depuis la droite
    transition('homePage => *', [
      /* order */
      /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      /* 2 */ group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
        ]
      )
    ]),
    transition('featuresPage => faqPage', [
      /* order */
      /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      /* 2 */ group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
          ], { optional: true }),
        ]
      )
    ]),

    //Arrivée de la page depuis la gauche
    transition('faqPage => homePage', [
      /* order */
      /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
      /* 2 */ group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(100%)'}))
          ], { optional: true }),
        ]
      )
    ]),
    transition('featuresPage => homePage', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
        /* 2 */ group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(100%)'}))
          ], { optional: true }),
        ]
        )
      ]),
    transition('faqPage => featuresPage', [
        /* order */
        /* 1 */ query(':enter, :leave', style({ position: 'fixed', width:'100%' })
        , { optional: true }),
        /* 2 */ group([  // block executes in parallel
          query(':enter', [
            style({ transform: 'translateX(-100%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)' }),
            animate('0.5s ease-in-out', style({ transform: 'translateX(100%)'}))
          ], { optional: true }),
        ]
        )
      ])
  ]
);
