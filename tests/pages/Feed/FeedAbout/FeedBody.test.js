import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { FeedBody } from '../../../../src/pages/Feed/Components/FeedAbout/FeedBody';

describe('FeedBody', () => {
	it('Renders a feedBody component', () => {
		const feedBody = shallow(<FeedBody />);
		expect(toJson(feedBody)).toMatchSnapshot();
	});
});