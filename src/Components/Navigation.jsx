import React, { Fragment } from 'react'
import images from '../images'

function Navigation() {
    return (
        <>
            <nav>
                <img src={images.burger} alt="" />
                <ul>
                    <li><a href="">Все туры</a></li>
                    <li><a href="">Отзывы</a></li>
                    <li><a href="">Контакты</a></li>
                </ul>
                {/* <img src="" alt="" /> */}
            </nav>
        </>
    )
}

export default Navigation