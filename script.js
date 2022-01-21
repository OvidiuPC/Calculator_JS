const display = document.querySelector('.display');
const btns = document.querySelectorAll('.btn');


btns.forEach(btn=>{
    btn.addEventListener('click',(bt)=>{
      console.log(bt.target)
      console.log(bt)
      console.log(bt.target.innerText)

      

      switch(bt.target.innerText){
        case 'CE':
        case 'C' :
            display.innerText = '';
            break;
        case '←':
            display.innerText = display.innerText.slice(0,-1);
            break
        case '=':
            try{
                display.innerText = eval(display.innerText);
            } catch{
                display.innerText = "Error!"
            }
            break;
         default:
             display.innerText += bt.target.innerText
      }

    })
})

// btns.forEach((btn) => {
//   btn.addEventListener("click", (e) => {
//     console.log(e);
//     console.log(e.target);
//     console.log(e.target.innerText);

//     diplay.innerText += e.target.innerText;
//   });
// });

// console.log('hello')
