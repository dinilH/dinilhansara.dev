import gamestackTexture2Large from '~/assets/gamestack-list-large.jpg';
import gamestackTexture2Placeholder from '~/assets/gamestack-list-placeholder.jpg';
import gamestackTexture2 from '~/assets/gamestack-list.jpg';
import gamestackTextureLarge from '~/assets/gamestack-login-large.jpg';
import gamestackTexturePlaceholder from '~/assets/gamestack-login-placeholder.jpg';
import gamestackTexture from '~/assets/gamestack-login.jpg';
import sliceTextureLarge from '~/assets/slice-app-large.jpg';
import sliceTexturePlaceholder from '~/assets/slice-app-placeholder.jpg';
import sliceTexture from '~/assets/slice-app.jpg';
import sprTextureLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import sprTexturePlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import sprTexture from '~/assets/spr-lesson-builder-dark.jpg';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

import ShecareHome from '~/assets/dinil/shecare-home.png';
import WibhageHome from '~/assets/dinil/wibhage-home.png';
import WidasaHome from '~/assets/dinil/widasa-home.png';
import GoWiseHome from '~/assets/dinil/gowise-home.png';
import GoWise2 from '~/assets/dinil/gowise-reportUnsafeArea.png';
import EmoVisionHome from '~/assets/dinil/emovision-home.png';
import EmoVision2 from '~/assets/dinil/emovision-map.png';

// Prefetch draco decoader wasm
export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a BICT undergraduate and a UX enthusiast.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const projectThree = useRef();
  const projectFour = useRef();
  const projectFive = useRef();
  const details = useRef();

  useEffect(() => {
    const sections = [intro, projectOne, projectTwo, projectThree, projectFour, projectFive, details];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '-0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);
  

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Heading as="h2" level={1} align="center" className={styles.projectsHeading}>
        Projects
      </Heading>
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="SheCare"
        description="Our UI UX solution won the most popular award at the Ballerina 2025 competition. This platform ensures womens' health and wellbeing with SheCare, a comprehensive app for tracking menstrual cycles, symptoms, and overall wellness."
        buttonText="View project"
        buttonLink="/projects/she-care"
        model={{
          type: 'laptop',
          alt: 'Project SheCare mockup',
          textures: [
        
            {
              srcSet: `${ShecareHome} 1919w, ${sprTextureLarge} 2560w`,
              placeholder: sprTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="wibhage.lk"
        description="PHP-based examination management system"
        buttonText="View project"
        buttonLink="/projects/wibhage"
        model={{
          type: 'laptop',
          alt: 'wibhage.lk website mockup',
          textures: [
            {
              srcSet: `${WibhageHome} 375w, ${WibhageHome} 750w`,
              placeholder: WibhageHome,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-3"
        sectionRef={projectThree}
        visible={visibleSections.includes(projectThree.current)}
        index={3}
        title="Widasa"
        description="An e‑magazine for Sri Lankan readers"
        buttonText="View website"
        buttonLink="/projects/widasa"
        model={{
          type: 'laptop',
          alt: 'Widasa e‑magazine website mockup',
          textures: [
            {
              srcSet: `${WidasaHome} 800w, ${WidasaHome} 1920w`,
              placeholder: WidasaHome,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-4"
        sectionRef={projectFour}
        visible={visibleSections.includes(projectFour.current)}
        index={4}
        title="GoWise"
        description="A women’s safety platform with alerts, safe zones, and trusted contacts."
        buttonText="View project"
        buttonLink="/projects/gowise"
        model={{
          type: 'phone',
          alt: 'GoWise mobile app mockup',
          textures: [
            {
              srcSet: `${GoWise2} 375w, ${GoWise2} 750w`,
              placeholder: GoWise2,
            },
            {
              srcSet: `${GoWiseHome} 375w, ${GoWiseHome} 750w`,
              placeholder: GoWiseHome,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-5"
        sectionRef={projectFive}
        visible={visibleSections.includes(projectFive.current)}
        index={5}
        title="EmoVision"
        description="A 2050 concept: emotion‑based social platform connecting people."
        buttonText="View project"
        buttonLink="/projects/emovision"
        model={{
          type: 'phone',
          alt: 'EmoVision mobile app mockup',
          textures: [
            {
              srcSet: `${EmoVision2} 360w, ${EmoVision2} 750w`,
              placeholder: EmoVision2,
            },
            {
              srcSet: `${EmoVisionHome} 360w, ${EmoVisionHome} 750w`,
              placeholder: EmoVisionHome,
            },
          ],
        }}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <Footer />
    </div>
  );
};
