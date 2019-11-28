class GitHub{
    constructor(){
        /* GitHub App ID and Secret
            Client ID
            589bdb54ca6cb6750b77
            Client Secret
            ae0048fddfb64cae3710531ad6ea8473c8de5bd6
        */
        this.client_id = '589bdb54ca6cb6750b77';
        this.client_secret = 'ae0048fddfb64cae3710531ad6ea8473c8de5bd6';
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        return {
            profile: profile,
            repos: repos
        }
    }
}