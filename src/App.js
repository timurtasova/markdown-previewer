import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { useState } from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import { initialMarkdown } from './components/initial-markdown';

function App() {
    const [inputValue, setInputValue] = useState(initialMarkdown);

    const handleMarkdown = (term) => {
        setInputValue(term);
    };

    return (
        <div className="container-xxl vh-100">
            <div className="row-8 d-flex justify-content-between h-100">
                <div className="col-5 p-2 border-right border-success">
                    <h2 className="text-success text-end">Editor</h2>
                    <Editor onType={handleMarkdown} value={inputValue} />
                </div>
                <div className="col-7 p-2">
                    <h2 className="text-success text-end">Preview</h2>
                    <Previewer text={inputValue} />
                </div>
            </div>
        </div>
    );
}

export default App;