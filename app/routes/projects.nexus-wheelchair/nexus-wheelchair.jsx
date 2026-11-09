import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';

const title = 'Nexus Wheelchair';
const description =
  'A smart wheelchair companion app connected to a live volunteer network and caretaker portal.';

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const NexusWheelchair = () => (
  <>
    <ProjectContainer>
      <ProjectHeader
        title={title}
        description={description}
        url="https://www.behance.net/gallery/254440321/Nexus-Wheelchair-UIUX-case-study"
        linkLabel="View project"
        roles={['UX Research', 'UI/UX Design', 'Accessibility']}
      />
      <ProjectSection>
        <ProjectSectionContent />
      </ProjectSection>
    </ProjectContainer>
    <Footer />
  </>
);
