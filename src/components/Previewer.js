import { marked } from 'marked';

marked.setOptions({
    mangle: false,
    headerIds: false,
    breaks: true,
    gfm: true
});

function Previewer({ text }) {
    const renderer = new marked.Renderer();

    const createMarkup = () => {
        return { __html: marked(text, {renderer: renderer})};
    };

    return (
        <div
            id="preview"
            className="w-100 border border-secondary rounded p-3 text-success overflow-auto"
            dangerouslySetInnerHTML={createMarkup()}
        >
        </div>
    );
}

export default Previewer;