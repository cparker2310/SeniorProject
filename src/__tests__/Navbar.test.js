import renderer from 'react-test-renderer';

import Navbar from '../components/NavBar/Navbar';

it('Navbar renders correctly', () => {
    const tree= renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
});