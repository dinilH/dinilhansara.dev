import { Footer } from '~/components/footer';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
} from '~/layouts/project';
import { Fragment } from 'react';
import { baseMeta } from '~/utils/meta';
import styles from './emovision.module.css';

const title = 'EmoVision';
const description = 'A 2050 concept: emotion‑based social platform connecting people.';
const roles = ['Product Design', 'UX Research', 'UI Prototyping'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const EmoVision = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.emovision}>
        <ProjectBackground opacity={0.8} />
        <ProjectHeader
          title={title}
          description={description}
          url=""
          roles={roles}
          linkLabel="View project"
        />
        <ProjectSection>
          <ProjectSectionContent>
            {/* TODO: Add EmoVision concept sections and visuals */}
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
