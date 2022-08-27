let res1=document.getElementById("plus1");
let res2=document.getElementById("plus2");



let count1=0;
let count2=0;

function plusone(){
    count1+=1;
    // console.log("+1 clicked");
    res1.textContent=count1;
}

//for Home buttons
function plustwo(){
    count1+=2;
    // console.log("+1 clicked");
    res1.textContent=count1;
}

function plusthree(){
    count1+=3;
    // console.log("+1 clicked");
    res1.textContent=count1;

}

//for guest buttons

function plusonee(){
    count2+=1;
    // console.log("+1 clicked");
    res2.textContent=count2;
}

function plustwoo(){
    count2+=2;
    // console.log("+1 clicked");
    res2.textContent=count2;
}

function plusthreee(){
    count2+=3;
    // console.log("+1 clicked");
    res2.textContent=count2;

}