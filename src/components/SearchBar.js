import React, { useState } from "react";

const SearchBar = ({ onFormSubmit }) => {
    const [text, setText] = useState("");

    const onSubmit = (event) => {
        event.preventDefault();
        onFormSubmit(text);
    };

    return (
        <form
            onSubmit={onSubmit}
            className="ui form"
            style={{ marginTop: "30px" }}
        >
            <div className="field">
                <label>Search Videos</label>
                <input
                    onChange={(e) => setText(e.target.value)}
                    type="text"
                    value={text}
                />
            </div>
        </form>
    );
};

export default SearchBar;
