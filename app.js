//Init GitHub
const github = new GitHub;
// Init UI
const ui = new UI;

// Search input
const searchUser = document.getElementById('searchUser');

// Search input event listener
searchUser.addEventListener('keyup', (e) => {
    // Get input text
    const userText = e.target.value;

    if(userText !== ''){
        // Make http request
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found'){
                // Show alert not found
                ui.showAlert('User not found', 'alert alert-danger')
            }else{
                // Show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
            
        })
    }else{
        // clear profile
        ui.clearProfile();
    }
});