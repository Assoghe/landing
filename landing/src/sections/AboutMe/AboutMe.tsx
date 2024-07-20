import { aboutMe } from "../../data/constants"
import BlockText from "../../design system/BlockText/BlockText"

export const AboutMe = () => {
    return (
        <>
            {
                aboutMe.map((aboutMeItem) => (
                    <BlockText
                        title={aboutMeItem.title}
                        body={aboutMeItem.body}
                    />
                ))
            }
        </>
    );
}
