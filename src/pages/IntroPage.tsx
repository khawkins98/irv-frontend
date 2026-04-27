import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';

import { AppLinkButton, ExtLink } from '@/lib/nav';

import {
  ArticleContainer,
  ArticleContentContainer,
  ArticleParagraph,
  ArticleSection,
  EmphasisTextContainer,
  EmphasisTextParagraph,
  MiniBar,
} from './ui/ArticleContainer';
import { Card } from './ui/Card';
import { HeadingBox, HeadingBoxText } from './ui/HeadingBox';

export const IntroPage = () => {
  return (
    <ArticleContainer>
      <HeadingBox>
        <HeadingBoxText>GRAR Metrics Facility</HeadingBoxText>
      </HeadingBox>

      <div className="home" style={{ height: '16rem' }}></div>

      <ArticleContentContainer>
        <ArticleSection>
          <EmphasisTextContainer>
            <MiniBar />
            <EmphasisTextParagraph>
              The GRAR Metrics Facility visualizes multi-hazard risk across 8 natural
              hazards: earthquake, flooding, cyclone, tsunami, extreme heat, drought, and
              landslide.
            </EmphasisTextParagraph>

            <EmphasisTextParagraph>
              The platform reports Average Annual Loss (AAL) and Probable Maximum Loss (PML),
              so users can compare risk across hazards, sectors, and geographies.
            </EmphasisTextParagraph>
          </EmphasisTextContainer>
          <ArticleParagraph>
            Built on the open-source Global Infrastructure Resilience (GRI) platform developed by
            the Oxford Programme for Sustainable Infrastructure Systems (OPSIS) and collaborators,
            this tool combines data from GEM (earthquake risk), GIRI/UNEP (multi-hazard
            infrastructure risk), JRC (flooding and population), and other global datasets.
          </ArticleParagraph>
          <ArticleParagraph>
            The platform supports high-level screening of risks to assets and populations. Data
            coverage is expanding beyond infrastructure to include agriculture, housing, and other
            sectors.
          </ArticleParagraph>
          <ArticleParagraph>
            The International Panel on Climate Change (IPCC) defines risk as "the potential for
            adverse consequences for human or ecological systems, recognising the diversity of
            values and objectives associated with such systems" (
            <ExtLink href="https://www.ipcc.ch/report/ar6/wg2/chapter/chapter-16/">
              AR6 report
            </ExtLink>
            ). Climate-related risks result from the intersection of hazards, exposure, and
            vulnerability, all of which can be explored on this platform.
          </ArticleParagraph>

          <Stack
            direction={{ sm: 'column', md: 'row' }}
            flexWrap="wrap"
            useFlexGap={true}
            justifyContent="center"
            alignItems="top"
            spacing={2}
            sx={{ margin: '32px 0 !important' }}
          >
            {/* UNDRR: Cards reframed around AAL/PML focus; Vulnerability card removed */}
            <Card
              image="./card-hazard.png"
              title="Hazard"
              href="/view/hazard"
              text="Browse hazard intensity maps across 8 natural hazards, the input data behind AAL and PML calculations"
            />
            <Card
              image="./card-exposure.png"
              href="/view/exposure"
              title="Exposure"
              text="See where population and infrastructure assets overlap with natural hazard zones"
            />
            <Card
              image="./card-risk.png"
              href="/view/risk"
              title="Risk & Resilience"
              text="View Average Annual Loss (AAL) and Probable Maximum Loss (PML) for infrastructure and populations across multiple hazards"
            />
          </Stack>
          <AppLinkButton
            variant="contained"
            size="large"
            to="/view/hazard"
            sx={{ margin: '32px 0 !important' }}
          >
            Explore the data
          </AppLinkButton>

          <ArticleParagraph>
            Provided by the{' '}
            <ExtLink href="https://www.undrr.org/">
              United Nations Office for Disaster Risk Reduction (UNDRR)
            </ExtLink>
            , built on the open-source Global Infrastructure Resilience (GRI) platform from the{' '}
            <ExtLink href="https://opsis.eci.ox.ac.uk/">
              Oxford Programme for Sustainable Infrastructure Systems (OPSIS)
            </ExtLink>
            . Data and analysis from the Global Earthquake Model (GEM) Foundation,
            UNEP-GRID (GIRI), and the Joint Research Centre (JRC).
          </ArticleParagraph>

          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            flexWrap="wrap"
            divider={<Divider orientation="vertical" flexItem />}
            justifyContent="center"
            alignItems="center"
            spacing={4}
            mb={6}
          >
            <ExtLink href="https://www.undrr.org/">
              <img
                height="60"
                src="/logo-undrr.png"
                alt="United Nations Office for Disaster Risk Reduction"
              />
            </ExtLink>
            <ExtLink href="https://opsis.eci.ox.ac.uk">
              <img
                height="100"
                src="/logo-opsis.png"
                alt="Oxford Programme for Sustainable Infrastructure Systems"
              />
            </ExtLink>
          </Stack>
        </ArticleSection>

      </ArticleContentContainer>
    </ArticleContainer>
  );
};
