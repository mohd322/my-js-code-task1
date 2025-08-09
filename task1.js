 function abrag( day, month ){
      

    var r = Math.floor(Math.random()* 256 )
    var g = Math.floor(Math.random()* 256 )
    var b = Math.floor(Math.random()* 256 )

    if ((day >= 21 && month == 3) || (day  <=19 && month == 4) ){
                
        document.write(`<h1 style=" color: rgb(${r} , ${g} , ${b})" >"برج الحمل"</h1>`)
     }
     
    else if ((day >= 20 && month == 4) || ( day <=20 && month == 5)){
            
        document.write(` <h1 style=" color: rgb(${r} , ${g} , ${b})" > "  برج الثور " </h1>`)
     }
     
     
     else if (( day >= 21 && month == 5) || (day<=20 && month == 6)){
            
        document.write( `<h1 style=" color: rgb(${r} , ${g} , ${b})" >" برج الجوزاء" </h1>`)
     }
    
     else if ((day>= 21 && month == 6) || (day<=22 && month == 7)){
            
        document.write(`<h1 style=" color: rgb(${r} , ${g} , ${b})" > " برج السرطان" </h1>`)
     }

 else if ((day>= 23 && month == 7) || (day<=22 && month == 8)){
            
        document.write(`<h1 style=" color: rgb(${r} , ${g} , ${b})" >" برج الأسد" </h1>`)
     }

else if ((day>= 23 && month == 8) || (day<=22 && month == 9)){
            
        document.write(`<h1 style=" color: rgb(${r} , ${g} , ${b})" >" برج العذراء" </h1>`)
     }

else if ((day>= 23 && month == 9) || (day<=22 && month == 10)){
            
        document.write(`<h1 style=" color: rgb(${r} , ${g} , ${b})" >" برج الميزان" </h1>`)
     }

        else if ((day>= 23 && month == 10) || (day<=21 && month == 11 )){
            
        document.write(` <h1 style=" color: rgb(${r} , ${g} , ${b})" >" برج العقرب" </h1>`)
     }

         else if ((day>= 22 && month == 11) || (day<=21 && month == 12)){
            
        document.write(`<h1 style=" color: rgb(${r} , ${g} , ${b})" >" برج القوس" </h1>`)
     }

          else if ((day>= 22 && month == 12) || (day<=19 && month == 1)){
            
        document.write(`<h1 style=" color: rgb(${r} , ${g} , ${b})" >" برج الجدي" </h1>`)
     }


  else if ((day>= 20 && month == 1) || (day<=18 && month == 2)) {
            
        document.write(`<h1 style=" color: rgb(${r} , ${g} , ${b})" >" برج الدلو"</h1>`)
     }

     else if ((day>= 19 && month == 2) || (day<=20 && month == 3)){
            
        document.write(` <h1 style=" color: rgb(${r} , ${g} , ${b})" > " برج الحوت" </h1>`)
     }

    // else {

        // document.write(`<h1 style=" color: rgb(${r} , ${g} , ${b})" >" برج الحوت" </h1>`)
    // }
    
}


var day = prompt("من فضلك ادخل يوم ميلادك")
var month = prompt("من فضلك ادخل شهر ميلادك")

abrag( day , month)