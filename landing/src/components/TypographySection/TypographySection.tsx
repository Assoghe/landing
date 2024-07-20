import React from 'react';
import { Typography } from '../../design system/Typography/Typography';
import { Button } from '../../design system/button/Button';

interface TypographySectionProps {
    title: string;
    body: string;
    externalLink?: string;
    buttonTitle?: string; 
}

const TypographySection: React.FC<TypographySectionProps> = ({ title, body, externalLink, buttonTitle }) => {
    const scrollToInterestSection = () => {
        const section = document.getElementById('interest-section');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="tablet:flex tablet:mb-24 mb-9">
            <Typography variant="h2" component="h2" className="tablet:w-[600px] mr-9 mb-6 w-full">
                {title}
            </Typography>
            <div>
                <Typography variant="body-one" component="p" className="mb-9">
                    {body}
                </Typography>
                <Button onClick={externalLink ? undefined : scrollToInterestSection} externalLink={externalLink} title={buttonTitle}>
                    {buttonTitle} 
                </Button>
            </div>
        </div>
    );
};

export default TypographySection;