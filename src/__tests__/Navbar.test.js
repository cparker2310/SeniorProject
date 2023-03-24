import renderer from 'react-test-renderer';
import Navbar from '../components/NavBar/Navbar';
import Castle from '../images/castle.jpg';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

it('Background image renders correctly', () => {
    expect(Castle).toMatchImageSnapshot();
});

it('Navbar renders correctly', () => {
    const tree= renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
});