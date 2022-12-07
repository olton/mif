import "../css/mif-base.less"
import "../css/mif-icons.less"
import React, {FC} from "react";

interface IMifIcon {
    name: string,
    size?: string,
    className?: string
}

const MifIcon: FC<IMifIcon> = ({name, size, className}) => {
    const classes = [
        className ? className : '',
        `mif-${name}`,
        size ? `mif-${size}` : ''
    ].join(" ")
    return (
        <span className={classes}></span>
    )
}

export default MifIcon