// import * as React from 'react';
import { /*shallow*/ configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import CreateEnrollment from './CreateEnrollment';
configure({ adapter: new Adapter() });
describe('CreateEnrollment', () => {
    // const defaultProps = {};

    it('tests something', () => {
        // shallow(<CreateEnrollment {...defaultProps} />);
    });
});
