import React, {useState} from 'react'
import SvgComponent from '../svgComponent/SvgComponent'
import './dropdown.scss'

export default function Dropdown({title, content}) {
    const  [show, setShow] = useState(false)
    const isNotEmptyArray = (el) => Array.isArray(el) && !!el.length;
 
    return (
        <div className='dropdown'>
            <div className="dropdown__title">
                <span>{title}</span>
                <span onClick={() => setShow(!show)} className={`dropdown__btn ${show ? "rotate" : ''}`}>
                    <SvgComponent
                        name="arrowDown"
                        className='fill-white'
                    ></SvgComponent>
                </span>
            </div>
            { !show & !isNotEmptyArray(content) &&
                <div className="dropdown__content">
                    {content}
                </div>
            }
            { !show & isNotEmptyArray(content) &&
                <ul className="dropdown__content">
                {content.map((el, elIndex) => (
                    <li key={elIndex}>{el}</li>
                ))}
                </ul> 
            }
        </div>
    )
}

