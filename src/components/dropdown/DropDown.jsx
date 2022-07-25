import React, {useState} from 'react'
import SvgComponent from '../svgComponent/SvgComponent'
import './dropdown.scss'

export default function Dropdown({title, content, open = true}) {
    const  [show, setShow] = useState(open)
    const isNotEmptyArray = (el) => Array.isArray(el) && !!el.length;
    console.log('test', isNotEmptyArray(content))
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
            <div className={`dropdown__content ${show ? "fadein" : null}`}>
                { typeof content === 'string' &&
                    <p className='dropdown__content__text'>{content}</p>
                }
                { isNotEmptyArray(content) &&
                    <ul className='dropdown__content__text'>
                        {content.map((el, elIndex) => (
                            <li key={elIndex}>{el}</li>
                        ))}
                    </ul> 
                }
            </div>
        </div>
    )
}

