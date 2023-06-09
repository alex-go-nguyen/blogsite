import { MiniNavigation } from '@/components';
import renderer, { ReactTestRendererJSON } from 'react-test-renderer';

describe('MiniNavigation component', () => {
  test('should render correctly', () => {
    const component = renderer.create(
      <MiniNavigation>
        <p>Home</p>
        <p>Blog</p>
        <p>Logout</p>
      </MiniNavigation>,
    );
    let tree = component.toJSON() as ReactTestRendererJSON;
    expect(tree).toMatchSnapshot();
  });
});
