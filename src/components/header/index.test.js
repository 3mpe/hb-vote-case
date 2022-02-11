import React from "react";
import { render, screen } from "@testing-library/react";

import Header from "./index";
describe('header test', () => {

    it ('should render header', () => {
        const { container } = render(<Header />);

        const headerLength = container.querySelectorAll('.header').length;
        expect(headerLength).toBe(1);

        const header = screen.getByText(/hepsiburada/i);
        expect(header).toBeInTheDocument();
    });

});