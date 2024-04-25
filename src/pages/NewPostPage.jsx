import React from 'react';
import '../styles/NewPostPage.css';

const NewPostPage = () => {
    return (
        <div className='NewPost'>
            <div class='tituledelpost'>
                <input type="text" id="text-input" />
                <label for="text-input">Name your Blog:</label>
            </div>
            <div class='buttons'>
                <button class='text-tools'>Text<br/>Tools</button>
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