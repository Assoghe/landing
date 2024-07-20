import { Typography } from "../../design system/Typography/Typography"

export const Herosection = () => {
    return (
        <div className="bg-cover h-screen bg-[url('./assets/img/herosection.png')]">
            <div className="h-screen w-6/12 flex flex-col justify-center mx-64">
                <span className="gap-5">Livre blanc</span>
                <Typography variant='h1' component='h1' className='text-neutral-100'>
                    Intégrer efficacement une maquette web tout en affrontant les défis liés au développement web
                </Typography>
                <button>Lire le livre blanc</button>
            </div>
        </div>
    )
}
