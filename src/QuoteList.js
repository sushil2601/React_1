import React from 'react'
import QuotesItem from './QuotesItem'

const QuoteList = (props) =>{
    const { quotes,removeItem, editItem } = props

    return(
        <div>
            {

                quotes.length === 0 ? (
                    <div>
                        <h1>No quotes found</h1>
                        <p> Add your first Quote</p>
                    </div>

                ):(
                    <div>
                        <h1>My quotes - {quotes.length}</h1>
                        {quotes.map((quote)=>{
                            return <QuotesItem 
                            key={quote.id} 
                            {...quote} 
                            removeItem={removeItem}
                            editItem={editItem}
                            />
                        })}
                    </div>
                )
            }
        </div>
    )

}

export default QuoteList