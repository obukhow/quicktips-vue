import axios from "axios"

export default axios.create({
    baseURL: "http://quicktips.ru/api.php"
})
