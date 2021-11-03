import CONFIG from './config';

const API_ENDPOINTS = {
  LIST: `${CONFIG.BASE_URL}list`,
  SMALL_IMAGE: (id) => `${CONFIG.BASE_URL}images/small/${id}`,
  MEDIUM_IMAGE: (id) => `${CONFIG.BASE_URL}images/medium/${id}`,
  LARGE_IMAGE: (id) => `${CONFIG.BASE_URL}images/large/${id}`,
};

export default API_ENDPOINTS;
