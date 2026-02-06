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
        <HeadingBoxText>Global Risk Information Platform</HeadingBoxText>
      </HeadingBox>

      <div className="home" style={{ height: '16rem' }}></div>

      <ArticleContentContainer>
        <ArticleSection>
          <EmphasisTextContainer>
            <MiniBar />
            <EmphasisTextParagraph>
              The UNDRR Risk Information Platform is a data and analytics portal covering
              hazards, exposure, vulnerability and risk to infrastructure and people around the
              world.
            </EmphasisTextParagraph>

            <EmphasisTextParagraph>
              This tool supports disaster risk reduction and climate adaptation decision-making
              by identifying spatial vulnerabilities and risks under current and future climate
              scenarios.
            </EmphasisTextParagraph>
          </EmphasisTextContainer>
          <ArticleParagraph>
            The platform aims to support governments, communities and investors around the
            world in reducing disaster risk and adapting to climate change by making open data
            &ndash; related to climate hazards, exposure and vulnerabilities &ndash; available
            for visualisation and download, to build shared understanding across different scales.
          </ArticleParagraph>
          <ArticleParagraph>
            This in turn enables the identification of key opportunities as well as social
            vulnerability and needs, providing a starting point for risk analysis. The platform
            supports the high-level screening of the risks to both assets and populations. This may
            help identify solutions and manage risks to society, economy and nature.
          </ArticleParagraph>
          <ArticleParagraph>
            The International Panel on Climate Change (IPCC) defines risk as "the potential for
            adverse consequences for human or ecological systems, recognising the diversity of
            values and objectives associated with such systems" (
            <ExtLink href="https://www.ipcc.ch/report/ar6/wg2/chapter/chapter-16/">
              AR6 report
            </ExtLink>
            ). Climate-related risks result from the intersection of hazards, exposure and
            vulnerability, all of which can be explored in detail.
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
            <Card
              image="./card-hazard.png"
              title="Hazard"
              href="/view/hazard"
              text="Understand the intensity and location of weather extremes and other environmental hazards"
            />
            <Card
              image="./card-exposure.png"
              href="/view/exposure"
              title="Exposure"
              text="Map the population, infrastructure and other assets that are exposed to a variety of
                environmental hazards"
            />
            <Card
              image="./card-vulnerability.png"
              href="/view/vulnerability"
              title="Vulnerability"
              text="Review indices that summarise the vulnerability of natural areas and populations"
            />
            <Card
              image="./card-risk.png"
              href="/view/risk"
              title="Risk"
              text="Explore analyses including direct damages to transport and power
                infrastructure."
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
            This platform is provided by the{' '}
            <ExtLink href="https://www.undrr.org/">
              United Nations Office for Disaster Risk Reduction (UNDRR)
            </ExtLink>
            , with data analysis and development supported by the{' '}
            <ExtLink href="https://opsis.eci.ox.ac.uk/">
              Oxford Programme for Sustainable Infrastructure Systems
            </ExtLink>
            .
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
          </Stack>
        </ArticleSection>

      </ArticleContentContainer>
    </ArticleContainer>
  );
};
