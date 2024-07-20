import IconBlock from '../../design system/BlockIcon/BlockIcon'
import { HiAcademicCap, HiCodeBracket, HiPencil } from 'react-icons/hi2'

export const ForWhoIcons = () => {
  return (
      <div className='gap-9 grid tablet:grid-cols-3 grid-cols-1'>
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
