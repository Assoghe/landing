import IconBlock from '../../design system/BlockIcon/BlockIcon'
import { HiAcademicCap, HiCodeBracket, HiPencil } from 'react-icons/hi2'

export const ForWhoIcons = () => {
  return (
      <div className='tablet:flex gap-9 mx-6 tablet:px-52'>
          <div className="flex justify-center items-center w-full">
              <IconBlock icon={HiPencil} title="Designers" />
          </div>

          <div className="flex justify-center items-center w-full">
              <IconBlock icon={HiCodeBracket} title="Développeurs" />
          </div>


          <div className="flex justify-center items-center w-full">
              <IconBlock icon={HiAcademicCap} title="Etudiants" />
          </div>
      </div>
  )
}
