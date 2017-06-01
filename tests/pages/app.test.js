import React from 'react';
import { App } from '../../src/Pages/App';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('App', () => {
	it('Renders a app', () => {
		const app = shallow(<App />);
		expect(toJson(app)).toMatchSnapshot();
	});
});