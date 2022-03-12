import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'
import Header from './Header';

describe("Header component tests", () => {
  test("renders without crash", ()=> {
    const div = document.createElement("div");
  
    ReactDOM.render(<Header/>, div);
    ReactDOM.unmountComponentAtNode(div)
  });

  
  test("Snapshot test for Header", ()=> {
    const component = renderer.create(<Header />).toJSON()

    expect(component).toMatchSnapshot()
  });
})
