import React from "react";
import { shallow } from "enzyme";
import Login from "./login";

const CORRECT_USER = {
  username: "Mona_Kassulke14",
  password: "EECsjlVnWIXfeuA",
};

describe('Test case for Login Component', () => {
	it("Should render a <form>", () => {
		const container = shallow(<Login />);
		expect(container.find("form").length).toEqual(1);
	});

	it("Should render 2 input", () => {
		const container = shallow(<Login />);
		expect(container.find("input").length).toEqual(2);
	});

	it("Should render a username input", () => {
		const container = shallow(<Login />);
		expect(container.find(`input#username[type="text"]`).length).toEqual(1);
	});

	it("Should render a password input", () => {
		const container = shallow(<Login />);
		expect(container.find(`input#password[type="password"]`).length).toEqual(1);
	});

	let wrapper;
	test('Check username change correctly', () => {
		wrapper = shallow(<Login />);
		wrapper.find(`input#username[type="text"]`).simulate('change', { target: { name: 'username', value: 'johndoe' } });
		let username = wrapper.find(`input#username[type="text"]`);
		expect(username.prop('value')).toEqual('johndoe');
	})

	it('Check password change correctly', () => {
		wrapper = shallow(<Login />);
		wrapper.find('input[type="password"]').simulate('change', { target: { name: 'password', value: 'johndoe123456@' } });
		let password = wrapper.find(`input#password[type="password"]`);
		expect(password.prop('value')).toEqual('johndoe123456@');
	})

	it('Check error message when username input is empty', async () => {
		wrapper = shallow(<Login />);
		wrapper.find('button').simulate('click');
		await sleep();
		let errMessage = wrapper.find('.error-message');
		expect(errMessage.text()).toEqual('Please enter the username');
	})

	it('Check error message when password input is empty', async () => {
		wrapper = shallow(<Login />);
		wrapper.find(`input#username[type="text"]`).simulate('change', { target: { name: 'username', value: 'johndoe' } });
		wrapper.find('button').simulate('click');
		await sleep();
		let errMessage = wrapper.find('.error-message');
		expect(errMessage.text()).toEqual('Please enter the password');
	})

	it('Check login with incorrect user data', async () => {
		wrapper = shallow(<Login />);
		wrapper.find(`input#username[type="text"]`).simulate('change', { target: { name: 'username', value: 'johndoe' } });
		wrapper.find(`input#password[type="password"]`).simulate('change', { target: { name: 'password', value: 'johndoe123@' } });
		wrapper.find('button').simulate('click');
		await sleep(500);
		expect(wrapper.find('button').text()).toBe('Login');
		expect(wrapper.find('h2').text()).toBe('Login to Kairos');
	})

	it('Check login with correct user data', async () => {
		wrapper = shallow(<Login />);
		wrapper.find(`input#username[type="text"]`).simulate('change', { target: { name: 'username', value: CORRECT_USER.username } });
		wrapper.find(`input#password[type="password"]`).simulate('change', { target: { name: 'password', value: CORRECT_USER.password } });
		wrapper.find('button').simulate('click');
		await sleep(3500);
		expect(wrapper.find('button').text()).toBe('Logout');
		expect(wrapper.find('h2').text()).toBe('Hello Jimmie Thompson');
	})

	it('Check logout after login successfully', async () => {
		wrapper = shallow(<Login />);
		expect(wrapper.find('button').text()).toBe('Logout');
		expect(wrapper.find('h2').text()).toBe('Hello Jimmie Thompson');
		wrapper.find('button').simulate('click');
		expect(wrapper.find('button').text()).toBe('Login');
		expect(wrapper.find('h2').text()).toBe('Login to Kairos');
	})
})

function sleep(time = 0) {
  return new Promise(resolve => {
    setTimeout(resolve, time);
  })
}