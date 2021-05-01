import React from 'react'

const Card = (props) => {



    const numArr = [1,2,3]
    return (
        <div className ='Cards'>
            {
                numArr.map((number, index) => (
                    <div key={index}>
                        <h1>This is a card component</h1>
                        <img src='' alt=""/>
                        <button>LINK ME</button>
                    </div>
                ))
            }
        </div>
    )  
}

export default Card