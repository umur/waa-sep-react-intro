
import axios from    "axios"

const listCategories = async () =>{
    return await axios.get("categories");
}

const getCategoryById = async (id: number) =>{
    return await axios.get("categories/:id");
}

export const categoryService = { listCategories, getCategoryById}
