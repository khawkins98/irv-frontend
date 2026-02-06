import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

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
import { BackToTop } from './ui/BackToTop';
import { HeadingBox, HeadingBoxText } from './ui/HeadingBox';
import {
  StyledTableContainer,
  TableCellParagraph,
  TableCellStack,
  TableHeader,
  TableSectionContainer,
} from './ui/TableContainer';

export const DataSourcesPage = () => (
  <ArticleContainer>
    <HeadingBox>
      <HeadingBoxText>Data Sources</HeadingBoxText>
    </HeadingBox>
    <ArticleContentContainer>
      <ArticleSection>
        <EmphasisTextContainer>
          <MiniBar />
          {/* UNDRR: Intro reframed around AAL/PML as core output */}
          <EmphasisTextParagraph>
            The core output of this platform is <strong>Average Annual Loss (AAL)</strong> and{' '}
            <strong>Probable Maximum Loss (PML)</strong> analytics — quantifying expected
            economic and human losses from natural hazards to support disaster risk reduction
            and resilient investment. The hazard intensity maps and exposure datasets below are
            the inputs to these loss calculations.
          </EmphasisTextParagraph>
        </EmphasisTextContainer>
        {/* UNDRR: Methodology overview centered on AAL/PML pipeline */}
        <ArticleParagraph>
          AAL represents the long-run average loss per year across all possible events, while
          PML captures the worst-case loss at a given probability (e.g. the 1-in-250-year loss).
          Computing these metrics requires three inputs: hazard intensity maps (how severe?),
          exposure data (what is at risk?), and vulnerability functions (how much damage at a
          given intensity?). The platform draws on open data from the Global Earthquake Model
          (GEM) Foundation, the Joint Research Centre (JRC), UNEP-GRID (GIRI), and others
          across 8 target hazards: Earthquake, River Flooding, Coastal Flooding, Tropical
          Cyclone, Tsunami, Extreme Heat, Drought, and Landslide. Datasets marked{' '}
          <strong>Active</strong> below are loaded and visible on the map;
          those marked <strong>Planned</strong> are listed for reference and will be added
          as data pipelines are completed.
        </ArticleParagraph>
        <ArticleParagraph>
          <Link id="contents" href="#contents">
            Contents
          </Link>
        </ArticleParagraph>
        <ArticleParagraph>
          Scroll down the page for details of data sources under each category:
          <ul>
            <li>
              <Link href="#context">Contextual map data</Link>
            </li>
            <li>
              <Link href="#hazard">Hazard</Link>
            </li>
            <li>
              <Link href="#exposure">Exposure</Link>
            </li>
            <li>
              <Link href="#risk">Risk &amp; Loss Analytics</Link>
            </li>
            <li>
              <Link href="#aal-pml">Available AAL &amp; PML Datasets</Link>
            </li>
          </ul>
        </ArticleParagraph>
      </ArticleSection>

      <BackToTop id="context" />
      <ArticleSection>
        <ArticleSectionHeader>Contextual Map Data</ArticleSectionHeader>

        <ArticleParagraph>
          Background map data is &copy;{' '}
          <ExtLink href="https://www.openstreetmap.org/copyright">OpenStreetMap</ExtLink>{' '}
          contributors, style &copy; <ExtLink href="https://carto.com/attributions">CARTO</ExtLink>.
        </ArticleParagraph>

        <ArticleParagraph>
          Satellite imagery background is derived from{' '}
          <ExtLink href="https://s2maps.eu">Sentinel-2 cloudless - https://s2maps.eu</ExtLink> by{' '}
          <ExtLink href="https://eox.at">EOX IT Services GmbH</ExtLink> (Contains modified
          Copernicus Sentinel data 2020).
        </ArticleParagraph>
      </ArticleSection>

      <BackToTop id="hazard" />
      <TableSectionContainer>
        <TableHeader>Hazard Data</TableHeader>
        {/* UNDRR: Framing hazards as AAL/PML inputs */}
        <ArticleParagraph>
          Hazard intensity maps are the primary input to loss calculations. Each map below
          provides return-period-based measures (flood depth, peak ground acceleration, wind
          speed, landslide frequency) used to estimate damage at each exposed location.
        </ArticleParagraph>

        <StyledTableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* UNDRR: Added Status column */}
                <TableCell>Status</TableCell>
                <TableCell>Dataset</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Citation</TableCell>
                <TableCell>License</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>Coastal and River flooding</TableCell>
                <TableCell>
                  <ExtLink href="https://www.wri.org/data/aqueduct-floods-hazard-maps">
                    WRI Aqueduct Floods Hazard Maps
                  </ExtLink>
                </TableCell>
                <TableCell>
                  Ward, P.J., H.C. Winsemius, S. Kuzma, M.F.P. Bierkens, A. Bouwman, H. de Moel, A.
                  Díaz Loaiza, et al. 2020. “Aqueduct Floods Methodology.” Technical Note.
                  Washington, D.C.: World Resources Institute. Available online at:{' '}
                  <ExtLink href="https://www.wri.org/publication/aqueduct-floods-methodology">
                    www.wri.org/publication/aqueduct-floods-methodology
                  </ExtLink>
                  .
                </TableCell>
                <TableCell>
                  All the products, methodologies, and datasets that make up Aqueduct are available
                  for use under the{' '}
                  <ExtLink href="https://creativecommons.org/licenses/by/4.0/">
                    Creative Commons Attribution International 4.0 License
                  </ExtLink>
                  .
                </TableCell>
                <TableCell>
                  Inundation depth in meters for coastal and riverine floods over 1km grid squares.
                  1 in 2 to 1 in 1000 year return periods. Baseline, RCP 4.5 &amp; 8.5 emission
                  scenarios. Current and future maps in 2030, 2050 and 2080.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Active</TableCell>
                <TableCell>River flooding</TableCell>
                <TableCell>
                  <ExtLink href="data.europa.eu/89h/jrc-floods-floodmapgl_rp50y-tif">
                    JRC Global River Flood Hazard Maps
                  </ExtLink>
                </TableCell>
                <TableCell>
                  Baugh, Calum; Colonese, Juan; D'Angelo, Claudia; Dottori, Francesco; Neal,
                  Jeffrey; Prudhomme, Christel; Salamon, Peter (2024): Global river flood hazard
                  maps. European Commission, Joint Research Centre (JRC) [Dataset] Available online
                  at:
                  <ExtLink href="http://data.europa.eu/89h/jrc-floods-floodmapgl_rp50y-tif">
                    data.europa.eu/89h/jrc-floods-floodmapgl_rp50y-tif
                  </ExtLink>
                  .
                </TableCell>
                <TableCell>
                  <ExtLink href="http://creativecommons.org/licenses/by/4.0/legalcode">
                    Creative Commons Attribution 4.0 International
                  </ExtLink>
                </TableCell>
                <TableCell>
                  <TableCellParagraph>
                    The global river flood hazard maps are a gridded data set representing
                    inundation along the river network, for seven different flood return periods
                    (from 1-in-10-years to 1-in-500-years). The input river flow data for the new
                    maps are produced by means of the open-source hydrological model LISFLOOD, while
                    inundation simulations are performed with the hydrodynamic model LISFLOOD-FP.
                    The extent comprises the entire world with the exception of Greenland and
                    Antarctica and small islands with river basins smaller than 500km².
                  </TableCellParagraph>
                  <TableCellParagraph>
                    Cell values indicate water depth (in m). The maps can be used to assess the
                    exposure of population and economic assets to river floods, and to perform flood
                    risk assessments. The dataset is created as part of the Copernicus Emergency
                    Management Service. NOTE: this dataset is not an official flood hazard map (for
                    details and limitations please refer to related publications).
                  </TableCellParagraph>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>Extreme Heat and Drought</TableCell>
                <TableCell>
                  <ExtLink href="https://data.isimip.org/search/tree/ISIMIP2b/DerivedOutputData/lange2020/">
                    Lange et al 2020, ISIMIP
                  </ExtLink>
                </TableCell>
                <TableCell>
                  Lange, S., Volkholz, J., Geiger, T., Zhao, F., Vega, I., Veldkamp, T., et al.
                  (2020). Projecting exposure to extreme climate impact events across six event
                  categories and three spatial scales. Earth's Future, 8, e2020EF001616.{' '}
                  <ExtLink href="https://doi.org/10.1029/2020EF001616">
                    DOI 10.1029/2020EF001616
                  </ExtLink>
                </TableCell>
                <TableCell>CC0 1.0</TableCell>
                <TableCell>
                  <TableCellStack>
                    <TableCellParagraph>
                      Annual probability of drought (soil moisture below a baseline threshold) or
                      extreme heat (temperature and humidity-based indicators over a threshold)
                      events on a 0.5° grid. 8 hydrological models forced by 4 GCMs under baseline,
                      RCP 2.6 &amp; 6.0 emission scenarios. Current and future maps in 2030, 2050
                      and 2080.
                    </TableCellParagraph>
                    <TableCellParagraph>
                      The ISIMIP2b climate input data and impact model output data analyzed in this
                      study are available in the ISIMIP data repository at ESGF, see
                      https://esg.pik-potsdam.de/search/isimip/?project=ISIMIP2b&product=input and
                      https://esg.pik-potsdam.de/search/isimip/?project=ISIMIP2b&product=output,
                      respectively. More information about the GHM, GGCM, and GVM output data is
                      provided by Gosling et al. (2020), Arneth et al. (2020), and Reyer et al.
                      (2019), respectively.{' '}
                    </TableCellParagraph>
                    <TableCellParagraph>
                      Event definitions are given in Lange et al, table 1. Land area is exposed to
                      drought if monthly soil moisture falls below the 2.5th percentile of the
                      preindustrial baseline distribution for at least seven consecutive months.
                      Land area is exposed to extreme heat if both a relative indicator based on
                      temperature (Russo et al 2015, 2017) and an absolute indicator based on
                      temperature and relative humidity (Masterton &amp; Richardson, 1979) exceed
                      their respective threshold value.
                    </TableCellParagraph>
                    <TableCellParagraph>
                      Note that the time series of extreme events given by Lange et al has been
                      processed into an annual probability of occurrence by the GRI team for
                      visualisation purposes.
                    </TableCellParagraph>
                  </TableCellStack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>Tropical Cyclones (STORM)</TableCell>
                <TableCell>
                  STORM Tropical Cyclone Maximum Windspeeds,{' '}
                  <ExtLink href="https://data.4tu.nl/articles/dataset/STORM_tropical_cyclone_wind_speed_return_periods/12705164/3">
                    Present{' '}
                  </ExtLink>
                  {' and '}{' '}
                  <ExtLink href="https://data.4tu.nl/articles/dataset/STORM_climate_change_tropical_cyclone_wind_speed_return_periods/14510817/3">
                    Future climate{' '}
                  </ExtLink>
                  .
                </TableCell>
                <TableCell>
                  Bloemendaal, Nadia; de Moel, H. (Hans); Muis, S; Haigh, I.D. (Ivan); Aerts,
                  J.C.J.H. (Jeroen) (2020): STORM tropical cyclone wind speed return periods.
                  4TU.ResearchData. Dataset.{' '}
                  <ExtLink href="https://doi.org/10.4121/12705164.v3">
                    DOI 10.4121/12705164.v3
                  </ExtLink>{' '}
                  and Bloemendaal, Nadia; de Moel, Hans; Dullaart, Job; Haarsma, R.J. (Reindert);
                  Haigh, I.D. (Ivan); Martinez, Andrew B.; et al. (2022): STORM climate change
                  tropical cyclone wind speed return periods. 4TU.ResearchData. Dataset.{' '}
                  <ExtLink href="https://doi.org/10.4121/14510817.v3">
                    DOI 10.4121/14510817.v3
                  </ExtLink>
                  , aggregated as Russell, Tom. (2022). STORM tropical cyclone wind speed return
                  periods as global GeoTIFFs (1.0.0) [Data set]. Zenodo.{' '}
                  <ExtLink href="https://doi.org/10.5281/zenodo.7438145">
                    DOI 10.5281/zenodo.7438145
                  </ExtLink>
                </TableCell>
                <TableCell>CC0 1.0</TableCell>
                <TableCell>
                  Tropical cyclone maximum wind speed (in m/s) return periods, generated using the
                  STORM climate change datasets. 1 in 10 to 1 in 10,000 year return periods at 10 km
                  resolution. Baseline and RCP 8.5 climate scenarios. Current and future (2050)
                  epochs.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>Tropical Cyclones (IRIS)</TableCell>
                <TableCell>
                  <ExtLink href="https://www.imperial.ac.uk/grantham/research/climate-science/modelling-tropical-cyclones/">
                    IRIS tropical cyclone model
                  </ExtLink>
                </TableCell>
                <TableCell>
                  Sparks, N., Toumi, R. (2024) The Imperial College Storm Model (IRIS) Dataset.
                  Scientific Data 11, 424{' '}
                  <ExtLink href="https://doi.org/10.1038/s41597-024-03250-y">
                    DOI 10.1038/s41597-024-03250-y
                  </ExtLink>{' '}
                  and Sparks, N., Toumi, R. (2024). IRIS: The Imperial College Storm Model.
                  Figshare. Collection.{' '}
                  <ExtLink href="https://doi.org/10.6084/m9.figshare.c.6724251.v1">
                    DOI 10.6084/m9.figshare.c.6724251.v1
                  </ExtLink>
                </TableCell>
                <TableCell>CC BY 4.0</TableCell>
                <TableCell>
                  Tropical cyclone maximum wind speeds (in m/s) generated using the IRIS tropical
                  cyclone model. Wind speeds available from 1 in 10 to 1 in 1,000 year return
                  periods at 1/10 degree spatial resolution. Present (2020) and future (2050)
                  epochs, with SSP1-2.6, SSP2-4.5 and SSP5-8.5 future scenarios. Return period maps
                  generated from an earlier version of the IRIS model event set.
                </TableCell>
              </TableRow>
              {/* UNDRR: GEM Global Active Faults — supplementary context for earthquake hazard */}
              <TableRow>
                <TableCell>Active</TableCell>
                <TableCell>Active Faults</TableCell>
                <TableCell>
                  <ExtLink href="https://github.com/GEMScienceTools/gem-global-active-faults">
                    GEM Global Active Faults Database
                  </ExtLink>
                </TableCell>
                <TableCell>
                  Styron, R., and Pagani, M. (2020). The GEM Global Active Faults Database.
                  Earthquake Spectra, 36(S1), 218-239.{' '}
                  <ExtLink href="https://doi.org/10.1177/8755293020944182">
                    DOI 10.1177/8755293020944182
                  </ExtLink>
                </TableCell>
                <TableCell>
                  <ExtLink href="https://creativecommons.org/licenses/by-sa/4.0/">
                    CC BY-SA 4.0
                  </ExtLink>
                </TableCell>
                <TableCell>
                  ~13,500 active fault traces worldwide, colored by slip type (Normal, Reverse,
                  Strike-slip). Supplementary context layer for earthquake hazard. Line geometry
                  served as vector tiles.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Active</TableCell>
                <TableCell>Seismic Risk</TableCell>
                <TableCell>
                  <ExtLink href="https://www.globalquakemodel.org/gem-maps/global-earthquake-hazard-map">
                    GEM Global Earthquake Hazard Map
                  </ExtLink>
                </TableCell>
                <TableCell>
                  Pagani M, Garcia-Pelaez J, Gee R, Johnson K, Silva V, Simionato M, Styron R,
                  Vigano D, Danciu L, Monelli D, Poggi V, Weatherill G. (2019). The 2018 version of
                  the Global Earthquake Model: Hazard component. Earthquake Spectra, 36(1),{' '}
                  <ExtLink href="https://doi.org/10.1177/8755293020931866">
                    DOI: 10.1177/8755293020931866
                  </ExtLink>
                  . and Johnson, K., Villani, M., Bayliss, K., Brooks, C., Chandrasekhar, S.,
                  Chartier, T., Chen, Y.-S., Garcia-Pelaez, J., Gee, R., Styron, R., Rood, A.,
                  Simionato, M., & Pagani, M. (2023). Global Seismic Hazard Map (v2023.1.0) [Data
                  set]. Zenodo.{' '}
                  <ExtLink href="https://doi.org/10.5281/zenodo.8409647">
                    DOI 10.5281/zenodo.8409647
                  </ExtLink>
                </TableCell>
                <TableCell>
                  <ExtLink href="https://creativecommons.org/licenses/by-nc-sa/4.0/">
                    Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License
                    (CC BY-NC-SA){' '}
                  </ExtLink>
                </TableCell>
                <TableCell>
                  The Global Earthquake Model (GEM) Global Seismic Hazard Map (version 2023.1)
                  depicts the geographic distribution of the Peak Ground Acceleration (PGA) with a
                  10% probability of being exceeded in 50 years, computed for reference rock
                  conditions (shear wave velocity, VS30, of 760-800 m/s).
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Active</TableCell>
                <TableCell>Landslide</TableCell>
                <TableCell>
                  <ExtLink href="https://datacatalog.worldbank.org/search/dataset/0037584/Global-landslide-hazard-map">
                    Global Landslide Hazard Map
                  </ExtLink>
                </TableCell>
                <TableCell>
                  Arup (2021) Global Landslide Hazard Map, prepared for The World Bank and Global
                  Facility for Disaster Risk Reduction.
                </TableCell>
                <TableCell>
                  <ExtLink href="https://creativecommons.org/licenses/by-nc/4.0/">
                    Creative Commons Attribution-NonCommercial 4.0 International License (CC
                    BY-NC-SA){' '}
                  </ExtLink>
                </TableCell>
                <TableCell>
                  <TableCellStack>
                    <TableCellParagraph>
                      The Global Landslide hazard map is a gridded dataset of landslide hazard
                      produced at the global scale. The dataset comprises gridded maps of estimated
                      annual frequency of significant landslides per square kilometre. Significant
                      landslides are those which are likely to have been reported had they occurred
                      in a populated place; limited information on reported landslide size makes it
                      difficult to tie frequencies to size ranges but broadly speaking would be at
                      least greater than 100 m2. The data provides frequency estimates for each grid
                      cell on land between 60°S and 72°N for landslides triggered by seismicity and
                      rainfall.
                    </TableCellParagraph>

                    <TableCellParagraph>
                      The dataset is publicly available for download and use and it consists of 4
                      global map layers:
                      <ul>
                        <li>
                          Mean annual rainfall-triggered landslide hazard (1980&mdash;2018): raster
                          values represent the modelled average annual frequency of significant
                          rainfall-triggered landslides per sq. km.
                        </li>
                        <li>
                          Median annual rainfall-triggered landslide hazard (1980&mdash;2018):
                          raster values represent the modelled median annual frequency of
                          significant rainfall-triggered landslides per sq. km.
                        </li>
                        <li>
                          Mean annual earthquake-triggered landslide hazard: raster values represent
                          the modelled average annual frequency of significant earthquake-triggered
                          landslides per sq. km.
                        </li>
                        <li>Aggregate hazard index ranging from 1 (low) to 4 (very high)</li>
                      </ul>
                    </TableCellParagraph>
                  </TableCellStack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableSectionContainer>

      <BackToTop id="exposure" />
      <TableSectionContainer>
        <TableHeader>Exposure Data</TableHeader>

        <StyledTableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* UNDRR: Added Status column */}
                <TableCell>Status</TableCell>
                <TableCell>Dataset</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Citation</TableCell>
                <TableCell>License</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>Roads and Rail</TableCell>
                <TableCell>
                  <ExtLink href="https://planet.openstreetmap.org/">OpenStreetMap</ExtLink>
                </TableCell>
                <TableCell>
                  <ExtLink href="https://www.openstreetmap.org/copyright">
                    © OpenStreetMap contributors https://www.openstreetmap.org/copyright
                  </ExtLink>
                </TableCell>
                <TableCell>ODbL</TableCell>
                <TableCell>
                  Extract from OpenStreetMap October 2021. All roads tagged as trunk, motorway,
                  primary, secondary or tertiary, all rail lines tagged as rail and railway
                  stations.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>
                  <ExtLink href="https://doi.org/10.5281/zenodo.3628142">
                    Gridfinder Power Transmission lines
                  </ExtLink>
                </TableCell>
                <TableCell>Source</TableCell>
                <TableCell>
                  Arderne, C., Zorn, C., Nicolas, C. et al. Predictive mapping of the global power
                  system using open data. Sci Data 7, 19 (2020).
                  https://doi.org/10.1038/s41597-019-0347-4
                </TableCell>
                <TableCell>CC BY 4.0</TableCell>
                <TableCell>
                  Predicted distribution and transmission line network, with existing OpenStreetMap
                  lines tagged in the 'source' column and © OpenStreetMap contributors
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>Power plants</TableCell>
                <TableCell>
                  <ExtLink href="https://datasets.wri.org/dataset/globalpowerplantdatabase">
                    WRI Global Powerplants Database
                  </ExtLink>
                </TableCell>
                <TableCell>
                  Global Energy Observatory, Google, KTH Royal Institute of Technology in Stockholm,
                  Enipedia, World Resources Institute. 2018. Global Power Plant Database. Published
                  on Resource Watch and Google Earth Engine; http://resourcewatch.org/
                  https://earthengine.google.com/
                </TableCell>
                <TableCell>CC BY 4.0</TableCell>
                <TableCell>
                  The Global Power Plant Database is a comprehensive, open source database of power
                  plants around the world. It centralizes power plant data to make it easier to
                  navigate, compare and draw insights for one's own analysis. The database covers
                  approximately 35,000 power plants from 167 countries and includes thermal plants
                  (e.g. coal, gas, oil, nuclear, biomass, waste, geothermal) and renewables (e.g.
                  hydro, wind, solar). Each power plant is geolocated and entries contain
                  information on plant capacity, generation, ownership, and fuel type.
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>Active</TableCell>
                <TableCell>Population and built-up area</TableCell>
                <TableCell>JRC Global Human Settlement Layer</TableCell>
                <TableCell>
                  <TableCellStack>
                    <TableCellParagraph>
                      Schiavina, Marcello; Freire, Sergio; Alessandra Carioli; MacManus, Kytt
                      (2023): GHS-POP R2023A - GHS population grid multitemporal (1975-2030).
                      European Commission, Joint Research Centre (JRC) [Dataset] doi:
                      10.2905/2FF68A52-5B5B-4A22-8F40-C41DA8332CFE PID:
                      http://data.europa.eu/89h/2ff68a52-5b5b-4a22-8f40-c41da8332cfe
                    </TableCellParagraph>
                    <TableCellParagraph>
                      Pesaresi, Martino; Politis, Panagiotis (2023): GHS-BUILT-S R2023A - GHS
                      built-up surface grid, derived from Sentinel2 composite and Landsat,
                      multitemporal (1975-2030). European Commission, Joint Research Centre (JRC)
                      [Dataset] doi: 10.2905/9F06F36F-4B11-47EC-ABB0-4F8B7B1D72EA PID:
                      http://data.europa.eu/89h/9f06f36f-4b11-47ec-abb0-4f8b7b1d72ea
                    </TableCellParagraph>
                    <TableCellParagraph>
                      Schiavina, M., Melchiorri, M., Pesaresi, M., Politis, P., Carneiro Freire,
                      S.M., Maffenini, L., Florio, P., Ehrlich, D., Goch, K., Carioli, A., Uhl, J.,
                      Tommasi, P. and Kemper, T., GHSL Data Package 2023, Publications Office of the
                      European Union, Luxembourg, 2023, ISBN 978-92-68-02341-9, doi:10.2760/098587,
                      JRC133256.
                    </TableCellParagraph>
                  </TableCellStack>
                </TableCell>
                <TableCell>
                  <ExtLink href="https://ec.europa.eu/info/legal-notice_en#copyright-notice">
                    CC-BY 4.0
                  </ExtLink>
                </TableCell>
                <TableCell>
                  <TableCellStack>
                    <TableCellParagraph>
                      GHS-POP R2023A - The spatial raster dataset depicts the distribution of
                      population, expressed as the number of people per cell. Residential population
                      estimates between 1975 and 2020 in 5 years intervals and projections to 2025
                      and 2030 derived from CIESIN GPWv4.11 were disaggregated from census or
                      administrative units to grid cells, informed by the distribution, density, and
                      classification of built-up as mapped in the Global Human Settlement Layer
                      (GHSL) global layer per corresponding epoch.
                    </TableCellParagraph>
                    <TableCellParagraph>
                      This dataset is an update of the product released in 2022. Major improvements
                      are the following: use of built-up volume maps (GHS-BUILT-V R2022A); use of
                      more recent and detailed population estimates derived from GPWv4.11
                      integrating both UN World Population Prospects 2022 country population data
                      and World Urbanisation Prospects 2018 data on Cities; revision of GPWv4.11
                      population growthrates by convergence to upper administrative level
                      growthrates; systematic improvement of census coastlines; systematic revision
                      of census units declared as unpopulated; integration of non-residential
                      built-up volume information (GHS-BUILT-V_NRES R2023A); spatial resolution of
                      100m Mollweide (and 3 arcseconds in WGS84); projections to 2030.
                    </TableCellParagraph>
                    <TableCellParagraph>
                      GHS-BUILT-S R2023A - The spatial raster dataset depicts the distribution of
                      the built-up (BU) surfaces estimates between 1975 and 2030 in 5 years
                      intervals and two functional use components a) the total BU surface and b) the
                      non-residential (NRES) BU surface. The data is made by spatial-temporal
                      interpolation of five observed collections of multiple-sensor,
                      multiple-platform satellite imageries. Landsat (MSS, TM, ETM sensor) supports
                      the 1975, 1990, 2000, and 2014 epochs. Sentinel2 (S2) composite
                      (GHS-composite-S2 R2020A) supports the 2018 epoch.
                    </TableCellParagraph>
                    <TableCellParagraph>
                      The built-up surface fraction (BUFRAC) is estimated at 10m of spatial
                      resolution from the S2 image data, using as learning set a composite of data
                      from GHS-BUILT-S2 R2020A, Facebook, Microsoft, and Open Street Map (OSM)
                      building delineation. The BUFRAC inference is made from the combination of
                      quantized image features (reflectance, derivative of morphological profile
                      DMP) through associative rule learning applied to spatial data analytics,
                      which was introduced as symbolic machine learning (SML).
                    </TableCellParagraph>
                    <TableCellParagraph>
                      The non-residential (NRES) domain is predicted from S2 image data by
                      observation of radiometric, textural, and morphological features in an
                      object-oriented image processing framework. The multi-temporal dimension is
                      provided by testing by the SML the association between the combination of the
                      quantized radiometric information collected by the Landsat imagery in the past
                      epochs, and the “built-up” (BU) and “non-built-up” (NBU) class abstraction on
                      image segments extracted from S2 images. The spatial-temporal interpolation is
                      solved by rank-optimal spatial allocation using explanatory variables related
                      to the landscape (slope, elevation, distance to water, and distance to
                      vegetation) and related to the observed dynamic of BU surfaces in the past
                      epochs.
                    </TableCellParagraph>
                  </TableCellStack>
                </TableCell>
              </TableRow>

              {/* UNDRR: Removed Health sites, Cement/Steel, Land Cover, Topography,
                  and Soil Organic Carbon — not inputs to AAL/PML loss models */}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableSectionContainer>

      {/* UNDRR: Vulnerability section removed — social/environmental context layers
          are not inputs to AAL/PML loss models */}

      <BackToTop id="risk" />
      <TableSectionContainer>
        {/* UNDRR: Renamed from "Risk Data" to center on AAL/PML analytics */}
        <TableHeader>Risk &amp; Loss Analytics</TableHeader>

        <StyledTableContainer>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                {/* UNDRR: Added Status column */}
                <TableCell>Status</TableCell>
                <TableCell>Dataset</TableCell>
                <TableCell>Source</TableCell>
                <TableCell>Citation</TableCell>
                <TableCell>License</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* UNDRR: Removed Cooling demand row — climate adaptation metric, not AAL/PML */}
              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>Population Exposure</TableCell>
                <TableCell>Derived from ISIMIP hazards and GHSL population</TableCell>
                <TableCell>
                  Russell, T., Nicholas, C., & Bernhofen, M. (2024). Annual probability of extreme
                  heat and drought events, derived from Lange et al 2020 [Data set]. Zenodo.{' '}
                  <ExtLink href="https://doi.org/10.5281/zenodo.11582369">
                    10.5281/zenodo.11582369
                  </ExtLink>{' '}
                  Derived using{' '}
                  <ExtLink href="https://github.com/nismod/isimip-exposure">
                    github.com/nismod/isimip-exposure
                  </ExtLink>
                </TableCell>
                <TableCell>CC BY-SA 4.0 International</TableCell>
                <TableCell>
                  Population exposure is calculated as annual expected population directly exposed
                  to the occurrence of extreme heat or drought events, assuming any population
                  directly within the footprint of an event is exposed, but not otherwise taking any
                  other risk-mitigating or -propagating factors into account.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>Infrastructure Risk</TableCell>
                <TableCell>Derived from exposure and hazard layers</TableCell>
                <TableCell>
                  Russell T., Thomas F., nismod/open-gira contributors and OpenStreetMap
                  contributors (2022) Global Infrastructure Damage Risk Estimates. [Dataset]
                  Available at https://global.infrastructureresilience.org
                </TableCell>
                <TableCell>CC-BY-SA, ODbL</TableCell>
                <TableCell>
                  Infrastructure expected annual direct damages are calculated from OpenStreetMap
                  and Gridfinder networks, STORM cyclones and Aqueduct floods.
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>Regional Summary</TableCell>
                <TableCell>Derived from exposure and hazard layers</TableCell>
                <TableCell>
                  GEM (2022) Analysis of earthquake and flooding population exposure
                </TableCell>
                <TableCell>CC-BY-SA</TableCell>
                <TableCell>Population exposed to various hazards at return periods.</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableSectionContainer>
      {/* UNDRR: New section documenting publicly available AAL/PML datasets */}
      <BackToTop id="aal-pml" />
      <TableSectionContainer>
        <TableHeader>Available AAL &amp; PML Datasets</TableHeader>
        <ArticleParagraph>
          The following publicly available datasets provide pre-computed AAL and/or PML estimates
          that could be loaded into this platform. They are listed here for reference as
          candidates for future integration.
        </ArticleParagraph>

        <StyledTableContainer>
          <Table aria-label="Available AAL and PML datasets">
            <TableHead>
              <TableRow>
                {/* UNDRR: Added Status column to match other tables */}
                <TableCell>Status</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Dataset</TableCell>
                <TableCell>Provider</TableCell>
                <TableCell>Hazards Covered</TableCell>
                <TableCell>Metrics</TableCell>
                <TableCell>License</TableCell>
                <TableCell>Notes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>High</TableCell>
                <TableCell>
                  <ExtLink href="https://giri.unepgrid.ch">
                    GIRI (Global Infrastructure Risk Model)
                  </ExtLink>
                </TableCell>
                <TableCell>CDRI / UNEP-GRID / CIMA Foundation</TableCell>
                <TableCell>
                  Earthquake, Tsunami, Tropical Cyclone, Landslide, Flood, Drought (6 of 8 target
                  hazards)
                </TableCell>
                <TableCell>
                  AAL and PML (loss exceedance curves) per infrastructure sector
                </TableCell>
                <TableCell>
                  <ExtLink href="https://creativecommons.org/licenses/by/3.0/igo/">
                    CC BY 3.0 IGO
                  </ExtLink>
                </TableCell>
                <TableCell>
                  <TableCellStack>
                    <TableCellParagraph>
                      243 countries/territories, 100+ geospatial layers. WMS layers via GeoServer
                      can be consumed directly; raster layers are convertible to COGs for ingestion.
                      Bulk download available (registration required).
                    </TableCellParagraph>
                  </TableCellStack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Active</TableCell>
                <TableCell>Moderate</TableCell>
                <TableCell>
                  <ExtLink href="https://data.humdata.org/dataset/multi-hazard-average-annual-loss">
                    GAR 2015 Multi-Hazard AAL
                  </ExtLink>
                </TableCell>
                <TableCell>UNDRR (GAR Risk Atlas)</TableCell>
                <TableCell>
                  Earthquake, Tsunami, River Flood, Tropical Cyclone wind, Storm Surge (5 hazards)
                </TableCell>
                <TableCell>AAL and PML by country</TableCell>
                <TableCell>Free non-commercial</TableCell>
                <TableCell>
                  <TableCellStack>
                    <TableCellParagraph>
                      Global, country-level coverage. Loaded as vector tiles from the GAR 2015
                      shapefile. Select the Risk tab to view country-level AAL by hazard. Note:
                      data is from 2015 and may be dated for some applications.
                    </TableCellParagraph>
                  </TableCellStack>
                </TableCell>
              </TableRow>
              {/* UNDRR: WorldRiskIndex — country-level composite risk scores */}
              <TableRow>
                <TableCell>Active</TableCell>
                <TableCell>Moderate</TableCell>
                <TableCell>
                  <ExtLink href="https://data.humdata.org/dataset/worldriskindex">
                    WorldRiskIndex
                  </ExtLink>
                </TableCell>
                <TableCell>Bundnis Entwicklung Hilft / IFHV</TableCell>
                <TableCell>
                  Multi-hazard (Earthquake, Tsunami, Cyclone, Flooding, Drought, Sea Level Rise)
                </TableCell>
                <TableCell>
                  Composite risk index, exposure, vulnerability sub-scores
                </TableCell>
                <TableCell>CC BY 4.0</TableCell>
                <TableCell>
                  <TableCellStack>
                    <TableCellParagraph>
                      Country-level, 193 countries, annual updates. Index scores (0–100), not
                      economic losses. Complements GAR AAL with risk/vulnerability scoring
                      dimensions.
                    </TableCellParagraph>
                  </TableCellStack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>High</TableCell>
                <TableCell>
                  <ExtLink href="https://www.wri.org/data/aqueduct-floods">
                    WRI Aqueduct Floods Expected Annual Damage
                  </ExtLink>
                </TableCell>
                <TableCell>World Resources Institute</TableCell>
                <TableCell>River Flooding, Coastal Flooding</TableCell>
                <TableCell>
                  Expected Annual Damage (AAL equivalent) for urban damage, GDP, population
                </TableCell>
                <TableCell>Open (attribution required)</TableCell>
                <TableCell>
                  <TableCellStack>
                    <TableCellParagraph>
                      Global coverage at country/basin/state polygon level. Available as GeoPackage,
                      Shapefile, and CSV; hazard maps also available as GeoTIFF. High suitability
                      for hazard rasters; moderate for AAL (polygon aggregates only).
                    </TableCellParagraph>
                  </TableCellStack>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Planned</TableCell>
                <TableCell>Moderate</TableCell>
                <TableCell>
                  <ExtLink href="https://www.globalquakemodel.org/product/global-seismic-risk-map">
                    GEM Global Seismic Risk Map
                  </ExtLink>
                </TableCell>
                <TableCell>GEM Foundation</TableCell>
                <TableCell>Earthquake only</TableCell>
                <TableCell>
                  AAL (built-up area, economic losses, fatalities, homeless)
                </TableCell>
                <TableCell>
                  CC BY-SA (poster); license request for data (free for non-commercial)
                </TableCell>
                <TableCell>
                  <TableCellStack>
                    <TableCellParagraph>
                      Global coverage on ~30km hexagonal grid. Hex grid is convertible to vector
                      tiles. License request required for data download (free for non-commercial
                      use), which adds some friction to ingestion.
                    </TableCellParagraph>
                  </TableCellStack>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </StyledTableContainer>
      </TableSectionContainer>

    </ArticleContentContainer>
  </ArticleContainer>
);
