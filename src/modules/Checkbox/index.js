import React from "react";
import { FormCheck } from "react-bootstrap";

const Checkbox = ({
    className = "",
    checked = false,
    style = {},
    label,
    onChange,
    size = 18,
    ...rest
}) => {
    const handleClick = () => {
        !rest.disabled && onChange?.(checked);
    };

    return (
        <div
            className={className}
            style={{
                display: "flex",
                alignItems: "center",
                height: `${size}px`,
                ...style,
            }}
        >
            <FormCheck
                {...rest}
                id="test"
                checked={checked}
                onChange={handleClick}
                className="custom-cbox"
            />
            {/* label deer darah ved index olj chadahgvi bsan FormCheck label ashiglaagvi bolno */}
            {label && (
                <span
                    htmlFor="test"
                    onClick={handleClick}
                    style={{
                        cursor: "pointer",
                        userSelect: "none",
                        position: "relative",
                        left: 15,
                    }}
                >
                    {label}
                </span>
            )}
        </div>
    );
};

export default Checkbox;
