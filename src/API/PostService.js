import axios from "axios";

export class PostService {
    static async getAllPosts() {
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            return response.data;
        } catch (error) {
            console.log(error);
        }
    }
}