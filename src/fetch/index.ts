import fetch from 'node-fetch';

const URL = 'http://testing-on-frontend.mocklab.io';

export const fetchData = async (url = URL) => {
  const response = await fetch(url);

  return response.json();
};
