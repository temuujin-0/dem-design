import React, { useEffect, useState } from "react";
import ReactSelect, {
    type DropdownIndicatorProps,
    components,
    createFilter,
} from "react-select";
import { useTranslation } from "react-i18next";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export const Checkbox = ({ children, ...props }) => (
    <label style={{ marginRight: "1em" }}>
        <input type="checkbox" {...props} />
        {children}
    </label>
);

const Select = ({
    className = "",
    disabled = false,
    clearable = true,
    searchable = true,
    multiple = false,
    value = null,
    onChange,
    onInputChange,
    options = [],
    fillArrow = false,
    labelEntity = false,
    isArrow = true,
    defualtColor = false,
    style,
    ...rest
}) => {
    const { t } = useTranslation();
    const [ignoreCase, setIgnoreCase] = useState(true);
    const [ignoreAccents, setIgnoreAccents] = useState(true);
    const [trim, setTrim] = useState(true);
    const [matchFromStart, setMatchFromStart] = useState(true);

    const handleChange = (value, evt) => {
        if (evt?.action === "select-option" || evt?.action === "remove-value") {
            if (value?.constructor === Array) {
                const values = value.map((option) => option.value);
                onChange?.(values, evt, value);
            } else {
                if (value) {
                    const id = value.value;
                    onChange?.(id, evt, value);
                } else {
                    onChange?.(multiple ? [] : null, evt, value);
                }
            }
        } else if (evt?.action === "clear") {
            onChange?.(null, evt, null);
        }
    };

    const handleInputChange = (inputValue, actionMeta) => {
        onInputChange?.(inputValue);
    };

    const getIsSelected = (option) => {
        if (value) {
            if (value.constructor === Array) {
                return value.includes(option.value);
            } else if (typeof value === "number") {
                return value === option.value;
            } else if (typeof value === "string") {
                return value === option.value;
            } else {
                return false;
            }
        }
        return false;
    };

    const getValue = () => {
        if (!value) {
            return null;
        }
        if (multiple) {
            const array = [];
            for (const option of options) {
                if (value.includes(option.value)) {
                    array.push(option);
                }
            }
            return array;
        } else {
            const option = options.find((opt) => opt.value === value);
            if (option) {
                return option;
            }
            return null;
        }
    };

    const DropdownIndicator: React.FC<DropdownIndicatorProps> = (props) => {
        return (
            <components.DropdownIndicator {...props}>
                <KeyboardArrowDownIcon />
            </components.DropdownIndicator>
        );
    };

    const filterConfig = {
        matchFrom: "any",
    };

    const colourStyles = {
        option: (base, state) => ({
            ...base,
            cursor: 'pointer',
            color: '#575962',
            backgroundColor: 'white',
            ':active': {
                color: '#FF7900',
            },
            '&:hover': {
                color: '#FF7900',
            },
        }),
        control: (baseStyles, state) => ({
            ...baseStyles,
            color: defualtColor ? '#575962' : '',
            justifyContent: 'end',
            borderColor: '#0000001F',
            boxShadow: 'none',
            '&:hover': {
                border: '1px solid #FF7900',
            },
            cursor: 'pointer',
        }),
        placeholder: (defaultStyles) => {
            return {
                ...defaultStyles,
                marginLeft: 0,
                marginRight: 0,
            }
        },
        dropdownIndicator: (base, state) => ({
            ...base,
            ':hover': {
                color: '#FF7900',
            },
        }),
        container: (base) => ({
            ...base,
        }),
    };

    return (
        <>
            <ReactSelect
                styles={colourStyles}
                className={`eschool-select ${className}`}
                isDisabled={disabled}
                isClearable={clearable}
                ignoreCase={true}
                ignoreAccents={true}
                trim={true}
                isSearchable={searchable}
                isMulti={multiple}
                value={getValue()}
                onChange={handleChange}
                onInputChange={handleInputChange}
                options={options}
                getOptionLabel={(option) => {
                    if (labelEntity) {
                        return <div dangerouslySetInnerHTML={{ __html: option.text }} />;
                    }
                    return option?.text || "-";
                }}
                isOptionSelected={getIsSelected}
                placeholder={rest?.placeholder || `${t("common.select")}...`}
                components={
                    isArrow
                        ? {
                            IndicatorSeparator: () => null,
                            DropdownIndicator,
                        }
                        : {
                            DropdownIndicator: () => null,
                            IndicatorSeperator: () => null,
                        }
                }
                filterOption={createFilter(filterConfig)}
                {...rest}
            />
        </>
    );
};

export default Select;
