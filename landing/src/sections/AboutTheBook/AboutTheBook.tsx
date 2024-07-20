import Divider from '../../design system/Divider/Divider'
import { Typography } from '../../design system/Typography/Typography'

export const AboutTheBook = () => {
  return (
      <div className='tablet:mx-64 bg-neutral-900 rounded-3xl my-60 mx-6'>
        <div className='tablet:p-20 p-10'>
              <Typography variant='h2' component='h2'>
                  A propos de ce livre blanc
              </Typography>
              <Divider/>
              <Typography variant='body-one' component='p'>
                  Cette landing page est le résultat direct du projet décrit dans le livre blanc. Il a été réalisé pour illustrer les des pratiques en design, livraison et développement. Elle met en œuvre les concepts clés abordés dans notre guide.
              </Typography>
        </div>
    </div>
  )
}
