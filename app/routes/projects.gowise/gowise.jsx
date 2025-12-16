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
import styles from './gowise.module.css';

const title = 'GoWise';
const description = "A women’s safety platform with alerts, safe zones, and trusted contacts.";
const roles = ['Mobile UX', 'Safety Design', 'Prototyping'];

export const meta = () => {
  return baseMeta({ title, description, prefix: 'Projects' });
};

export const GoWise = () => {
  return (
    <Fragment>
      <ProjectContainer className={styles.gowise}>
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
            {/* TODO: Add GoWise flows and screens */}
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};
