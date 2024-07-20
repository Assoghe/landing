import { Tag } from "../../design system/Tag/Tag"
import { Typography } from "../../design system/Typography/Typography"
import { Button } from "../../design system/button/Button"

export const Herosection = () => {
    return (
        <div className="bg-cover h-screen bg-[url('./assets/img/herosection.png')]">
            <div className="h-screen w-6/12 flex flex-col justify-center mx-64">
                <Tag variant="default">
                    Livre blanc
                </Tag>

                <Typography variant='h1' component='h1' className='text-neutral-100 mt-9 mb-12'>
                    Intégrer efficacement une maquette web tout en affrontant les défis liés au développement web
                </Typography>
                <Button />
            </div>
        </div>
    )
}
