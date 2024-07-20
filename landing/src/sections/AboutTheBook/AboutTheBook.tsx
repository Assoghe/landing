import { aboutTheBook } from '../../data/constants';
import BlockText from '../../design system/BlockText/BlockText'

export const AboutTheBook= () => {
  return (
    <>
      {
        aboutTheBook.map((bookItem) => (
          <BlockText
            title={bookItem.title}
            body={bookItem.body}
          />
        ))
      }
    </>
  );
}