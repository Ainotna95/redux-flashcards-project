import { configureStore } from "@reduxjs/toolkit";
// import reducers
//import the reducer generated by your topics slice
//and add it to the empty object passed to configureStore 
//under the key topics
//import topicsReducer and add it to the store
import { topicsReducer } from "../features/topics/topicsSlice";
//import quizzesReducer and add it to the store
import { quizzesReducer } from "../features/quizzes/quizzesSlice";
//import cardsReducer and add it to the store
import { cardsReducer } from "../features/cards/cardsSlice";
//add the topics slice to the app's store
export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
});
