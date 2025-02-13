import React, { forwardRef, useEffect, useState } from "react";
import Picker from "react-datepicker";
import format from "date-fns/format";
import { useTranslation } from "react-i18next";
import mn from "./mn";
import CustomHeader from "./CustomHeader";

const CustomInput = forwardRef(({ value, onClick, className = "" }, ref) => {
    const { t } = useTranslation();

    return (
        <button
            onClick={onClick}
            ref={ref}
            className={className}
            style={{ fontSize: value ? undefined : 14 }}
        >
            {value || t("errorMessage.selectDate")}
        </button>
    );
});

const DatePicker = ({
    buttonClassName = "",
    className = "",
    wrapperClassName = "",
    value,
    onChange,
    isCustomButton,
    selectedDate,
    showTimeInput = true,
    showTimeSelect = false,
    ...rest
}) => {
    const [date, setDate] = useState(null);

    const handleChange = (date, e) => {
        if (date) {
            try {
                const formatted = showTimeInput || showTimeSelect ? format(date, "yyyy-MM-dd HH:mm") : format(date, "yyyy-MM-dd");

                onChange?.(formatted, date, e);
                setDate(date);
            } catch (e) {
            }
        }
    };

    useEffect(() => {
        setDate(selectedDate)
    }, [selectedDate])

    return (
        <Picker
            locale={mn}
            adjustDateOnChange={false}
            selected={
                date ? new Date(date) : selectedDate ? new Date(selectedDate) : null
            }
            customInput={
                isCustomButton === false ? (
                    false
                ) : (
                    <CustomInput className={buttonClassName} />
                )
            }
            timeFormat='HH:mm'
            timeIntervals='1'
            selectsStart={false}
            selectsEnd={false}
            dateFormat={showTimeInput || showTimeSelect ? "yyyy-MM-dd HH:mm" : "yyyy-MM-dd"}
            onChange={handleChange}
            previousMonthButtonLabel="Өмнөх сар"
            nextMonthButtonLabel="Дараагийн сар"
            className={className ? className : "modal-input"}
            wrapperClassName={wrapperClassName ? wrapperClassName : ""}
            renderCustomHeader={CustomHeader}
            showTimeInput={showTimeInput}
            showTimeSelect={showTimeSelect}
            {...rest}
        />
    );
};

export default DatePicker;
