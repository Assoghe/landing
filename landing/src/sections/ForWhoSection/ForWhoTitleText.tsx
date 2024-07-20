import TypographySection from "../../components/TypographySection/TypographySection"
import { forWho } from "../../data/constants"

export const ForWhoTitleText = () => {
  return (
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
  )
}
