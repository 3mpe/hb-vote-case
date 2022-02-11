import React from "react";
import {fireEvent, render} from "@testing-library/react";

import ListItem from "./index";

const testObj = { point: 4,  name: "Test",  link: "https://www.google.com" };
const upVote = jest.fn();
const downVote = jest.fn();
const deleteVote = jest.fn();


describe("listItem test", () => {
  it("should render the component", () => {
    const { container } = render(<ListItem item={testObj} index={0} />);
    const listLength = container.querySelectorAll('.list-item').length;
    expect(listLength).toBe(1);
  });

  it("should render the component with text", () => {
      const { container } = render(<ListItem item={testObj} index={0} upVote={upVote} downVote={downVote} delete={deleteVote}/>);
      const point = testObj.point;
      const expectedPoint = point + 'POINTS';
      expect(container.querySelector(".point").textContent).toBe(expectedPoint);
  });

  it("upVote button test", () => {
    const { container } = render(<ListItem item={testObj} index={0} upVote={upVote} downVote={downVote} delete={deleteVote}/>);
    const listLength = container.querySelectorAll('.fa-arrow-up').length;
    expect(listLength).toBe(1);

    const upVoteButton = container.querySelector(".fa-arrow-up");
    fireEvent.click(upVoteButton);
    expect(upVote).toHaveBeenCalled();
  });

  it("downVote button test", () => {
    const { container } = render(<ListItem item={testObj} index={0} upVote={upVote} downVote={downVote} delete={deleteVote}/>);
    const listLength = container.querySelectorAll('.fa-arrow-down').length;
    expect(listLength).toBe(1);

    const downVoteButton = container.querySelector(".fa-arrow-down");
    fireEvent.click(downVoteButton);
    expect(downVote).toHaveBeenCalled();
  });


});