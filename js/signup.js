let userNameInput =document.getElementById('userNameInput');
let emailInput =document.getElementById('emailInput');
let passwordInput =document.getElementById('passwordInput');
let signUpBtn =document.getElementById('signUpBtn');
let alertMassege=document.getElementById('alertMassege')
let userContainer =[];

if(localStorage.getItem('Users')!=null)
{
    userContainer=JSON.parse(localStorage.getItem('Users'));
}

function signUp ()
{
    let data={
        userName:userNameInput.value,
        email:emailInput.value,
        password:passwordInput.value,
    }
    if(checkInputEmpty() == true)
    {
        getAlertMassegeR(); 
    }
        else
        {
            if(checkEmailExist()== true)
                {
                    getAlertMassegeE()
                }
                
                else
                {
                    userContainer.push(data);
                    localStorage.setItem('Users',JSON.stringify(userContainer));
                    clrForm(); 
                    getAlertMassege();
                }
        }





    // console.log(userContainer);
}
function getAlertMassege()
{
    alertMassage.classList.replace('d-none','d-block');
    alertMassage.innerHTML='success';
    alertMassage.style.color='green' ;
}
function getAlertMassegeR()
{
    alertMassage.classList.replace('d-none','d-block');
    alertMassage.innerHTML='all input required ';
    alertMassage.style.color='red' ;
}
function getAlertMassegeE()
{
    alertMassage.classList.replace('d-none','d-block');
    alertMassage.innerHTML='Email Already Exist ';
    alertMassage.style.color='orange' ;
}
function clrForm()
{
    userNameInput.value='';
    emailInput.value='';
    passwordInput.value='';
}
function checkInputEmpty()
{
    if(userNameInput.value== '' || emailInput.value== '' || passwordInput.value== '')
        return true;
    else
    return false;
}
function checkEmailExist()
{
    for(let i=0;i<userContainer.length;i++)
        {
            if(userContainer[i].email == emailInput.value)
                return true ;
        }
}
signUpBtn.addEventListener("click",signUp);
