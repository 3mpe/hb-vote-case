import React from "react";
import {render, screen} from "@testing-library/react";

import Button from "./index";

describe("<Button />", () => {

    it("should render the component", () => {
        render(<Button/>);
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("should render the component with text", () => {
         render(<Button text="Test" />);
        expect(screen.getByText("Test")).toBeInTheDocument();
    });

    it("should render the component with icon", () => {
        const { container } = render(<Button iconName="test" />);
        const icon = container.querySelector(".fa");
        expect(icon).toBeInTheDocument();
    });

    it("should render the component with an icon and text", () => {
        const { container } = render(<Button iconName="test" text="Test" />);
        const icon = container.querySelector(".fa");

        expect(screen.getByText("Test")).toBeInTheDocument();
        expect(icon).toBeInTheDocument();
    });

});