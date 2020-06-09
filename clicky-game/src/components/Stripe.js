import React from 'react'

export default function Stripe() {
    return (
        <div id="stripe">
            <button id="reset">New Colors</button>
            <span id="message"></span>
            <button id="easyBtn">Easy</button>
            <button id="hardBtn" className="selected">Hard</button>
	    </div>
    )
}
