import TypographySection from '../../components/TypographySection/TypographySection'
import { forWho } from '../../data/constants'
import { ForWhoIcons } from './ForWhoIcons'

export const ForWhoSection = () => {
    return (
        <div className='tablet:py-60 py-24'>
            <div className='px-6 tablet:px-52'>
                <div className="w-full">
                    {
                        forWho.map((whoItem) => (
                            <TypographySection
                                title={whoItem.title}
                                body={whoItem.body}
                            />
                        ))
                    }
                </div>
                <ForWhoIcons />
            </div>
            <div>
            </div>
        </div>
    )
}
