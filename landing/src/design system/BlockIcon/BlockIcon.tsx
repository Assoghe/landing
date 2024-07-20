import React from 'react';
import { IconType } from 'react-icons';
import { Typography } from '../Typography/Typography';

interface IconBlockProps {
    icon: IconType;
    title: string;
}

const IconBlock: React.FC<IconBlockProps> = ({ icon: Icon, title }) => {
    return (
        <div className="border border-primary rounded-md flex flex-col items-center py-6 px-12 w-full h-full">
            <Icon className="text-primary h-12 w-12 mb-2" />
            <Typography component='h5' variant='h5' className='text-primary'>{title}</Typography>
        </div>
    );
};

export default IconBlock;