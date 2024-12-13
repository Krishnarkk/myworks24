import {fireEvent, render, screen} from "@testing-library/react";
import Counter from "./Counter";

describe("counter testing",()=>{
  it("check rendering",()=>{
    const {getByText}=render(<Counter/>)
    expect(getByText("Increment")).toBeInTheDocument()
  })
  it("should update counter value",()=>{
    const {getByTestId,getByText}=render(<Counter/>)
    const IncBtn=getByTestId("increment");
    fireEvent.click(IncBtn);
    fireEvent.click(IncBtn);
    expect(getByText(/Counter : 2/i)).toBeInTheDocument()

  })
  it("should decrease counter value",()=>{
    const {getByTestId,getByText}=render(<Counter/>)
    const decBtn=getByTestId("decrement");
    const IncBtn=getByTestId("increment");
    fireEvent.click(IncBtn);
    fireEvent.click(IncBtn);
    fireEvent.click(decBtn);
    // fireEvent.click(IncBtn);
    expect(getByText(/Counter : 1/i)).toBeInTheDocument()

  })

  it("should value reset",()=>{
    render(<Counter/>)
    const IncBtn=screen.getByTestId("increment");
    fireEvent.click(IncBtn);
    const resetBtn=screen.getByTestId("reset")
    fireEvent.click(resetBtn);
    expect(screen.getByText(/Counter : 0/i)).toBeInTheDocument()

  })

  it("should update counter value to double",()=>{
    const {getByTestId,getByText}=render(<Counter/>)
    const incBtn=getByTestId("increment")
    fireEvent.click(incBtn)
    const dbBtn=getByTestId("double")
    fireEvent.click(dbBtn)
    expect(getByText(/counter : 2/i)).toBeInTheDocument()

  })
})