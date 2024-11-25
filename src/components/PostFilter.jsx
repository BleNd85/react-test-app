import MyInput from "./UI/input/MyInput";
import MySelect from "./MySelect";
import React from "react";

export default function PostFilter({filter, setFilter}) {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={(event) => setFilter({...filter, query: event.target.value})}
                placeholder="Search..."
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue={"Sort by"}
                options={[{value: "title", name: "Title"},
                    {value: "description", name: "Description"}]}
            />
        </div>
    )
}