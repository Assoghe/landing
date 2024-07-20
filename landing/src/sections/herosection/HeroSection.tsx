import { Tag } from "../../design system/Tag/Tag"
import { Typography } from "../../design system/Typography/Typography"

export const Herosection = () => {
    return (
        <div className="bg-cover h-screen bg-[url('./img/herosection.png')]">
            <div className="h-screen tablet:w-2/6 flex flex-col justify-center mx-6 tablet:mx-52">
                <Tag variant="default">
                    Livre blanc
                </Tag>

                <Typography variant='h1' component='h1' className='text-neutral-100 mt-9 mb-12'>
                    Intégrer efficacement une maquette web tout en affrontant les défis liés au développement web
                </Typography>
            </div>
        </div>
    )
}
