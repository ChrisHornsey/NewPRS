import React from "react";

export default function Recipe({recipe}) {
    const {title, URL, tags}= recipe;

    return (
        <div className = "Recipe">
            <h2>{title}</h2>
            <h3>{URL}</h3>
        </div>
    )
}