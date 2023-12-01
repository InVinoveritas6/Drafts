import React, { useEffect, useRef, useState } from 'react'

//Hooks
import { useOutsideClick } from '../../hooks/useOutsideClick';

//Style
import './CustomInputStyle.css'

const CustomInput = ({
    id,
    parentName,
    placeholder,
    label,
    type='text',
    value = '',
    setValue,
    error,
    errorText,
    disabled,
    required,
    onClick,
}) => {
    const [focus, setFocus] = useState(false);
    const [focusLabel, setFocusLabel] = useState(false);

    const customInputRef = useRef(null)

    const customId = `${parentName}_custom_input_${id}`

    useOutsideClick(customInputRef, setFocusLabel, !!value || placeholder)

    useEffect(() => {
        if(value || placeholder) {
            setFocusLabel(true)
        }
    }, [value, placeholder])

    const onFocus = (data) => {
        setFocus(data)
        setFocusLabel(data)
    }

    const handleClick = () => {
        onFocus(true)
        onClick && onClick()
    }

    const handleChange = (value) => {
        setValue && setValue(value)
    }

    return (
        <div id={customId} ref={customInputRef} className='custom-input' onClick={() => handleClick()}>
            {label && 
            <label for={id} className={focusLabel ? 'custom-input-label-focus' : 'custom-input-label'}>
                {label}
                {required && 
                    <span className='custom-input-label-required'>*</span>
                }
            </label>}
            <input 
                id={id} 
                name={id} 
                placeholder={placeholder}
                type={type} 
                value={value} 
                disabled={disabled}
                onChange={(e) => handleChange(e.target.value)} 
                onBlur={() => setFocus(false)} 
            />
            <span className={focus ? 'custom-input-span-focus' : 'custom-input-span'}></span>
            {error &&
            <span className='custom-input-span-error'>{errorText}</span>
            }
        </div>
        )
    };
       
export default CustomInput;