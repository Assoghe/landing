import React from 'react';
import clsx from "clsx";
import { Typography } from '../Typography/Typography';

interface Props {
    variant?: "default";
    children: React.ReactNode;
}

export const Tag = ({
    variant = "default",
    children
}: Props) => {
    let variantStyle: string = "";

    switch (variant) {
        case "default":
            variantStyle = "w-fit  px-4 py-3 tablet:px-6 text-neutral-50 bg-neutral-800 rounded-full";
            break;
    }

    return (
        <div className={clsx(variantStyle)}>
            <Typography variant='body-one' component='p'>{children} </Typography>
        </div>
    )
}

