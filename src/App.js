import './App.css';
import { connect } from 'react-redux';
import { loadMoreAPI, searchAPI, getBook } from "./redux/search-reducer"
import Search from './components/Search/Search';
import Books from './components/Books/Books';
import { Route } from 'react-router-dom';
import Book from './components/Book/Book';


function App(props) {


  return (
    <div className="app">

      <Search searchAPI={props.searchAPI} />


      <Route path='/books/' render={() => <Books getBook={props.getBook} totalItems={props.totalItems}  end={props.end} settingsSearch={props.settingsSearch} loadMoreAPI={props.loadMoreAPI} resultSearch={props.resultSearch} />} />
      <Route path='/book/:id' render={() => <Book book={props.book} />} />

    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    resultSearch: state.search.resultSearch,
    settingsSearch: state.search.settingsSearch,
    end: state.search.end,
    totalItems: state.search.totalItems,
    book: state.search.book
  }
}
export default  connect(mapStateToProps, { loadMoreAPI, searchAPI, getBook })
(App) ;

