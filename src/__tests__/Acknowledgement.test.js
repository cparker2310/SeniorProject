import renderer from 'react-test-renderer';

import Acknowledgement from '../components/Acknowledgement/Consent';

it('Acknowledgement renders correctly', () => {
    const tree= renderer.create(<Acknowledgement />).toJSON();
    expect(tree).toMatchSnapshot();
});