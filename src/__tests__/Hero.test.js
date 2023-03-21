import renderer from 'react-test-renderer';

import Hero from '../components/Hero/Hero';

it('Hero section renders correctly', () => {
    const tree= renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
});