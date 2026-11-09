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
import Waypoint from '~/assets/dinil/Waypoint-1.png';
import SkillConnect from '~/assets/dinil/skill connect.png';
import NexusOne from '~/assets/dinil/Nexus-1.png';
import NexusTwo from '~/assets/dinil/Nexus-2.png';

export const links = () => [
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

export const meta = () =>
  baseMeta({
    title: 'Designer + Developer',
    description: `Design portfolio of ${config.name} — a BICT undergraduate and a UX enthusiast.`,
  });

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const projectRefs = [useRef(), useRef(), useRef(), useRef(), useRef()];
  const details = useRef();

  useEffect(() => {
    const sections = [intro, ...projectRefs, details];
    const sectionObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            sectionObserver.unobserve(entry.target);
            setVisibleSections(previous =>
              previous.includes(entry.target) ? previous : [...previous, entry.target]
            );
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );
    const indicatorObserver = new IntersectionObserver(
      ([entry]) => setScrollIndicatorHidden(!entry.isIntersecting),
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => sectionObserver.observe(section.current));
    indicatorObserver.observe(intro.current);
    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, []);

  const projects = [
    {
      title: 'Waypoint',
      description:
        'A unified logistics platform connecting five user roles across Sri Lankan retail delivery operations.',
      buttonLink: 'https://www.behance.net/gallery/258166845/Waypoint-Delivery-Management-System?platform=direct',
      texture: Waypoint,
      device: 'laptop',
      alt: 'Waypoint delivery management system',
    },
    {
      title: 'SkillConnect',
      description:
        'A platform where students connect, share skills, request help, and build a community.',
      buttonLink: 'https://github.com/dinilH/SkillConnect',
      texture: SkillConnect,
      device: 'laptop',
      alt: 'SkillConnect platform',
    },
    {
      title: 'Nexus Wheelchair',
      description:
        'A smart wheelchair companion app connected to volunteers and a caretaker portal.',
      buttonLink: 'https://www.behance.net/gallery/254440321/Nexus-Wheelchair-UIUX-case-study',
      textures: [NexusOne, NexusTwo].map(src => ({
        srcSet: `${src} 1000w`,
        placeholder: src,
      })),
      device: 'phone',
    },
    {
      title: 'SheCare',
      description:
        'A comprehensive app for tracking menstrual cycles, symptoms, and overall wellness.',
      buttonLink: '/projects/she-care',
      texture: ShecareHome,
      device: 'laptop',
      alt: 'SheCare application',
    },
    {
      title: 'wibhage.lk',
      description: 'PHP-based examination management system for schools.',
      buttonLink: '/projects/wibhage',
      texture: WibhageHome,
      device: 'laptop',
      alt: 'wibhage.lk examination management system',
    },
  ];

  return (
    <div className={styles.home}>
      <Intro id="intro" sectionRef={intro} scrollIndicatorHidden={scrollIndicatorHidden} />
      <Heading as="h2" level={1} align="center" className={styles.projectsHeading}>
        Projects
      </Heading>
      {projects.map((project, index) => (
        <ProjectSummary
          key={project.title}
          id={`project-${index + 1}`}
          sectionRef={projectRefs[index]}
          visible={visibleSections.includes(projectRefs[index].current)}
          index={index + 1}
          title={project.title}
          description={project.description}
          buttonText="View project"
          buttonLink={project.buttonLink}
          textures={
            project.textures ||
            [project.texture].map(src => ({
              srcSet: `${src} 1920w`,
              placeholder: src,
            }))
          }
          device={project.device}
        />
      ))}
      <Profile sectionRef={details} visible={visibleSections.includes(details.current)} id="details" />
      <Footer />
    </div>
  );
};
