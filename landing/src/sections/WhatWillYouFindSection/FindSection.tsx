import { BlockWhatFind } from "./BlockFind"
import { FindTitleText } from "./FindTitleText"

export const FindSection = () => {
  return (
    <div className="tablet:px-52 px-6 tablet:py-44 py-24 bg-neutral-950">
      <FindTitleText />
        <BlockWhatFind />
      </div>
  )
}
