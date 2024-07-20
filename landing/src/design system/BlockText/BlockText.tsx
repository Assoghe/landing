import { Typography } from '../Typography/Typography'
import Divider from '../Divider/Divider'

interface BlockTextProps {
    title: string;
    body: string;
}

const BlockText: React.FC<BlockTextProps> = ({ title, body }) => {

    return (
        <div className='tablet:mx-52 bg-neutral-900 rounded-3xl tablet:my-60 my-24 mx-6'>
            <div className='tablet:p-20 p-10'>
                <Typography variant='h2' component='h2'>
                    {title}
                </Typography>
                <Divider />
                <Typography variant='body-one' component='p'>
                    {body}
                </Typography>
            </div>
        </div>
    )
}

export default BlockText;