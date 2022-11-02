import { animate, style, transition, trigger } from "@angular/animations";

//gatilho do angular animations através da função trigger
export const fade = trigger(
    'fade', //nome da animação
    //abaixo a animação recebe um array de todas as transições que queremos aplicar
    [
        //inicio da transição
        transition(
            ':enter', //define que trata-se de uma transição de entrada
            [
                //estilo aplicado na animação
                style({ opacity: 0 }),
                animate(500, style({ opacity: 1 }))
            ],
        ),
        transition(
            ':leave', //define que trata-se de uma transição de saída
            [
                //estilo aplicado na animação, sem necessidade de informar estilo inicial, já que temos um valor aplicado de entrada
                animate(500, style({ opacity: 0 }))
            ],
        )
    ]
);