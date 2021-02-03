import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID V6PJypXspUYz3fLO8KKi8wg99Ketn5rLGvsCSj3yVJ0",
  },
});
