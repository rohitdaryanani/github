export const fetchGithubRepos = (term) => {
  console.log(term);
  return{
    type: 'FETCH_REPOS'
  };
}