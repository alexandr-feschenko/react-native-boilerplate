import { configureStore } from '@reduxjs/toolkit'

import Reactotron from '../../ReactotronConfig';

export const store = configureStore({
    enhancers: (getDefaultEnhancers) =>
        getDefaultEnhancers().concat(Reactotron.createEnhancer()),
    reducer: {

    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
