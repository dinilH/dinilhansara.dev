import backgroundSprLarge from '~/assets/spr-background-large.jpg';
import backgroundSprPlaceholder from '~/assets/spr-background-placeholder.jpg';
import imageSprBackgroundVolcanismLarge from '~/assets/spr-background-volcanism-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from '~/assets/spr-background-volcanism-placeholder.jpg';
import imageSprBackgroundVolcanism from '~/assets/spr-background-volcanism.jpg';
import backgroundSpr from '~/assets/spr-background.jpg';
import imageSprComponentsDarkLarge from '~/assets/spr-components-dark-large.png';
import imageSprComponentsDarkPlaceholder from '~/assets/spr-components-dark-placeholder.png';
import imageSprComponentsDark from '~/assets/spr-components-dark.png';
import imageSprComponentsLightLarge from '~/assets/spr-components-light-large.png';
import imageSprComponentsLightPlaceholder from '~/assets/spr-components-light-placeholder.png';
import imageSprComponentsLight from '~/assets/spr-components-light.png';
import imageSprDesignSystemDarkLarge from '~/assets/spr-design-system-dark-large.png';
import imageSprDesignSystemDarkPlaceholder from '~/assets/spr-design-system-dark-placeholder.png';
import imageSprDesignSystemDark from '~/assets/spr-design-system-dark.png';
import imageSprDesignSystemLightLarge from '~/assets/spr-design-system-light-large.png';
import imageSprDesignSystemLightPlaceholder from '~/assets/spr-design-system-light-placeholder.png';
import imageSprDesignSystemLight from '~/assets/spr-design-system-light.png';
import imageSprLessonBuilderDarkLarge from '~/assets/spr-lesson-builder-dark-large.jpg';
import imageSprLessonBuilderDarkPlaceholder from '~/assets/spr-lesson-builder-dark-placeholder.jpg';
import imageSprLessonBuilderDark from '~/assets/spr-lesson-builder-dark.jpg';
import imageSprLessonBuilderLightLarge from '~/assets/spr-lesson-builder-light-large.jpg';
import imageSprLessonBuilderLightPlaceholder from '~/assets/spr-lesson-builder-light-placeholder.jpg';
import imageSprLessonBuilderLight from '~/assets/spr-lesson-builder-light.jpg';
import videoSprMotionLarge from '~/assets/spr-motion-large.mp4';
import videoSprMotionPlaceholder from '~/assets/spr-motion-placeholder.jpg';
import videoSprMotion from '~/assets/spr-motion.mp4';
import imageSprSchema1DarkLarge from '~/assets/spr-schema-1-dark-large.png';
import imageSprSchema1DarkPlaceholder from '~/assets/spr-schema-1-dark-placeholder.png';
import imageSprSchema1Dark from '~/assets/spr-schema-1-dark.png';
import imageSprSchema1LightLarge from '~/assets/spr-schema-1-light-large.png';
import imageSprSchema1LightPlaceholder from '~/assets/spr-schema-1-light-placeholder.png';
import imageSprSchema1Light from '~/assets/spr-schema-1-light.png';
import imageSprSchema2DarkLarge from '~/assets/spr-schema-2-dark-large.png';
import imageSprSchema2DarkPlaceholder from '~/assets/spr-schema-2-dark-placeholder.png';
import imageSprSchema2Dark from '~/assets/spr-schema-2-dark.png';
import imageSprSchema2LightLarge from '~/assets/spr-schema-2-light-large.png';
import imageSprSchema2LightPlaceholder from '~/assets/spr-schema-2-light-placeholder.png';
import imageSprSchema2Light from '~/assets/spr-schema-2-light.png';
import imageSprStoryboarderDarkLarge from '~/assets/spr-storyboarder-dark-large.png';
import imageSprStoryboarderDarkPlaceholder from '~/assets/spr-storyboarder-dark-placeholder.png';
import imageSprStoryboarderDark from '~/assets/spr-storyboarder-dark.png';
import imageSprStoryboarderLightLarge from '~/assets/spr-storyboarder-light-large.png';
import imageSprStoryboarderLightPlaceholder from '~/assets/spr-storyboarder-light-placeholder.png';
import imageSprStoryboarderLight from '~/assets/spr-storyboarder-light.png';
import { Footer } from '~/components/footer';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { SegmentedControl, SegmentedControlOption } from '~/components/segmented-control';
import { ThemeProvider, useTheme } from '~/components/theme-provider';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';
import { Suspense, lazy, useMemo } from 'react';
import { media } from '~/utils/style';
import styles from './she-care.module.css';

import ShecareHome from '~/assets/dinil/shecare-home.png';

const title = 'She Care';
const description =
  'I was the team leader for Team Binary Bots for the Innovate with Ballerina 2025 competition organized by IEEE SB of University of Moratuwa.';
const roles = [
  'Ballerina',
  'UX and UI Design',
  'Front End Development',
  'Backend Development',
];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const SheCare = () => {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    toggleTheme(themes[index]);
  };

  return (
    <>
      <ProjectContainer>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          src={backgroundSpr}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://github.com/dinilH/iwb25-138-binary-bots"
          roles={roles}
          linkLabel="View Code"
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={theme}
              srcSet={
                isDark
                  ? `${ShecareHome} 1280w, ${ShecareHome} 2560w`
                  : `${ShecareHome} 1280w, ${ShecareHome} 2560w`
              }
              width={1280}
              height={800}
              placeholder={
                isDark
                  ? ShecareHome
                  : ShecareHome
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <ProjectSectionHeading>The problem</ProjectSectionHeading>
            <ProjectSectionText>
              Women’s health data is fragmented, underutilized, and poorly connected across existing platforms.Today, women often need to use multiple separate apps for:
              Period tracking,
              Wellness and mood tracking,
              Mental health support,
              Reliable health information
              These tools do not talk to each other, which causes:
              Incomplete health insights,
              Missed patterns between cycle, mood, stress, and lifestyle,
              Generic advice instead of personalized guidance
              Privacy risks when sensitive data is spread across platforms
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            
            <ProjectTextRow>
              <ProjectSectionHeading>How We Used Ballerina</ProjectSectionHeading>
              <ProjectSectionText>
                Ballerina played a core role in building SheCare’s backend. We leveraged its unique strengths to:<br/>

                • <strong>Microservices & Orchestration:</strong> Designed modular services for period tracking, wellness logging, and health news aggregation, each running independently while seamlessly communicating.<br/>

                • <strong>Secure API Integration:</strong> Connected external APIs (e.g., NewsAPI for health articles) with strict type safety and built-in authentication mechanisms.<br/>

                • <strong>Data Flow Simplification:</strong> Used Ballerina's intuitive syntax and built-in HTTP/JSON support to simplify complex health data handling and reduce boilerplate code.<br/>

                • <strong>Privacy & Security:</strong> Enforced secure communication between services and ensured user-sensitive health data is processed safely.<br/>

                • <strong>Scalability & Maintainability:</strong> Designed APIs that are easy to extend, making SheCare adaptable for future AI models and healthcare provider integrations.<br/>

                • <strong>Observability & Debugging:</strong> Leveraged Ballerina's logs, error handling, and observability tools to track health data flows and ensure reliability.<br/>
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        
      </ProjectContainer>
      <Footer />
    </>
  );
};
