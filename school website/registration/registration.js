function display()
{
    var grade=document.getElementById("grade").value;
   
    if(grade > 5)
   {  
   document.getElementById("scholar").style="visibility:visible";
   }
   if(grade > 11)
   {
    document.getElementById("ol").style="visibility:visible"; 
   }

   else if(grade<=5){
    document.getElementById("ol").style="visibility:hidden";
    document.getElementById("scholar").style="visibility:hidden";
   }
   else{
    document.getElementById("ol").style="visibility:hidden";
   }
}
function chngcap()
{
    const capital=document.getElementsByClassName("capital");
    fullname.value=fullname.value.toUpperCase();
    initial.value=initial.value.toUpperCase();
    fname.value=fname.value.toUpperCase();
    mname.value=mname.value.toUpperCase();
    foccupation.value=foccupation.value.toUpperCase();
    moccupation.value=moccupation.value.toUpperCase();
    line1.value=line1.value.toUpperCase();
    line2.value=line2.value.toUpperCase();
    province.value=province.value.toUpperCase();
    district.value=district.value.toUpperCase();
    hometown.value=hometown.value.toUpperCase();
    erelationship.value=erelationship.value.toUpperCase();
    ename.value=ename.value.toUpperCase(); 

}
function valid()
{
    
    var fullname=document.getElementById("fullname").value;
    var initial=document.getElementById("initial").value;
    var dob=document.getElementById("dob").value;
    var grade=document.getElementById("grade").value;
    var fname=document.getElementById("fname").value;
    var foccupation=document.getElementById("foccupation").value;
    var fnic=document.getElementById("fnic").value;
    var fphonenumber=document.getElementById("fphonenumber").value;
    var mname=document.getElementById("mname").value;
    var moccupation=document.getElementById("moccupation").value;
    var mnic=document.getElementById("mnic").value;
    var mphonenumber=document.getElementById("mphonenumber").value;
    var line1=document.getElementById("line1").value;
    var province=document.getElementById("province").value;
    var district=document.getElementById("district").value;
    var hometown=document.getElementById("hometown").value;
    var postalcode=document.getElementById("code").value;
    var ename=document.getElementById("ename").value;
    var erelationship=document.getElementById("erelationship").value;
    var ephonenumber=document.getElementById("ephonenumber").value;
    if(fullname !== "" && initial !== "" && dob !=="" && grade !=="" && fname !==""
    && foccupation !== "" && fnic !=="" && fphonenumber !== "" && mname !==""
    && moccupation !== "" && mnic !=="" && mphonenumber !== "" && line1 !=="" &&
     province!=="" && district !== "" && hometown !== "" && postalcode !== "" &&
     ename !== "" && erelationship !== "" && ephonenumber !=="")
    {
        swal.fire("Registration Successful","ThankYou ","success");
    }
    else{
        swal.fire("Give valid Inputs","Click ok to continue ","info");
       }



   
        
}