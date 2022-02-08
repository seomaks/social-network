import {
  addPostAC,
  PostType,
  profileReducer, ProfileType,
} from "./profileReducer";

type startStateType = {
  posts: Array<PostType>
  profile: ProfileType | null
  status: string
}
let startState: startStateType

beforeEach(() => {
  startState = {
    posts: [
      {id: 1, message: 'Hi, how are you?', likesCount: 12},
      {id: 2, message: 'It\'s my first post', likesCount: 11},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: ""
  }
})

test('length of posts should be incremented', () => {
  const endState = profileReducer(startState, addPostAC('Seo Max'))

  expect(endState.posts.length).toBe(3)
});

test('message of new post should be correct', () => {
  const endState = profileReducer(startState, addPostAC('Seo Max'))

  expect(endState.posts[2].message).toBe('Seo Max')
});