import axios from 'axios';

const baseURL = () => {
  switch (process.env.REACT_APP_ENVIRONMENT) {
    case 'local':
      return process.env.REACT_APP_API_URL_LOCAL
    case 'development':
      return process.env.REACT_APP_API_URL_DEVELOPMENT
    case 'staging':
      return process.env.REACT_APP_API_URL_STAGING
    case 'production':
      return process.env.REACT_APP_API_URL_PRODUCTION
    default: 
      return process.env.REACT_APP_API_URL_PRODUCTION
        
  }
}

const instance = axios.create({
  baseURL: baseURL(),
  headers: {
    'Content-Type': 'application/json',
    // timeout: 1000,
  },
})

export default instance;