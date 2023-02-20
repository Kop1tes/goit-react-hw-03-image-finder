import axios from 'axios';

export const getImages = ({query = '', page = 1}) => {
    const response = `https://pixabay.com/api/?q=${query}&page=${page}&key=32216625-6f7cdca1cd8ffe8b3abf6c6b4&image_type=photo&orientation=horizontal&per_page=12`;
    return axios.get(response).then(res => res.data);
};

// const BASE_URL = "https://pixabay.com/api/";
// const KEY = "32216625-6f7cdca1cd8ffe8b3abf6c6b4";

// const getImages = async (value, page = 1, perPage = 12) => {
//     const options = {
//         params: {
//             q: value,
//             page: page,
//             per_page: perPage,
//             image_type: "photo",
//             orientation: "horizontal",
//             sefesearch: true,
//             key: KEY,
//         },
//     };
// };

// const { data, status } = await axios.get(`${BASE_URL}`, options);

// export const API = {
//     getImages,
// };