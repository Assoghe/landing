import { findText } from '../../data/constants'
import TypographySection from '../../components/TypographySection/TypographySection'

export const FindTitleText = () => {
  return (
      <div>{
          findText.map((findTextItem) => (
              <TypographySection
                  title={findTextItem.title}
                  body={findTextItem.body}
              />
          ))
      }</div>
  )
}
