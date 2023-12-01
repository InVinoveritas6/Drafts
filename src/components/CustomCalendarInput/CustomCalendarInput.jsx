import React, { useRef, useState } from 'react'
import Datetime from 'react-datetime'
import Moment from "moment";


//Components
import CustomInput from '../CustomInput/CustomInput';

//Hooks
import { useOutsideClick } from '../../hooks/useOutsideClick';

//Style
import './CustomCalendarInputStyle.css'

const CustomCalendarInput = ({
    value,
    setValue,
    label
}) => {
    const [openCalendar, setOpenCalendar] = useState(true)
    const calendarInputRef = useRef(null)

    const onChangeData = (data) => {
        const formatData = ['д', 'д', '.', 'м', 'м', '.', 'г', 'г', 'г', 'г']
        const newData = data.split('').map((el, i) => {
            formatData.splice(0, i + 1, data)
            return formatData
        })

        console.log(newData.length > 0 && newData[0].join(''));

        setValue(data)
    }

    // useOutsideClick(calendarInputRef, setOpenCalendar)


    function findUniq(array) {
         return array.sort()[0] === array.sort()[1] ? array.sort()[array.length - 1] : array.sort()[0]; 
      }
      
    console.log([3, 10, 3, 3, 3].sort());
    console.log(findUniq([3, 10, 3, 3, 3]));



    const renderInput = () => {
        return (
            <CustomInput 
                value={value}
                setValue={onChangeData}
                label={label}
                placeholder={'дд.мм.гггг'}
                onClick={() => setOpenCalendar(true)}
            />
        )
    }


    return (
        <div ref={calendarInputRef} className='custom-calendar-input'>
            <Datetime
                renderInput={renderInput}
                className={openCalendar ? 'custom-calendar-input-datetime' : 'custom-calendar-input-datetime-close'}
                defaultValue
                onChange={(data) => {console.log(Moment(data).format()); setValue(Moment(data).format('DD.MM.YYYY'))}}
                onBlur={() => setOpenCalendar(false)}
            />
        </div>
        )
    };
       
export default CustomCalendarInput;