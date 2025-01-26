import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import { useColorMode } from "@docusaurus/theme-common";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Integração",
    Svg: require("@site/static/img/logo-color.svg").default,
    description: (
      <>
        O Integrador foi desenvolvido para integrar sistemas Guardiões da Saúde
        com o ePHEM
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  const { colorMode } = useColorMode();

  return (
    <div className={clsx("col")}>
      <div className="text--center">
        <Svg
          role="img"
          style={{
            width: "400px",
            height: "150px",
            filter:
              colorMode === "dark"
                ? "brightness(0) invert(1)" // Converte para branco puro
                : "brightness(0)", // Converte para preto puro
          }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
