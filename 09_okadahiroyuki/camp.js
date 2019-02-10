// console.log("初めてのジャバスクリプト");
// console.log(23+5);
// console.log(2000-1800);
// console.log("18+5");

// var name="岡田広之";
// console.log("自分の名前");
// console.log(name);

// var point = 70;
// if(point > 80 ) {
//     console.log("素晴らしい！おめでとう！");
// }else{
//     console.log("もっと頑張りましょう！");
// }

// var test = Math.floor(Math.random()*5+1);

// if(test == 1){
//     console.log("1");

// }else if(test == 2){
//     console.log("2");

// }else if(test == 3){
//     console.log("3");

// }else if(test == 4){
//     console.log("4");

// }else{
//     console.log("5");
// }
     
// console.log(test);

// $(document).ready(function(){

    
//       $('#test').html('あいうえお');
//       $('#test').css('color','#f34');

// })

// $('#test').on('click',function(){

//  $('#test').html('アイウエオ');

// });

$(document).ready(function(){

    $('#hide').on('click',function(){
        $('#ex').hide(2000);
    
    });
    $('#hide').on('click',function(){
        $('#ex').show(2000);
        
    });
});

