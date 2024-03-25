import axios from "axios";

const TOKEN = "cnti931r01qres1dcc70cnti931r01qres1dcc7g"

export default axios.create({
baseURL : "https://finnhub.io/api/v1",
params:{
    token : TOKEN
}
})