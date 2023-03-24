import renderer from 'react-test-renderer';
import Acknowledgement from '../components/Acknowledgement/Consent';
import Castle from '../images/castle.jpg';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

it('Background image renders correctly', () => {
    expect(Castle).toMatchImageSnapshot();
});

it('Acknowledgement renders correctly', () => {
    const tree= renderer.create(<Acknowledgement />).toJSON();
    expect(tree).toMatchSnapshot();
});