import { InterestImg } from "./InterestImg"
import { InterestTitleText } from "./InterestTitleText"

export const InterestSection = () => {
    return (
        <div className="p-6 tablet:p-52" id="interest-section">
            <InterestTitleText />
            <InterestImg/>
        </div>
    )
}
