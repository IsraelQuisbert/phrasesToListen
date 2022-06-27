import React, { useState } from 'react';
import prhases from '../quotes.json'
import Button from './Button';

const QuoteBox = () => {

    const colors = ["red", "cornflowerblue", "aqua", "limegreen", "yellowgreen", "blueviolet", "green", "black"]
    const random = Math.floor(Math.random() * prhases.length)
    const [quote, setQuote] = useState(random)

    const change = () => {
        const random = Math.floor(Math.random() * prhases.length)
        setQuote(random)
    }

    const randomColors = Math.floor( Math.random() * colors.length )
    document.body.style = `background: ${colors[randomColors]}`

    return (
        <div className='body'>
            
            <div className="container">

                <div className="prhase">
                    <h2 style={{color: colors[randomColors]}}>
                    " {prhases[quote].quote} "
                    </h2>
                </div>

                <div className="button">
                    <h3 style={{color: colors[randomColors]}}>
                    {prhases[quote].author}. 
                    </h3>

                    <Button clicks={change} styles={{background: colors[randomColors]}} />
                </div>

            </div>
        </div>
    );
};

export default QuoteBox;