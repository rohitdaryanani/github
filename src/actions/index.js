import axios from 'axios';

const ROOT_URL = 'https://api.github.com/search/repositories';

export const FETCH_REPOS = 'FETCH_REPOS';
export const FETCH_DETAILS = 'FETCH_DETAILS';

export const fetchGithubRepos = (term) => {
  const url = `${ROOT_URL}?q=${term}`
  const request = axios.get(url);
  return{
    type: FETCH_REPOS,
    payload: request
  };
}

export const getDetails = (details) => {
  return {
    type: FETCH_DETAILS,
    payload: details
  }
}