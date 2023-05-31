import { useState } from "react";

function Search({ cb = Function.prototype }) {
    const [value, setValue] = useState("");

    const handleKey = (e) => {
        if (e.key === "Enter") {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className="input">
            <input
                type="search"
                id="search-field"
                placeholder="search"
                onKeyDown={handleKey}
                onChange={(e) => setValue(e.target.value)}
                value={value}
            />
        </div>
    );
}

export { Search };