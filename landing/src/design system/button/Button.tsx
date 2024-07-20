import React from "react";
import clsx from "clsx";
import { LinkType, LinkTypes } from "../../libs/link-type";

interface Props {
    variant?: "label";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
    action?: Function | string;
    baseUrl?: string;
    linkType?: LinkType;
    className?: string;
}

export const Button = ({
    variant = "label",
    disabled,
    baseUrl,
    linkType,
    action = () => { },
    className,
}: Props) => {

    let variantStyles: string = "", sizeStyles: string = "";

    switch (variant) {
        case "label":
            variantStyles = "text-2xl text-primary w-fit";
            break;
    }


    const handleClick = () => {
        if (typeof action === 'function') {
            action(); 
        } else if (typeof action === 'string') {
            window.open(action, '_blank'); 
        }
    };

    const buttonElement = (
        <button
            type="button"
            className={clsx(variantStyles, sizeStyles, className)}
            onClick={handleClick}
            disabled={disabled}
        >
            Lire le livre blanc
        </button>
    );

    if (baseUrl) {
        if (linkType === LinkTypes.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank">
                    {buttonElement}
                </a>
            );
        } else {
            return <a href={baseUrl}>{buttonElement}</a>;
        }
    }

    return buttonElement;
}
