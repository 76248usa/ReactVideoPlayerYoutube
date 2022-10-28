import axios from "axios";

const KEY = "AIzaSyBf-mBYkmKoyfGEBInvrtMxeZuMQBQGiho";
//const KEY = "AIzaSyBk75Jd7i1Ns3SLhuuHrwBPuCWUut28bNs";
export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});

