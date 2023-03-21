import renderer from 'react-test-renderer';

import LogIn from '../components/LogIn/login';

it('Log in renders correctly', () => {
    const tree= renderer.create(<LogIn />).toJSON();
    expect(tree).toMatchSnapshot();
});