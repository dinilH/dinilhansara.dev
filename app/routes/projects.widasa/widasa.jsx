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
import styles from './widasa.module.css';

const title = 'Widasa';
const description = 'An e‑magazine for Sri Lankan audience.';
const roles = ['Product Design', 'Frontend Development'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const Widasa = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.widasa}>
        <ProjectBackground opacity={0.8} />
        <ProjectHeader
          title={title}
          description={description}
          url="https://example.com/"
          roles={roles}
          linkLabel="View website"
        />
        <ProjectSection>
          <ProjectSectionContent>
            {/* TODO: Add Widasa screenshots and sections */}
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
