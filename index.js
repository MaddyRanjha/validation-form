
function validate(){
    
    let firstname=document.getElementById('first-name').value
    let lastname=document.getElementById('last-name').value
    let emailid=document.getElementById('email').value
    let cityname=document.getElementById('city').value
    let statename=document.getElementById('state').value
    let zipcode=document.getElementById('zip-code').value
    let tnc=document.getElementById('t-and-c').checked
    // console.log(firstname);
    // console.log(lastname);
    // console.log(emailid);
    // console.log(cityname);
    // console.log(statename);
    // console.log(zipcode);

    

    if(firstname.length>=2){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
    }

    if(lastname.length>=2){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
    }

    if (((emailid.includes('@') && emailid.includes('.')) && emailid.indexOf('@')<emailid.indexOf('.')) && (emailid.substr(emailid.indexOf('.')).length>2 && emailid.substr(0,emailid.indexOf('@')).length>0))
    {
        document.getElementById('email-valid').style.display='block'
        document.getElementById('email-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('email-invalid').style.display='block'
        document.getElementById('email-valid').style.display='none'

    }

    if(cityname.length>=3){
        document.getElementById('city-name-valid').style.display='block'
        document.getElementById('city-name-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('city-name-invalid').style.display='block'
        document.getElementById('city-name-valid').style.display='none'
    }
    if(statename.length>0){
        document.getElementById('state-name-valid').style.display='block'
        document.getElementById('state-name-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('state-name-invalid').style.display='block'
        document.getElementById('state-name-valid').style.display='none'
    }

    if(zipcode.length===6 ){
        document.getElementById('zip-code-valid').style.display='block'
        document.getElementById('zip-code-invalid').style.display='none'
    }
    else{
        error=true
        document.getElementById('zip-code-invalid').style.display='block'
        document.getElementById('zip-code-valid').style.display='none'
    }
    if(tnc){
        document.getElementById('tNC-invalid').style.display='none'

    }
    else{
        document.getElementById('tNC-invalid').style.display='block'

    }

}