import renderer from 'react-test-renderer';

import ProfileCard from '../components/ProfileCard/ProfileCard';
import EditProfile from '../components/ProfileCard/EditProfile/EditProfile';

it('Profile page renders correctly', () => {
    const tree= renderer.create(<ProfileCard />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Edit profile renders correctly', () => {
    const tree= renderer.create(<EditProfile />).toJSON();
    expect(tree).toMatchSnapshot();
});