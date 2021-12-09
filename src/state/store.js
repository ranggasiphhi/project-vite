import { createStore } from "vuex";
// import modules from './modules'


const store = createStore({
    strict: import.meta.env.NODE_ENV !== 'production',
})

export default store;