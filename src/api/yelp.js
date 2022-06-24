import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer nb1AqiWfBc55XRxdeVPHkPSFWycKnPBP3g11vky57YJts_V8IjZ6zl7yGda83w6wjklZ8U7F1ItPbTdBeZbWdKDxcipgr7-BK50O1nh8xb0XZs43DJkNViVN46WgYnYx`,
  },
});
