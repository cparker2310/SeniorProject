import renderer from 'react-test-renderer';
import ProfileCard from '../components/ProfileCard/ProfileCard';
import EditProfile from '../components/ProfileCard/EditProfile/EditProfile';
import Castle from '../images/castle.jpg';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

it('Background image renders correctly', () => {
    expect(Castle).toMatchImageSnapshot();
});

it('Profile page renders correctly', () => {
    const tree= renderer.create(<ProfileCard />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Edit profile renders correctly', () => {
    const tree= renderer.create(<EditProfile />).toJSON();
    expect(tree).toMatchSnapshot();
});