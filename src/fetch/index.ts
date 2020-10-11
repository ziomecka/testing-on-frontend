import fetch from 'node-fetch';

const URL = 'http://4ok6r.mocklab.io/entities';

export const fetchData = async (url = URL) => {
  const response = await fetch(url);

  return response.json();
};
