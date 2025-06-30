import styles from './GlobalPage.module.css';

import Layout from "./Layout";
import { Section } from "../components/section/Section";
import { Collections } from "../components/collections/Collections";
import { DestaqueIcones } from "../components/destaqueIcones/DestaqueIcones";
import { Card } from "../components/card/Card";
import { OfertSpecials } from "../components/ofertSpecials/OfertSpecials";

import { Sliders } from "../components/slider/Sliders";
import { Filter } from './Filter';
import { ScrollPage } from '../components/scrollPage/ScrollPage';
export const Home = () => {
  return (
    <div>
      <Layout>

        <ScrollPage />

        <main className='wrapper'>
          <Sliders />

          <Section
            title="Coleção em destaque"
            alinhamento="text-left"
            size="fontStyle"
          >
            <Collections />
          </Section>

          <Section
            title="Coleção em destaque"
            alinhamento="text-center"
            size="fontStyle"
          >
            <DestaqueIcones />
          </Section>


          <Section
            title="Coleção em destaque"
            alinhamento="text-left"
            size="fontStyle"
          >

            <div className={styles.container__cards}>
              <Card />
            </div>


          </Section>

          <Section
            title="Coleção em destaque"
            alinhamento="text-left"
            size="fontStyle"
          >
            <OfertSpecials />

          </Section>
        </main>

      </Layout>
    </div>
  );
};
