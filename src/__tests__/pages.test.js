import renderer from 'react-test-renderer';

import DirectoryPage from '../pages/Directory/directory';
import ProfilePage from '../pages/Profile/profile';
import SiteConduct from '../pages/conduct';
import Home from '../pages/home';
import MessageBoard from '../pages/messages';

it('Directory Page renders correctly ', () => {
    const tree= renderer.create(<DirectoryPage />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Profile Page renders correctly ', () => {
    const tree= renderer.create(<ProfilePage />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Site Conduct renders correctly ', () => {
    const tree= renderer.create(<SiteConduct />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Home Page renders correctly ', () => {
    const tree= renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Message Board renders correctly ', () => {
    const tree= renderer.create(<MessageBoard />).toJSON();
    expect(tree).toMatchSnapshot();
});