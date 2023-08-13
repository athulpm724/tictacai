attempt=0;
console.log("hi");
flag=0;


function move(){
    scroll(0,1150);
    
}
 

function ttt(txt){
    if(txt=='b1'){
        if(attempt==0){
            b1.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        b1.disabled=true;
    }
    else if(txt=='b2'){
        if(attempt==0){
            b2.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        
        b2.disabled=true;
    }
    else if(txt=='b3'){
        if(attempt==0){
            b3.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        b3.disabled=true;
    }
    else if(txt=='b4'){
        if(attempt==0){
            b4.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        b4.disabled=true;
    }
    else if(txt=='b5'){
        if(attempt==0){
            b5.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        b5.disabled=true;
    }
    else if(txt=='b6'){
        if(attempt==0){
            b6.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        b6.disabled=true;
    }
    else if(txt=='b7'){
        if(attempt==0){
            b7.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        b7.disabled=true;

    }
    else if(txt=='b8'){
        if(attempt==0){
            b8.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        b8.disabled=true;
    }
    else if(txt=='b9'){
        if(attempt==0){
            b9.innerHTML=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
            localStorage.setItem("attempt", 1);
        }
        b9.disabled=true;
    }

    winner();
    ai();

}

function winner(){
    circle=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
    x=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
    if(b1.innerHTML==circle & b2.innerHTML==circle & b3.innerHTML==circle|| b1.innerHTML==circle &b4.innerHTML==circle &b7.innerHTML==circle || b4.innerHTML==circle &b5.innerHTML==circle &b6.innerHTML==circle || b7.innerHTML==circle &b8.innerHTML==circle &b9.innerHTML==circle || b2.innerHTML==circle &b6.innerHTML==circle &b8.innerHTML==circle || b3.innerHTML==circle & b6.innerHTML==circle & b9.innerHTML==circle || b1.innerHTML==circle & b5.innerHTML==circle & b9.innerHTML==circle || b3.innerHTML==circle & b5.innerHTML==circle & b7.innerHTML==circle || b2.innerHTML==circle &b5.innerHTML==circle &b8.innerHTML==circle ){
        alert("ZERO WINS!");
        location.reload();
    }
    else if(b1.innerHTML==x & b2.innerHTML==x & b3.innerHTML==x || b1.innerHTML==x & b4.innerHTML==x & b7.innerHTML==x || b4.innerHTML==x & b5.innerHTML==x & b6.innerHTML==x || b7.innerHTML==x & b8.innerHTML==x & b9.innerHTML==x || b2.innerHTML==x & b6.innerHTML==x & b8.innerHTML==x || b3.innerHTML==x & b6.innerHTML==x & b9.innerHTML==x || b1.innerHTML==x & b5.innerHTML==x & b9.innerHTML==x || b3.innerHTML==x & b5.innerHTML==x & b7.innerHTML==x || b2.innerHTML==x & b5.innerHTML==x & b8.innerHTML==x ){
    
        alert("X WINS!");
        location.reload();
    
    }
    else if(b1.innerHTML!='' & b2.innerHTML!='' & b3.innerHTML!='' & b4.innerHTML!='' & b5.innerHTML!='' & b6.innerHTML!='' & b7.innerHTML!='' & b8.innerHTML!='' & b9.innerHTML!=''){
        alert("TIE!");
        flag=1;
        location.reload();
    }
}   

first=0;

function ai(){
    console.log("reached here!");
    circle=`<i class="fa-regular fa-circle fa-2xl" style="color: #000000;"></i>`;
    x=`<i class="fa-solid fa-x fa-2xl" style="color: #ff0000;"></i>`;
    if(b5.innerHTML=='' & first==0){
        b5.innerHTML=x;
        first=1;
    }
    else if(b1.innerHTML=='' & first==0){
        b1.innerHTML=x;
        first=0;
    }
    // b1
    else if(b2.innerHTML==circle & b3.innerHTML==circle & b1.innerHTML==''|| b5.innerHTML==circle & b9.innerHTML==circle & b1.innerHTML==''|| b4.innerHTML==circle & b7.innerHTML==circle & b1.innerHTML==''){
        b1.innerHTML=x;
    }
    // b2
    else if(b1.innerHTML==circle & b3.innerHTML==circle & b2.innerHTML==''|| b5.innerHTML==circle & b8.innerHTML==circle & b2.innerHTML==''){
        b2.innerHTML=x;
    }
    // b3
    else if(b1.innerHTML==circle & b2.innerHTML==circle & b3.innerHTML=='' || b5.innerHTML==circle & b7.innerHTML==circle & b3.innerHTML==''|| b6.innerHTML==circle & b9.innerHTML==circle & b3.innerHTML==''){
        b3.innerHTML=x;
    }
    //b4

    else if(b1.innerHTML==circle & b7.innerHTML==circle & b4.innerHTML==''|| b5.innerHTML==circle & b6.innerHTML==circle & b4.innerHTML==''){
        b4.innerHTML=x;
    }

    // b5
    else if(b4.innerHTML==circle & b6.innerHTML==circle & b5.innerHTML=='' || b2.innerHTML==circle & b8.innerHTML==circle & b5.innerHTML==''){
        b5.innerHTML=x;
    }

    //b6
    else if(b4.innerHTML==circle & b5.innerHTML==circle & b6.innerHTML=='' || b3.innerHTML==circle & b9.innerHTML==circle & b6.innerHTML==''){
        b6.innerHTML=x;
    }

    //b7

    else if(b1.innerHTML==circle & b4.innerHTML==circle & b7.innerHTML==''|| b8.innerHTML==circle & b9.innerHTML==circle & b7.innerHTML==''|| b3.innerHTML==circle & b5.innerHTML==circle & b7.innerHTML==''){
        b7.innerHTML=x;
    }

    // b8
    else if(b2.innerHTML==circle & b5.innerHTML==circle & b8.innerHTML==''|| b7.innerHTML==circle & b9.innerHTML==circle & b8.innerHTML==''){
        b8.innerHTML=x;
    }
    
    // b9
    else if(b1.innerHTML==circle & b5.innerHTML==circle & b9.innerHTML==''|| b3.innerHTML==circle & b6.innerHTML==circle & b9.innerHTML==''|| b7.innerHTML==circle & b8.innerHTML==circle & b9.innerHTML==''){
        b9.innerHTML=x;
    }
    else{
        console.log("final here");
        while(flag==0){
            num=Math.floor(Math.random(1,9)*10)
            console.log("num="+num);
            if(num==0){
                continue
            }
            else if(document.getElementById("b"+num).innerHTML==''){
                document.getElementById("b"+num).innerHTML=x;
                break;
            }
            else{
                continue;
            }
        }

    }
    winner();
}