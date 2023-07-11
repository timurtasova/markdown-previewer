    function Editor({ value, onType }) {
    const handleChange = (e) => {
        onType(e.target.value);
    };

    return (
        <div>
            <textarea
                onChange={handleChange}
                value={value}
                id="editor"
                rows="15"
                className="w-100 rounded p-3 text-success" />
        </div>
    );
}

export default Editor;