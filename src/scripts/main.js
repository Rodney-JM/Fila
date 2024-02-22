const joinNormal = document.querySelector("#normalLocal");
const joinPull = document.querySelector("#pullLocal");
const btn = document.querySelector("#btn");
const list = document.querySelector("#list");
const codeList = [];

btn.addEventListener('click', ()=>{
    let goodPerson = joinNormal.value;
    let badPerson = joinPull.value;

    if(goodPerson){
        codeList.push(goodPerson);
        joinNormal.value = '';
    }else if(badPerson){
        codeList.unshift(badPerson);
        joinPull.value = '';
    }
    list.innerHTML = '';
    codeList.map((item, index)=>{
        if(index==0 && goodPerson){
            list.innerHTML+= `<li class="first"><span>${codeList.indexOf(item)}</span>${item}</li>`;
            
        }else if(index==0 && badPerson){
            list.innerHTML+= `<li class="good"><span>${codeList.indexOf(item)}</span>${item}</li>`;
        }
        else{
            list.innerHTML+= `<li class="bad"><span>${codeList.indexOf(item)}</span>${item}</li>`;
        }
    })
})