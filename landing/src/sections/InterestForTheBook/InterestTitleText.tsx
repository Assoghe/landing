import TypographySection from "../../components/TypographySection/TypographySection"
import { interest } from "../../data/constants"

export const InterestTitleText = () => {
    return (
        <div className="w-full">
            {
                interest.map((interestItem) => (
                    <TypographySection
                        title={interestItem.title}
                        body={interestItem.body}
                    />
                ))
            }
        </div>
    )
}
