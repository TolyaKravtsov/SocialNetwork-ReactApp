import React from "react";
import profilePageReducer, {addPostAC, deletePost} from "./profilePageReducer";

let state = {
    posts: [
        {id: 1, message: 'how are you'},
        {id: 2, message: 'how do you do'},
        {id: 3, message: 'Люблю Сашеньку'}
    ],
};

it('new post should be added', () => {
    let action = addPostAC("Tolya");

    let newState = profilePageReducer({state}, {action});

    expect(newState.state.posts.length).toBe(3);
});


it('after deleteing arr length should be decrement', () => {
    let action = deletePost(1);

    let newState = profilePageReducer({state}, {action});

    expect(newState.state.posts.length).toBe(3);
});
