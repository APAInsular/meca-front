import React from 'react';
import '../styles/NewPostPage.css';
import 'quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'

const NewPostPage = () => {
    var modules = {
        toolbar: [
          [{ size: ["small", false, "large", "huge"] }],
          ["bold", "italic", "underline", "strike", "blockquote"],
          [{ list: "ordered" }, { list: "bullet" }],
          ["link", "image"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] }
          ],
          [{ "color": ["#000000", "#e60000", "#ff9900", "#ffff00", "#008a00", "#0066cc", "#9933ff", "#ffffff", "#facccc", "#ffebcc", "#ffffcc", "#cce8cc", "#cce0f5", "#ebd6ff", "#bbbbbb", "#f06666", "#ffc266", "#ffff66", "#66b966", "#66a3e0", "#c285ff", "#888888", "#a10000", "#b26b00", "#b2b200", "#006100", "#0047b2", "#6b24b2", "#444444", "#5c0000", "#663d00", "#666600", "#003700", "#002966", "#3d1466", 'custom-color'] }],
        ]
      };

      var formats = [
        "header", "height", "bold", "italic",
        "underline", "strike", "blockquote",
        "list", "color", "bullet", "indent",
        "link", "image", "align", "size",
      ];

      const handleProcedureContentChange = (content) => {
        console.log("content---->", content);
      };

    return (
        <div className='NewPost'>
            <div class='tituledelpost'>
                <input type="text" id="text-input" />
                <label for="text-input">Name your Blog:</label>
            </div>
            <div class='buttons'>
                <div class="editor">
                    <ReactQuill
                        modules={modules}
                        formats={formats}
                        placeholder="Start your blog here..."
                        onChange={handleProcedureContentChange}
                        style={{ height: "30em"}}
                        class="richtext"
                    >          
                    </ReactQuill>
                </div>
                <button class='text-tools'><span id='tools'>Text<br/>Tools</span></button>
                <button class='post'>Post</button>
            </div>
            <div class='textarena'>
            <textarea id="story" name="story" rows="5" cols="33" placeholder="Start your blog here...">
            </textarea>
            </div>
        </div>
    );
}

export default NewPostPage;