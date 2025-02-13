import React, {forwardRef, useState, useEffect} from 'react';
import mn from '../DatePicker/mn';
import DatePicker from "react-datepicker";
import TimePicker from "./TimePicker";

const CustomIcon = forwardRef(({ onClick, className = '' }, ref) => {
    return (
        <button
            ref={ref}
            className={className}
            onClick={onClick}
            style={{border: '1px solid #919bc0'}}
        >
            <i className="text-dark-50 flaticon2-calendar-9"/>
        </button>
    )
});

const TimePickerRange = ({
    onChange,
    selectedStartTime,
    selectedEndTime,
    isClear,
    ...rest
}) => {
    const [startTime, setStartTime] = useState(undefined);
    const [endTime, setEndTime] = useState(undefined);
    const [array] = useState([{
        startTime: null,
        endTime: null,
    }]);

    useEffect(() => {
        setStartTime(undefined);
        setEndTime(undefined);
        array[0].startTime = null;
        array[0].endTime = null;
        onChange(array);
    }, [isClear]);

    const handleStartDateChange = (date, e) => {
        if(date){
            setStartTime(date);
            array[0].startTime = date;
            onChange(array);
        }
    };

    const handleEndDateChange = (date, e) => {
        if(date){
            setEndTime(date);
            array[0].endTime = date;
            onChange(array);
        }
    };

    return (
        <div className='date-picker-range-container'>
            <TimePicker
                allowInput={true}
                inputClassName={'first-timepicker'}
                minStep={5}
                value={startTime ? startTime : selectedStartTime ? selectedStartTime : null}
                onChange={handleStartDateChange}
            />
            <DatePicker
                locale={mn}
                className='react-datepicker-with-icon p-0'
                customInput={<CustomIcon className={''} />}
                shouldCloseOnSelect={false}
                disabled={true}
                {...rest}
            />
            <TimePicker
                allowInput={true}
                inputClassName={'last-timepicker'}
                minStep={5}
                value={endTime ? endTime : selectedEndTime ? selectedEndTime : null}
                onChange={handleEndDateChange}
            />
        </div>
    );
};

export default TimePickerRange;