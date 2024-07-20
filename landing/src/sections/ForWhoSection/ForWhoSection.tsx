import IconBlock from '../../design system/BlockIcon/BlockIcon'
import { Typography } from '../../design system/Typography/Typography'
import { Button } from '../../design system/button/Button'
import { HiAcademicCap, HiCodeBracket, HiPencil, HiPresentationChartLine } from 'react-icons/hi2'

export const ForWhoSection = () => {
    return (
        <div className='mx-6 tablet:mx-64'>
            <div className='tablet:flex tablet:mb-24 mb-9'>
                <Typography variant='h2' component='h2' className='w-[550px] mr-9 mb-6'>
                    Ce livre blanc est pour ...
                </Typography>
                <div>
                    <Typography variant='body-one' component='p' className='mb-9'>
                        Cette landing page est le résultat direct du projet décrit dans le livre blanc. Il a été réalisé pour illustrer les des pratiques en design, livraison et développement. Elle met en œuvre les concepts clés abordés dans notre guide.
                    </Typography>
                    <Button />
                </div>
            </div>

            <div className='flex gap-9'>
                <div className="flex justify-center items-center w-full">
                    <IconBlock icon={HiPencil} title="Designers" />
                </div>

                <div className="flex justify-center items-center w-full">
                    <IconBlock icon={HiCodeBracket} title="Développeurs" />
                </div>

                <div className="flex justify-center items-center w-full">
                    <IconBlock icon={HiPresentationChartLine} title="Chefs de projet" />
                </div>

                <div className="flex justify-center items-center w-full">
                    <IconBlock icon={HiAcademicCap} title="Etudiants" />
                </div>
            </div>
        </div>


    )
}
