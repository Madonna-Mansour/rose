function validateForm(){
    var a1 = document.getElementById("aa").value
    var b1 = document.getElementById("bb").value
    var c1 = document.getElementById("cc").value
    var d1 = document.getElementById("dd").value
    var e1 = document.getElementById("ee").value
    var text=""
    var erorr=document.getElementById("sp")
            if(a1.length < 3){
                text= "please enter valied user name"
                erorr.innerHTML=text
                return false
            }
            else if(b1.length <3){
                text= "please enter valied user name"
                erorr.innerHTML=text
                return false
            }
            else if(c1.length < 10 || c1.indexOf("@")== -1){
                text= "please enter valied email"
                erorr.innerHTML=text
                return false
            }
            else if(d1.length <6)
                {
                    text= "please enter valied password"
                    erorr.innerHTML=text
                    return false
                }
                else if (e1.length <6  )
                    {
                        text= "please enter valied password"
                        erorr.innerHTML=text
                        return false
                    }
                    else{
                        alert("done")
                        return true
                    }
    }




    var icon=document.getElementById("dar");
    icon.onclick=function(){
         document.body.classList.toggle("dark");
         
    }