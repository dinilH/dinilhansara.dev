import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';

const title = 'wibhage.lk';
const description = 'PHP-based examination management system for schools.';

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const Slice = () => (
  <>
    <ProjectContainer>
      <ProjectHeader
        title={title}
        description={description}
        roles={['Backend Development', 'PHP', 'MySQL']}
      />
      <ProjectSection>
        <ProjectSectionContent />
      </ProjectSection>
    </ProjectContainer>
    <Footer />
  </>
);
