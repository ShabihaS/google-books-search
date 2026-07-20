import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {

  test("renders button text", () => {
    render(
      <Button>
        Click Me
      </Button>
    );

    expect(
      screen.getByText("Click Me")
    ).toBeInTheDocument();
  });


  test("calls function when clicked", () => {

    const handleClick = vi.fn();

    render(
      <Button onClick={handleClick}>
        Click Me
      </Button>
    );


    fireEvent.click(
      screen.getByText("Click Me")
    );


    expect(handleClick)
      .toHaveBeenCalled();

  });

});