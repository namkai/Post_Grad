import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import React from 'react';
import { FeedHeader } from '../../../../src/Pages/Feed/Components/FeedAbout/FeedHeader';

describe('FeedHeader', () => {
	it('Renders a feedHeader component', () => {
		const feedHeader = shallow(<FeedHeader />);
		expect(toJson(feedHeader)).toMatchSnapshot();
	});
});