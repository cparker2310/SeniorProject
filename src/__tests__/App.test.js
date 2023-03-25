import renderer from 'react-test-renderer';
import App from '../App';
import Castle from '../images/castle.jpg';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

it('Background image renders correctly', () => {
    expect(Castle).toMatchImageSnapshot();
});

it('App renders correctly', () => {
    const tree= renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});