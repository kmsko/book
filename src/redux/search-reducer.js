import { SearchBooks } from "../api/api.js"

const SET_SEARCH = "SET-SEARCH";
const SET_SETTINGS_SEARCH = "SET-SETTINGS-SEARCH";
const ADD_BOOK = "ADD-BOOK";
const END_BOOK = "END-BOOK";
const SET_BOOK = "SET-BOOK";
const SET_PRELOADER = "SET-PRELOADER";

let initialState = {
    resultSearch: null,
    settingsSearch: {
        startIndex: 0,
        maxResults: 10,
        textTitl: "",
        categories: "",
        sorting: ""
    },
    totalItems: null,
    end: false,
    book: null,
}
const searchReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                resultSearch: action.search_data,
                totalItems: action.totalItems
            }
        case SET_SETTINGS_SEARCH:
            return {
                ...state,
               settingsSearch: {...state.settingsSearch, startIndex: action.settings_search.startIndex}
            }
        case ADD_BOOK:
            let more = [...state.resultSearch]
            action.moreBook.map((e)=>more.push(e))
            return {
                ...state, resultSearch: [...more]
            }
        case END_BOOK:
            return {
                ...state,
                end: action.end
            }
        case SET_BOOK:
            return {
                ...state,
                book: action.set
            }
        case SET_PRELOADER:
            return {
                ...state,
                resultSearch: action.setPreloader
            }

        default: return state;
    }
}

const setSearch = (search_data, totalItems) => ({ type: "SET-SEARCH", search_data, totalItems })
const setSettingsSearch = (settings_search) => ({ type: "SET-SETTINGS-SEARCH", settings_search })
const addMoreBook = (moreBook) => ({ type: "ADD-BOOK", moreBook })
const endBook = (end) => ({ type: "END-BOOK", end })
const setBook = (set) => ({ type: "SET-BOOK", set })
const setPreloader = (setPreloader) => ({ type: "SET-PRELOADER", setPreloader })


export const searchAPI = (params) => async (dispatch) => {
    dispatch(setPreloader(true))
    let response = await SearchBooks.searchBooksTitel(params)
    dispatch(setSearch(response.data.items, response.data.totalItems))
    dispatch(endBook(false))
}
export const loadMoreAPI = (params) => async (dispatch) => {
    dispatch(endBook(true))
    let response = await SearchBooks.loadMore(params)
    dispatch(setSettingsSearch(params))
    if(response.data.items){
        dispatch(addMoreBook(response.data.items));
        dispatch(endBook(false))
    }
    else{dispatch(endBook("Книг больше нет")) }
}
export const getBook = (params) => async (dispatch) => {
    dispatch(setBook(false))
    let response = await SearchBooks.getBook(params)
    if(response.data.volumeInfo)dispatch(setBook(response.data.volumeInfo))
}



export default searchReducer;


