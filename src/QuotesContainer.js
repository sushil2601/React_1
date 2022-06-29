import React,{ useState,useEffect } from 'react'
import QuoteList from './QuoteList'
import AddQuote from './AddQuote'
import QuoteForm from './QuoteForm'

const QuotesContainer = (props) => {
    const [quotes, setQuotes] = useState([])

    useEffect(()=>{
        // console.log(localStorage.getItem('quotes'))
        const result = JSON.parse(localStorage.getItem('quotes')) || []
        setQuotes(result)

    },[])

    useEffect(()=>{
        localStorage.setItem('quotes',JSON.stringify(quotes))
    },[quotes])

    const addItem = (quote) =>{

        // console.log('container',quote)
        const result = [quote,...quotes]
        setQuotes(result)

    }

    const removeItem = (id) => {
        // console.log('container',id)
        const result = quotes.filter((quote)=>{
            return quote.id !== id
        })
        setQuotes(result)
    }

    const editItem = (quote) => {
        const result = quotes.map((q)=>{
            if(q.id === quote.id){
                return {...q, ...quote}
            }else{
                return {...q}
            }
        })
        setQuotes(result)
    }

    return(

        <div>
            QuotesContainer
            <QuoteList 
            quotes={quotes} 
            removeItem={removeItem}
            editItem = {editItem}
            />
            <AddQuote addItem={addItem}/>
            {/* <QuoteForm addItem={addItem}/> */}
        </div>
    )
}

export default QuotesContainer