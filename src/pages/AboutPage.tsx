import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';

import { ExtLink } from '@/lib/nav';

import {
  ArticleContainer,
  ArticleContentContainer,
  ArticleParagraph,
  ArticleSection,
  ArticleSectionHeader,
  EmphasisTextContainer,
  EmphasisTextParagraph,
  MiniBar,
} from './ui/ArticleContainer';
import { HeadingBox, HeadingBoxText } from './ui/HeadingBox';

export const AboutPage = () => (
  <ArticleContainer>
    <HeadingBox>
      <HeadingBoxText>About the UNDRR Risk Information Platform</HeadingBoxText>
    </HeadingBox>
    <ArticleContentContainer>
      <ArticleSection>
        <EmphasisTextContainer>
          <MiniBar />
          <EmphasisTextParagraph>
            The UNDRR Risk Information Platform is provided by the{' '}
            <ExtLink href="https://www.undrr.org/">
              United Nations Office for Disaster Risk Reduction (UNDRR)
            </ExtLink>
            , with data analysis and development supported by the{' '}
            <ExtLink href="https://opsis.eci.ox.ac.uk">
              Oxford Programme for Sustainable Infrastructure Systems (OPSIS)
            </ExtLink>{' '}
            at the University of Oxford.
          </EmphasisTextParagraph>
        </EmphasisTextContainer>
        <ArticleParagraph>
          This platform makes open data on climate hazards, exposure, vulnerability, and
          risk available for visualisation and download, in support of disaster risk
          reduction and climate adaptation.
        </ArticleParagraph>

        <ArticleParagraph>
          The platform builds on research and analysis from the University of Oxford,
          using open data to show hazard, exposure, and risk information for infrastructure
          and populations.
        </ArticleParagraph>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          flexWrap="wrap"
          spacing={{ md: 1, lg: 4 }}
          sx={{ mt: 4, mb: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <ExtLink href="https://www.undrr.org/">
            <img height="60" src="/logo-undrr.png" alt="UNDRR" />
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

      <ArticleSection>
        <ArticleSectionHeader>Funding and support</ArticleSectionHeader>

        <ArticleParagraph>
          This project has contributions of data from the{' '}
          <ExtLink href="https://www.globalquakemodel.org/who-we-are">
            Global Earthquake Model Foundation
          </ExtLink>{' '}
          and the{' '}
          <ExtLink href="https://www.cgfi.ac.uk/spatial-finance-initiative/">
            Spatial Finance Initiative
          </ExtLink>{' '}
          as part of the{' '}
          <ExtLink href="https://resilient-planet-data.org/">Resilient Planet Initiative</ExtLink>,
          as well as the many open data sources listed <Link to="/data">here</Link>.
        </ArticleParagraph>

        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          flexWrap="wrap"
          sx={{ mb: 2 }}
          justifyContent="center"
          alignItems="center"
        >
          <ExtLink href="https://resilient-planet-data.org/">
            <img
              height="80"
              src="/logo-resilient-planet.png"
              style={{ marginTop: '2rem' }}
              alt="Resilient Planet Data Hub"
            />
          </ExtLink>
        </Stack>
      </ArticleSection>

      <ArticleSection>
        <ArticleSectionHeader>Disclaimer</ArticleSectionHeader>

        <ArticleParagraph>
          This tool is provided for general information only and is not intended to amount to advice
          on which you should rely. You must obtain professional or specialist advice before taking,
          or refraining from, any action on the basis of the content on our site.
        </ArticleParagraph>

        <ArticleParagraph>
          Although we make reasonable efforts to update the information on our site, we make no
          representations, warranties or guarantees, whether express or implied, that the content on
          our site (including this tool) is accurate, complete or up to date. Please consult our{' '}
          <Link to="/terms-of-use">website terms of use</Link> for more information.
        </ArticleParagraph>
      </ArticleSection>

      <ArticleSection>
        <ArticleSectionHeader>Acknowledgments</ArticleSectionHeader>

        <ArticleParagraph>
          This platform is built on the open-source{' '}
          <ExtLink href="https://global.infrastructureresilience.org/about">
            Global Infrastructure Resilience (GRI)
          </ExtLink>{' '}
          platform, developed by the University of Oxford (the{' '}
          <ExtLink href="https://opsis.eci.ox.ac.uk/">
            Oxford Programme for Sustainable Infrastructure Systems
          </ExtLink>
          ) and collaborators. UNDRR builds on this open-source foundation with support from
          contributing technical organisations and specialists.
        </ArticleParagraph>

        <ArticleParagraph>
          The source code for this platform is available on GitHub:
        </ArticleParagraph>
        <ArticleParagraph>
          <ExtLink href="https://github.com/nismod/irv-frontend">nismod/irv-frontend</ExtLink>
          {' '}&mdash; the original GRI viewer by Oxford OPSIS
          <br />
          <ExtLink href="https://github.com/khawkins98/irv-frontend">khawkins98/irv-frontend</ExtLink>
          {' '}&mdash; this UNDRR-branded fork
          <br />
          <ExtLink href="https://github.com/khawkins98/map-demo">khawkins98/map-demo</ExtLink>
          {' '}&mdash; deployment orchestration and data loading
        </ArticleParagraph>
      </ArticleSection>
    </ArticleContentContainer>
  </ArticleContainer>
);
