import React from "react";
import clsx from "clsx";
import { LinkType, LinkTypes } from "../../libs/link-type";

interface Props {
    variant?: "label";
    children?: React.ReactNode;
    action?: Function | string;
    baseUrl?: string;
    linkType?: LinkType;
    className?: string;
    onClick?: () => void;
    title?: string;
    externalLink?: string; 
}

export const Button = ({
    variant = "label",
    baseUrl,
    linkType,
    action = () => { },
    className,
    onClick,
    title = "Lire le livre blanc", 
    children,
    externalLink, 
}: Props) => {
    let variantStyles: string = "", sizeStyles: string = "";

    switch (variant) {
        case "label":
            variantStyles = "text-2xl text-primary text-left";
            break;
    }

    const handleClick = () => {
        if (externalLink) {
            window.open(externalLink, '_blank'); 
        } else if (onClick) {
            onClick();
        } else if (typeof action === 'function') {
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
        >
            {children || title}
        </button>
    );

    if (baseUrl && !externalLink) {
        if (linkType === LinkTypes.EXTERNAL) {
            return (
                <a href={baseUrl} target="_blank" rel="noopener noreferrer">
                    {buttonElement}
                </a>
            );
        } else {
            return <a href={baseUrl}>{buttonElement}</a>;
        }
    }

    return buttonElement;
};