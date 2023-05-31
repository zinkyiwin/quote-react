import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { useLoadingContext, useLoadingUpdateContext } from '../providers/LoadingProvider';

function Quote() {

    const [quotes, setQuotes] = useState([])

    const isLoading = useLoadingContext();
    const updateLoading = useLoadingUpdateContext();
    
    useEffect(() => {
        const fetchQuotes = () => {
            const myHeaders = new Headers();
            myHeaders.append("X-Api-Key", "84poVMdQ0kJw4QsNJgUwJw==xM5yzUGeSDghVFn4");

            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            fetch("https://api.api-ninjas.com/v1/quotes?limit=10", requestOptions)
                .then(response => response.json())
                .then(result => {
                    setQuotes(result)
                    updateLoading(false);                 
                })
                .catch(error => console.log('error', error));
        }

        fetchQuotes()
        

        setTimeout(() => console.log(isLoading, "JfdfgdJ"), 2000)

    }, [])

    return (
        <div>

            {!isLoading ? quotes && quotes.map((quote, index) => (
                <div className='row ' key={index}>
                    <div className='col gy-3'>
                        <div className='card h-100 '>
                            <h1 className='card-header'>{quote.category}</h1>
                            <p className='card-body'>{quote.quote}</p>
                            <h3 className='card-footer text-end'>{quote.author}</h3>
                        </div>
                    </div>
                </div>
            )) :
                (<div className="text-center">
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>)
            }

        </div>
    )
}

export default Quote;