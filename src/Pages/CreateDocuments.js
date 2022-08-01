
// import React, { useState } from 'react';
// import { EditorState } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import { BiDoorOpen } from 'react-icons/bi';

// const CreateDocuments = () => {
//     const [editorState, setEditorState] = useState(
//         () => EditorState.createEmpty(),
//     );
//     console.log(editorState);
//     return (
//         <div>
//             <div className="back-button">
//                 <BiDoorOpen className="add-icon" />
//             </div>
//             <h1>Create Documents</h1>

//             <Editor
//                 editorState={setEditorState}
//             />
//         </div>
//     );
// };

// export default CreateDocuments;



import React, { useState } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import '../CSS/Draft.css';
import { convertToHTML } from 'draft-convert';

const CreateDocuments = () => {
    const [convertedContent, setConvertedContent] = useState('');
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );
    const handleEditorChange = (state) => {
        setEditorState(state);
        convertContentToHTML();
    };
    const convertContentToHTML = () => {
        let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
        setConvertedContent(currentContentAsHTML);
    };
    console.log(convertedContent);
    return (
        <div className="App">
            <header className="App-header">
                Rich Text Editor Example
            </header>
            <Editor
                editorState={editorState}
                onEditorStateChange={handleEditorChange}
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
            />
        </div>
    );
};
export default CreateDocuments;