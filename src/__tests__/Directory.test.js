import renderer from 'react-test-renderer';
import Filter from '../components/Directory/Filter';
import Search from '../components/Directory/Header/index';
import UserCard from '../components/Directory/UserCard/UserCard';
import Castle from '../images/castle.jpg';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

it('Background image renders correctly', () => {
    expect(Castle).toMatchImageSnapshot();
});

it('Filter renders correctly', () => {
    const tree= renderer.create(<Filter />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Search bar renders correctly', () => {
    const tree= renderer.create(<Search />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Individual user renders correctly', () => {
    const tree= renderer.create(<UserCard />).toJSON();
    expect(tree).toMatchSnapshot();
});