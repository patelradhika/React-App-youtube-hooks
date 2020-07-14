import axios from "axios";

const KEY = "AIzaSyAzugSKGipY2NF6tMy8apSOMTr5Miznm08";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        type: "video",
        key: KEY,
    },
});
