import React from 'react';
import { Profile } from '../../../src/Pages/Feed';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('Profile', () => {
	it('Renders a profile', () => {
		const profile = shallow(<Profile />);
		expect(toJson(profile)).toMatchSnapshot();
	});
});