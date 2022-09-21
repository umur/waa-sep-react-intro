import * as React from "react";
import {useEffect, useState} from "react";
import axios from "axios";
import {categoryService} from "../services/categoriesService"
export default function Categories() {

    const initialCategories = [
        {
            id: 1,
            name: "Textile",
            parent_id: 0
        },
        {
            id: 2,
            name: "Book",
            parent_id: 0
        },
    ]
    const [categories, setCategories] = useState(initialCategories);
    const [catStack, setCategoryStack] = useState(initialCategories)

    const [catName, setCatName] = useState("");

    function  addCategory () {
        categories.push({id: 0, name: catName, parent_id: 0})
        catStack.push({id: 0, name: catName, parent_id: 0})
        setCategories(categories)
        setCategoryStack(catStack)
        alert(catName)
    }
    function  handleCategoryChange (e:any) {
        console.log('selected cat: ', e.target.value)
        alert(e.target.value)
    }
    const fetchCategories = async () => {
        await categoryService.listCategories()
            .then(response => {
                setCategories(response.data);
                setCategoryStack(response.data);
                console.log(categories)
                }
            )

    }
    useEffect( () => {
        fetchCategories()
    }, [])

    return (
        <div>Filter by Category
            <select className="dropdown" onChange={handleCategoryChange}>
                {
                    catStack?.map( (p) =>
                        <option className="dropdown-item">{p.name}</option>)
                }
            </select>
            <input type="text" name="category" value={catName}
                   onChange={(e) => setCatName(e.target.value)}/>
            <input type="button" name="addBtn" value="Add"
                   onClick={() => {
                       addCategory();
                   }
            }/>
        </div>

    )
}
