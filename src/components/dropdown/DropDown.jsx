import React, {useState} from 'react'
import SvgComponent from '../svgComponent/SvgComponent'
import './dropdown.scss'

export default function Dropdown({title, content}) {
    const  [show, setShow] = useState(false)
 
    return (
        <div className='dropdown'>
            <div className="dropdown__title">
                <span>{title}</span>
                <span onClick={() => setShow(!show)}>
                    <SvgComponent
                        name="arrowDown"
                        className='fill-white'
                    ></SvgComponent>
                </span>
            </div>
            { show && 
                <div className="dropdown__content">
                    {content}
                </div>
            }
        </div>
    )
}

