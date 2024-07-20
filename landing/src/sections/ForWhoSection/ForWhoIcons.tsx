import { forWhoIcons } from '../../data/constants'
import IconBlock from '../../design system/BlockIcon/BlockIcon'

export const ForWhoIcons = () => {
    return (
        <div className='gap-9 grid tablet:grid-cols-3 grid-cols-1'>
            {
                forWhoIcons.map((whoItem) => (
                    <div className="flex justify-center items-center w-full">
                        <IconBlock icon={whoItem.icon} title={whoItem.title} />
                    </div>
                ))
            }
        </div>
    )
}
