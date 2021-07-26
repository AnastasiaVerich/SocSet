import {addPostAC, deletePostAC, ProfileReducer, StateType} from "../Reducers/profile-reducer";

test("new post should be added", () => {
    let state: StateType = {
        profile:null,
        postsDataArray: [
            {id: 1, post: "Приветики??", likeCount: 1},
            {id: 2, post: "Ребята аууу...", likeCount: 0},
            {id: 3, post: "Это мой первый пост!", likeCount: 1200}
        ],
        status:""
    }
    let newState = ProfileReducer(state, addPostAC("itt"))
    expect( newState.postsDataArray.length).toBe(4)
    expect( newState.postsDataArray[0].post).toBe("itt")
})

test("delete post should be correct ", () => {
    let state: StateType = {
        profile:null,
        postsDataArray: [
            {id: 1, post: "Приветики??", likeCount: 1},
            {id: 2, post: "Ребята аууу...", likeCount: 0},
            {id: 3, post: "Это мой первый пост!", likeCount: 1200}
        ],
        status:""
    }
    let newState = ProfileReducer(state, deletePostAC(2))
    expect( newState.postsDataArray.length).toBe(2)
    expect( newState.postsDataArray).toEqual(
        [
            {id: 1, post: "Приветики??", likeCount: 1},
            {id: 3, post: "Это мой первый пост!", likeCount: 1200}
        ]
    )
})