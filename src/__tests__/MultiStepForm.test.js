import renderer from 'react-test-renderer';
import Career from '../components/MultiStepForm/Career';
import ContactInfo from '../components/MultiStepForm/ContactInfo';
import Education from '../components/MultiStepForm/Education';
import Form from '../components/MultiStepForm/Form';
import Location from '../components/MultiStepForm/Location';
import PersonalDetails from '../components/MultiStepForm/PersonalDetails';
import Castle from '../images/castle.jpg';

const { toMatchImageSnapshot } = require('jest-image-snapshot');
expect.extend({ toMatchImageSnapshot });

it('Background image renders correctly', () => {
    expect(Castle).toMatchImageSnapshot();
});

it('Career section renders correctly', () => {
    const tree= renderer.create(<Career />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Contact Info section renders correctly', () => {
    const tree= renderer.create(<ContactInfo />).toJSON();
    expect(tree).toMatchSnapshot();
});


it('Education section renders correctly', () => {
    const tree= renderer.create(<Education />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Form renders correctly', () => {
    const tree= renderer.create(<Form />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Location section renders correctly', () => {
    const tree= renderer.create(<Location />).toJSON();
    expect(tree).toMatchSnapshot();
});

it('Personal details section renders correctly', () => {
    const tree= renderer.create(<PersonalDetails />).toJSON();
    expect(tree).toMatchSnapshot();
});
