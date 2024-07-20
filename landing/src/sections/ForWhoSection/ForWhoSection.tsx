import TypographySection from '../../components/TypographySection/TypographySection'
import { ForWhoIcons } from './ForWhoIcons'

export const ForWhoSection = () => {
    return (
        <div className='tablet:py-44 py-24'>
            <div className='px-6 tablet:px-52 '>
                <div className="w-full">
                    <TypographySection
                        title="Ce livre blanc est pour ..."
                        body="Cette landing page est le résultat direct du projet décrit dans le livre blanc. Il a été réalisé pour illustrer les des pratiques en design, livraison et développement. Elle met en œuvre les concepts clés abordés dans notre guide."
                    />
                </div>    
                <ForWhoIcons />        
            </div>  
        </div>
    )
}
