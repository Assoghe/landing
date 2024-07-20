import React from 'react';
import { Typography } from '../../design system/Typography/Typography';
import { Button } from '../../design system/button/Button';
import Divider from '../../design system/Divider/Divider';

interface IconBlockProps {
    title: string;
    text: string;

}

const BlockFind: React.FC<IconBlockProps> = ({ title, text }) => {
    return (
        <div className="border border-primary rounded-md flex flex-col py-6 px-12 w-full h-full">
            <Typography component='h3' variant='h3' className='text-neutral'>{title}</Typography>
            <Divider/>
            <Typography component='p' variant='body-one' className=''>{text}</Typography>
            <Button/>
        </div>
    );
};

export default BlockFind;