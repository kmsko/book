import React from 'react';
import { useHistory } from 'react-router-dom';

import default_img_book from "../../assets/image/default_img_book.jpg"
import Preloader from '../Preloader/Preloader';





const Books = (props) => {

    const history = useHistory()

    const goToBook = (e) => {
        history.push('/book/' + e.id);
        props.getBook(e.id)
    }

    let loadMore = () => {
        props.loadMoreAPI({
            startIndex: props.settingsSearch.startIndex + 30,
            textTitl: props.settingsSearch.textTitl,
            categories: props.settingsSearch.categories,
            sorting: props.settingsSearch.sorting
        })

    }

    return <div >
        {props.resultSearch === true ? <Preloader /> : <div className="section_search_item">
            <div className="total_book">Всего нашлось: <span className="total_book__bold">{props.totalItems}</span>  книг</div>
            <div className="wrapper_card_book">
                {!props.resultSearch ? <div></div> : props.resultSearch.map((e) => {
                    return <div onClick={() => goToBook(e)} key={e.id} className="card_book">
                        <div>
                            <img className="image_book" src={!e.volumeInfo.imageLinks ? default_img_book : e.volumeInfo.imageLinks.thumbnail} alt="1" />
                        </div>

                        <div className="card_book_categories">Категория: {!e.volumeInfo.categories ? "" : e.volumeInfo.categories[0]}</div>
                        <div className="card_book_title">Название: {!e.volumeInfo.title ? "" : e.volumeInfo.title}</div>
                        <div className="card_book_authors">Автор: {!e.volumeInfo.authors ? "" : e.volumeInfo.authors.join(', ')}</div>
                    </div>
                })
                }


            </div>
        </div>}


        {props.end === false && props.resultSearch ? <div className="load_more_wrapper"><button className="load_more" onClick={loadMore}>Load more</button></div> : <div>{props.end}</div>}
    </div>
}
export default Books