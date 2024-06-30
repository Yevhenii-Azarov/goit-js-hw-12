import axios from "axios";
export async function searchImg(value, page) {
    axios.defaults.baseURL = 'https://pixabay.com';

  const params = {
    key: '44710558-f9f1e7058b6d6169ae4ab4229',
    q: value,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 15,
    page: page,
  };

  try {
    const response = await axios.get('/api/', { params });
      return response.data;
  } catch (err) {
    console.log(err);
  }
};
