//create instance of GitHub class
const github = new GitHub;

//create instance of UI
const ui = new UI;

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
                ui.showAlert('user not found','alert alert-danger');
            }else{
                //show profile
                ui.showProfile(data.profile);

            }
        })
    }else{
        //clear profile
        ui.clearProfile();
    }
})