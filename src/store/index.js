import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

export const FETCH_CONTACTS = () => {
  return (dispatch) => {
    async function fetchContact() {
      await fetch('https://simple-contact-crud.herokuapp.com/contact')
        .then((response) => response.json())
        .then((data) => dispatch(SET_CONTACT(data.data)))
    }
    fetchContact()
  }
}

export const POST_CONTACT = (post) => {
  return async(dispatch) => {
    try {
      const { data } = await axios({
        method: 'POST',
        url: 'https://simple-contact-crud.herokuapp.com/contact',
        data: post
      })
      dispatch(SET_CONTACT())
    } catch (e) {
      console.log(e)
    }
  }
}
export const DELETE_CONTACTS = (id) => {
  return async (dispatch) => {
      try {
      await fetch(`https://simple-contact-crud.herokuapp.com/contact/${id}`, {
        method: 'DELETE'
    })
    .then((response) => response.json())
    .then((data) => dispatch(FETCH_CONTACTS()))
      } catch (e) {

      }
  }
}

export const FETCH_CONTACT_DETAIL = (contact_id) => {
  return (dispatch) => {
    async function fetchContactById(contact_id) {
      await fetch('https://simple-contact-crud.herokuapp.com/contact/'+contact_id)
        .then((response) => response.json())
        .then((data) => dispatch(SET_CONTACT_DETAIL(data.data)))
    }
    fetchContactById(contact_id)
  }
}

export const SET_CONTACT = (data) => {
  return { type: 'SET_CONTACT', payload: data}
}

export const SET_FILTER_WORD = (data) => {
  return { type: 'SET_FILTER_WORD', payload: data }
}

export const SET_CONTACT_DETAIL = (data) => {
  return { type: 'SET_CONTACT_DETAIL', payload: data}
}

export const SET_FILTER_DATA = (data) => {
  return { type: 'SET_FILTER_DATA', payload: data }
}

const initialState = {
  contact: [],
  detailContact: {},
  filterWord: '',
  filterData: []
}


function reducer(state = initialState, action) {
  if(action.type === 'SET_CONTACT') {
    return { ...state, contact: action.payload};
  }

  if(action.type === 'SET_FILTER_WORD') {
    return { ...state, filterWord: action.payload};
  }

  if(action.type === 'SET_FILTER_DATA') {
    return { ...state, filterData: action.payload};
  }

  if(action.type === 'SET_CONTACT_DETAIL') {
    return { ...state, detailContact: action.payload};
  }
  return state;
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(applyMiddleware(thunk)));

export default store;
