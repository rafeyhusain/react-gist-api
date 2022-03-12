import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Search from './Search'

describe("Search component tests", () => {
  test("renders without crash", ()=> {
    const div = document.createElement("div")
  
    ReactDOM.render(<Search onSearch={()=>{}}/>, div)
    ReactDOM.unmountComponentAtNode(div)
  });

  test("Snapshot test for Search", ()=> {
    const component = renderer.create(<Search onSearch={() => {}} />).toJSON()

    expect(component).toMatchSnapshot()
  });
})

