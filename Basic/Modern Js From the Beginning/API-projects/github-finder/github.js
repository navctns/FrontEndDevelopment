
class Github {

  constructor(){
    this.client_id = 'f62a3a012af56efbb5b3';
    this.client_secret = '981e3ff274cacf42fa8fb9942d314873f916085f';
    this.repos_count = 5;
    this.repos_sort = 'created: asc';
  }

  async getUser(user){

    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();
    console.log(repos);
    return {
      profile,
      repos
    }
  }
}
