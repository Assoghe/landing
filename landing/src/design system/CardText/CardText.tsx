import React from 'react';
import { Typography } from '../Typography/Typography';
import { Button } from '../button/Button';
import Divider from '../Divider/Divider';

interface CardTextProps {
    title: string;
    text: string;
}

const CardText: React.FC<CardTextProps> = ({ title, text }) => {
    return (
        <div className="border border-primary rounded-md flex flex-col py-12 px-12 w-full">
            <div className="flex-grow mb-9">
                <Typography component='h3' variant='h3' className='text-neutral break-words'>{title}</Typography>
                <Divider />
                <Typography component='p' variant='body-one' className='text-left'>{text}</Typography>
            </div>
            <Button />
        </div>
    );
};

export default CardText;
