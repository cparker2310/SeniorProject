import renderer from 'react-test-renderer';

import JobHeader from '../components/CareerCenter/Header/index';
import EditJob from '../components/CareerCenter/Jobs/EditJob/EditJob';
import JobCard from '../components/CareerCenter/Jobs/JobCard';
import NewJob from '../components/CareerCenter/Jobs/NewJob';

it('Career Center Header renders correctly', () => {
    const tree= renderer.create(<JobHeader />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Edit Job renders correctly', () => {
    const tree= renderer.create(<EditJob />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Individual Job renders correctly', () => {
    const tree= renderer.create(<JobCard />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Individual Job renders correctly', () => {
    const tree= renderer.create(<JobCard />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('New Job renders correctly', () => {
    const tree= renderer.create(<NewJob />).toJSON();
    expect(tree).toMatchSnapshot();
});
