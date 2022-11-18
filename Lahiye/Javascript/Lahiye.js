let array=[];
const form=document.querySelector('form');
const colm_4=document.querySelector('.colm-4');
const btn_sort=document.createElement('button');
colm_4.append(btn_sort);
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    array.push(event.target.username.value);
    const tbody=document.querySelector('tbody');
    const tr=document.createElement('tr');
    const td=document.createElement('td');  
    const td_btn=document.createElement('td');  
    td_btn.innerText="X";
    tbody.append(tr);
    array.forEach(element=>{
        tr.append(td,td_btn);
        td.innerText=element;
        console.log(element);
    })
    console.log(array);
    console.log(array.length);
    td_btn.addEventListener('click',(event)=>{
        tr.remove();
        array.forEach((element)=>{
            if(tr.innerText[0]==element){
                let index=array.indexOf(element)
                array.splice(index,1)
            }
            console.log(array);
        })
    })

})

btn_sort.addEventListener('click',(event)=>{
    const td_sort=document.querySelectorAll('td')
    td_sort.forEach(element=>{
        if(element.innerText!="X"){
            // console.log(`new TD ${element.innerText}`);
        
        if(element.innerText!=Number(element.innerText)){
            array=array.sort();
            console.log(array);
        }else if(element.innerText==Number(element.innerText)){
            array.sort((a,b)=>{
                let result=a-b;
                return result;
            })
            console.log(`array_sort ${array}`);
           
            
            
        } 
    }
    array.forEach(item=>{
        console.log(`item  ${item}`);
        element.innerText=item;
        console.log(`element  ${element.innerText[0]}`);
        console.log(`item1   ${item}`);
    })
     console.log(`input ${element.innerText}`);
     console.log(array);
    console.log(`Array ${array}`);
    })

})

//     array.forEach(element=>{
//        
//     })


// let array=[];
// const body=document.querySelector('body')
// const form=document.querySelector('form');
// const tbody=document.querySelector('tbody');
// const colm_4=document.querySelector('.colm-4')
// const btn_sort=document.createElement('button');
// btn_sort.classList.add('btn_sort')
// colm_4.append(btn_sort);
// btn_sort.innerText='>';
// form.addEventListener('submit',(event)=>{
//     event.preventDefault();
//     const tr=document.createElement('tr');
//     tbody.append(tr);
//     const td=document.createElement('td'); 
//     const td_btn=document.createElement('td');
//     tr.append(td,td_btn);
//     const btn_cancel=document.createElement('button');
//     td_btn.append(btn_cancel);
//     td_btn.innerText= 'X';
//     td.innerText=event.target.username.value;
//     array.push(td.innerText); 
//     td_btn.addEventListener('click',()=>{
//         tr.remove();
//     })
        
//     btn_sort.addEventListener('click',()=>{
//         array.forEach(element=>{
//             if(element!=Number(element)){
//                 array=array.sort();
//                 td.innerText=element;
//             }else if(element==Number(element)){
//                 array.sort((a,b)=>{
//                     let result=a-b;
//                     return result;
//                 })
//                 td.innerText=element
//             } 
//         })
//        console.log("salam");
//     })

// })
