//create instance of GitHub class
const github = new GitHub;


//search input
const searchUser = document.getElementById('searchUser');

//search input event listner
searchUser.addEventListener('keyup',(e)=>{
    //Get input text
    const userText = e.target.value;
    if(userText !== ''){
        //Make HTTP call
        github.getUser(userText)
        .then(data=>{
            if(data.profile.message === 'Not Found'){
                //show alert
                
            }else{
                //show profile

            }
        })
    }else{
        //clear profile
    }
})