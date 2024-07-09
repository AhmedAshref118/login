let emailLoginInput=document.getElementById('emailLoginInput');
let passwordLoginInput=document.getElementById('passwordLoginInput');
let loginBtn=document.getElementById('loginBtn');
let alertMassage=document.getElementById('alertMassage')
let usercontainer=[];
if(localStorage.getItem('Users') !=null)
    {
        usercontainer=JSON.parse(localStorage.getItem('Users'))
    }

function login()
{
    if (checkInputEmpty() == true)
{
    getAlertMassege('all input required','red')
}
else
{
    if (checkEmailpassword() == true)
    {
        window.location.href='home.html'
    }
    else
    {
        getAlertMassege("Email or not password not correct","red")
    }
}




}

function checkEmailpassword()
{
    for (let index = 0; index < usercontainer.length; index++) {

        if(usercontainer[index].email ==emailLoginInput.value && usercontainer[index].password == passwordLoginInput.value)
            localStorage.setItem('userName',usercontainer[index].userName)
            return true
    }
}
function getAlertMassege(text,color)
{
    alertMassage.classList.replace('d-none','d-block');
    alertMassage.innerHTML=text;
    alertMassage.style.color=color ;
} 
function checkInputEmpty()
{
    if(  emailLoginInput.value== '' || passwordLoginInput.value== '')
        return true;
    else
    return false;
}

loginBtn.addEventListener('click',login);


