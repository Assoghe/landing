import TypographySection from "../../components/TypographySection/TypographySection"
import BlockFind from "./BlockFind"

export const FindSection = () => {
  return (
    <div className="tablet:mx-52 mx-6 tablet:my-60 my-24">
      <TypographySection
        title="Ce qu’on y retrouve ..."
        body="Plongez dans une exploration approfondie de la création et de l'intégration efficace de maquettes web. Ce livre blanc est conçu pour les designers et les développeurs qui cherchent à optimiser leur collaboration et à surmonter les défis du développement web. Vous découvrirez :"
      />
      <div className="gap-9 grid tablet:grid-cols-3 grid-cols-1">
        <BlockFind
          title="Le design"
          text="Découvrez des astuces pour structurer vos maquettes avec un design system et des design tokens, ainsi que d'autres outils pour faciliter la collaboration entre designers et développeurs." />
        <BlockFind
          title="La livraison"
          text="Découvrez des astuces pour livrer efficacement votre design et préparer vos maquettes pour une intégration fluide avec le DevMode de Figma." />
        <BlockFind
          title="Développement"
          text="Ce projet sera réalisé avec React JS, TypeScript et Tailwind CSS. Pour le déploiement de la landing page on va utiliser Vercel." />
      </div>
    </div>
  )
}
