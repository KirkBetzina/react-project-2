import React from 'react'
import Navs from './Navs'


const Header = (props) => {
    return (
        <div>
            <div className = 'not-mobile'>
                <Navs />
            </div>            
        </div>
    )
}
export default Header