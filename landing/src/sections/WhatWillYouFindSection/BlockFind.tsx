import { findBlock } from '../../data/constants'
import CardText from '../../design system/CardText/CardText'

export const BlockWhatFind = () => {
  return (
    <div className='grid tablet:grid-cols-3 grid-cols-1 gap-9'>
      {
        findBlock.map((findBlockItem) => (
          <CardText
            title={findBlockItem.title}
            text={findBlockItem.body}
          />
        ))
      }

    </div>
  )
}
