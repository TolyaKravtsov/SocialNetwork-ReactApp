import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className='app-wrapper'>
            <header className='header'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png" alt=""/>
                Header
            </header>
            <nav className='nav'>
                <div><a href="">Profile</a></div>
                <div><a href="">Message</a></div>
                <div><a href="">News</a></div>
                <div><a href="">Music</a></div>
                <div><a href="">Settings</a></div>
            </nav>
            <div className='content'>Main content

                <div><img src="https://clck.ru/JEiYu" alt=""/></div>
                <div>ava+description</div>
                <div>my post
                    <div>new post</div>
                    <div>my post</div>
                    <div>my post</div>
                </div>

            </div>


        </div>


    );

}


export default App;
