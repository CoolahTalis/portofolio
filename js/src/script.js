(function($) {

//     let variable; // portée de block
//     var variable2; // portée de fonction

//     //type de valeur d'une variable
//     string
//     integer
//     boolean
//     Object
//     Array

//     if(variable)// sans accolade le if n'accepte qu'une seule condition. et valide la suivante
    
//         console.log(variable); // ne sera pas affiché
//         console.log(variable2); // sera affiché

//     if(!variable) // sans accolade ne va appliquer
//     console.log('falsy : ' + variable);
//     console.log('falsy : + variable2');

//     falsy // peut être :

    // false
    // 0
    // ''
    // null
    // NaN
    // undefined

    // Operateur TERNAIRE
    // var value = !variable ? 'je suis un falsy' : 'je ne suis pas un falsy';

    // console.log('op ternaire : ' + value);


//         $('.btn').hover(function() {
//             $(this).siblings().fadeToggle(2000);
//             $('.btn').click(function(){

//             });
// })

// $('dd').hide();

// $('dt').on('click', function() {
//     $('dd').not($(this).nextUntil('dt')).slideUp(100);
//     $(this).nextUntil('dt').slideToggle(100);
// });

// $(".submit").on('click', function() {
//     var value = $('#number').val();
//     var choice = $(this).attr("id");
    
//     let tableau = [];
//     for(var i=1; i<= value; i++) {
//         if( i % 2 == 0 && choice == 'even') {
//             tableau.push(i);
//         };
//     };
//     console.log(tableau);
//     $(".display_val").append('<div>' + value + '</div>');




//     console.log(value);
//     console.log(choice);
// });


})(jQuery);