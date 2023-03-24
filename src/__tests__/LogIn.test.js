import renderer from 'react-test-renderer';
import LogIn from '../components/LogIn/login';
import Castle from '../images/castle.jpg';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

it('Background image renders correctly', () => {
    expect(Castle).toMatchImageSnapshot();
});

it('Log in renders correctly', () => {
    const tree= renderer.create(<LogIn />).toJSON();
    expect(tree).toMatchSnapshot();
});