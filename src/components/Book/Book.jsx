import React from "react"
import default_img_book from "../../assets/image/default_img_book.jpg"
import Preloader from "../Preloader/Preloader"


const Book = (props) => {
    return <div>
        {props.book === false ? <Preloader /> : props.book === null ?  <div>книга не выбрана</div> : <div className="wrapper_book">
            <div className="image_book_wrapper">
                <img className="image_book" src={!props.book.imageLinks ? default_img_book : props.book.imageLinks.thumbnail} alt="1" />

            </div>
            <div className="annotation_book">
                <div>Категории:&nbsp;
                    {!props.book.categories ? <span >Категории нет</span> : props.book.categories.map((e) => {
                        return <span > {e} </span>
                    }
                    )}
                </div>
                <div> Заголовок:&nbsp;
                    {!props.book.title ? <div >Нет заголовка</div> : <span >{props.book.title}</span>}
                </div>
                <div>Автор:&nbsp;
                    {!props.book.authors ? <div >Автор ненайден</div> : props.book.authors.map((author) => {
                        return <span >{author}</span>
                    })
                    }
                </div>
                <div className="description_book"> Описание:&nbsp;
                    {!props.book.description ? <div >Нет описания</div> :<span dangerouslySetInnerHTML={{ __html: props.book.description }} />}
                </div>
            </div>
        </div>}
    </div>
}
export default Book