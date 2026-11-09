import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';

const title = 'SheCare';
const description =
  'A comprehensive app for tracking menstrual cycles, symptoms, and overall wellness.';

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const SheCare = () => (
  <>
    <ProjectContainer>
      <ProjectHeader
        title={title}
        description={description}
        url="https://github.com/dinilH/iwb25-138-binary-bots"
        linkLabel="View code"
        roles={['Ballerina', 'UX and UI Design', 'Development']}
      />
      <ProjectSection>
        <ProjectSectionContent />
      </ProjectSection>
    </ProjectContainer>
    <Footer />
  </>
);
