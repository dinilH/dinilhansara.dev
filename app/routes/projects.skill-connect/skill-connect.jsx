import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';

const title = 'SkillConnect';
const description =
  'A platform where students connect, share skills, request help, and build a community.';

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const SkillConnect = () => (
  <>
    <ProjectContainer>
      <ProjectHeader
        title={title}
        description={description}
        url="https://github.com/dinilH/SkillConnect"
        linkLabel="View project"
        roles={['Product Design', 'React', 'Community']}
      />
      <ProjectSection>
        <ProjectSectionContent />
      </ProjectSection>
    </ProjectContainer>
    <Footer />
  </>
);
