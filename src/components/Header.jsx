import React from 'react'
import Navs from './Navs'
import Form from './Form'

const Header = (props) => {
    return (
        <div>
            <div className = 'not-mobile'>
                <Navs />
            </div>
            <Form />
        </div>
    )
}
export default Header