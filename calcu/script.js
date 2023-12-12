const Con = document.querySelector('.container');

const display = document.getElementById("display");


const btns = Array.from(document.getElementsByClassName('btn'));

btns.map( btn =>{
    
    btn.addEventListener('click',(e)=>{
        
    switch (e.target.innerText) {
        
        case 'C':
            display.innerText = '';
            break;
        case 'Del':
            display.innerText = display.innerText.slice(0,-1);
            break;
        case '=':
            // if(display.innerText !== '/'){
            //     if(display.innerText !== '0'){
            // display.innerText = eval(display.innerText);
            // }}else display.innerText = "div by 0 nopob";

            try{
            display.innerText = eval(display.innerText);
            }catch{
                display.innerText = 'Error!';
            }

            break;
        default:
            display.innerText += e.target.innerText;
            break;
    }
    });
});

// function add(u,i){
// return u+i;
// }
// function sub(u,i){
// return u-i;
// }
// function mul(u,i){
// return u*i;
// }
// function div(u,i){
//     if(i !== 0){
//         return u/i;
//     }else return 'cant return by 0';
// }

// // bn.addEventListener('click',function(a,r){
// //     console.log(add(a,r))
// // })

// btns.forEach(function(b){
//     b.addEventListener('click',function(){
//     console.log("add()");
//     });
// });


// const num1 = 10; const num2 = 10;
// const rA = add(num1,num2);
// const rS = sub(num1,num2);
// const rM = mul(num1,num2);
// const rD = div(num1,num2);

// console.log(rA);

// function operate(op,o,t){
//     add(o,t);
// }



// //deleting a no
// const del = document.getElementById("delbtn");

// del.addEventListener('click',function(){
//     alert('delete?');
// });

// //clearing all elements
// const clr = document.getElementById("clrbtn");

// clr.addEventListener('click',function(){
//     alert('clear?');
// });