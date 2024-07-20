import { Typography } from '../../design system/Typography/Typography'
import { Button } from '../../design system/button/Button'

export const ForWhoSection = () => {
    return (
        <div className='mx-6 tablet:mx-64'>
            <div className='tablet:flex'>
                <Typography variant='h2' component='h2'className='w-[550px] mr-9 mb-6'>
                    Ce livre blanc est pour ...
                </Typography>
                <div>
                    <Typography variant='body-one' component='p' className='mb-9'>
                        Cette landing page est le résultat direct du projet décrit dans le livre blanc. Il a été réalisé pour illustrer les des pratiques en design, livraison et développement. Elle met en œuvre les concepts clés abordés dans notre guide.
                    </Typography>
                    <Button />
                </div>
            </div>

        </div>
    )
}
