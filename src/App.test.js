import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {expect} from 'chai'
import {shallow} from 'enzyme'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('When the app component is rendered ...', () => {
  let wrapper = shallow(<App/>)
  it('has the correct html structure', () => {
    expect(wrapper.find('div')).to.have.lengthOf(1)
  })
})
