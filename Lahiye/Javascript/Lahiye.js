let array=[];
const body=document.querySelector('body')
const form=document.querySelector('form');
const tbody=document.querySelector('tbody');
const colm_4=document.querySelector('.colm-4')
const btn_sort=document.createElement('button');
btn_sort.classList.add('btn_sort')
colm_4.append(btn_sort);
btn_sort.innerText='>';
form.addEventListener('submit',(event)=>{
    event.preventDefault();
    const tr=document.createElement('tr');
    tbody.append(tr);
    const td=document.createElement('td'); 
    const td_btn=document.createElement('td');
    tr.append(td,td_btn);
    const btn_cancel=document.createElement('button');
    td_btn.append(btn_cancel);
    td_btn.innerText= 'X';
    td.innerText=event.target.username.value;
    array.push(td.innerText); 
    td_btn.addEventListener('click',()=>{
        tr.remove();
    })
        
    btn_sort.addEventListener('click',()=>{
        array.forEach(element=>{
            if(element!=Number(element)){
                array=array.sort();
                td.innerText=element;
            }else if(element==Number(element)){
                array.sort((a,b)=>{
                    let result=a-b;
                    return result;
                })
                // td.innerText=element
            } 
        })
       console.log("salam");
    })

})
