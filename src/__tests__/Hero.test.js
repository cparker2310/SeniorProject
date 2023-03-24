import renderer from 'react-test-renderer';
import Hero from '../components/Hero/Hero';
import Castle from '../images/castle.jpg';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

it('Background image renders correctly', () => {
    expect(Castle).toMatchImageSnapshot();
});

it('Hero section renders correctly', () => {
    const tree= renderer.create(<Hero />).toJSON();
    expect(tree).toMatchSnapshot();
});