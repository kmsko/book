import React from 'react';
import { Field, Form, Formik } from 'formik';
import search_png from "../../assets/image/search.png"
import {  useHistory } from 'react-router-dom';

const Search = (props) => {

    const history = useHistory()
    return <div className="form_search">
        <div>Search for books</div>
        <Formik
            initialValues={{ textBooks: '', categories: '', sortingBy: '' }}
            onSubmit={(values, { setSubmitting }) => {
                if (!values.sortingBy) values.sortingBy = "relevance"
                let params = { textBooks: values.textBooks, categories: `+subject:${values.categories}`, sortingBy: values.sortingBy }
                if (params.categories === `+subject:` || params.categories === `+subject:all`) params.categories = ""
                props.searchAPI(params)
                setSubmitting(false);
            }}
        >
            {
                <Form className="search_block">
                    <div>Поиск:
                        <Field className="search_text_book" type="text" name="textBooks" placeholder="Введите название книги" />
                    </div>
                    <div>Категории:
                        <Field className="search_categories" name="categories" component="select" >
                            <option value="all">all</option>
                            <option value="art">art</option>
                            <option value="biography">biography</option>
                            <option value="computers">computers</option>
                            <option value="history">history</option>
                            <option value="medical">medical</option>
                            <option value="poetry">poetry</option>
                        </Field>
                    </div>
                    <div >Сортировка:
                        <Field className="search_sorting" name="sortingBy" component="select">
                            <option value="relevance">relevance</option>
                            <option value="newest">newest</option>
                        </Field>
                    </div>
                    <button onClick={()=>history.push('/books')} className="search_submit" >
                        <img src={search_png} alt="" />Найти
                    </button>
                </Form>
            }
        </Formik>
    </div>
}

export default Search
