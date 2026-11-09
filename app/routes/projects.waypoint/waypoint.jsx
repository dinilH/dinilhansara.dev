import { Footer } from '~/components/footer';
import {
  ProjectContainer,
  ProjectHeader,
  ProjectSection,
  ProjectSectionContent,
} from '~/layouts/project';
import { baseMeta } from '~/utils/meta';

const title = 'Waypoint';
const description =
  'A unified logistics platform connecting five user roles across Sri Lankan retail delivery operations.';

export const meta = () => baseMeta({ title, description, prefix: 'Projects' });

export const Waypoint = () => (
  <>
    <ProjectContainer>
      <ProjectHeader
        title={title}
        description={description}
        url="https://www.behance.net/gallery/258166845/Waypoint-Delivery-Management-System?platform=direct"
        linkLabel="View project"
        roles={['UX Research', 'Product Design', 'Logistics']}
      />
      <ProjectSection>
        <ProjectSectionContent />
      </ProjectSection>
    </ProjectContainer>
    <Footer />
  </>
);
