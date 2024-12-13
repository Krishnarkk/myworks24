
import { render, waitFor,screen } from "@testing-library/react";
import Products from "./Products";
import "@testing-library/jest-dom";
const mockResponse = [
  {
    id: 1,
    title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    description:
      "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
];
const mockFetch = () => {
  return Promise.resolve({
    json: () => Promise.resolve(mockResponse),
  });
};
describe("test products component", () => {
  it("should render products", () => {
    const { getByTestId } = render(<Products />);
    const title = getByTestId("prod-title");
    expect(title).toBeInTheDocument();
  });

  it("should mock the api call render title", async () => {
    global.fetch = jest.fn(() => mockFetch());
    const { getByText } = render(<Products />);
    
    await waitFor(() => {
        expect(
            getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
        ).toBeInTheDocument();
    });
    screen.debug(null,{pretty:true})
  });
  it("should return error if API fails", async () => {
    global.fetch = jest.fn(() => Promise.reject({json: () => Promise.reject("failed to fetch products")}));
    const { getByText } = render(<Products />);
    await waitFor(() => {
        expect(
            getByText("failed to fetch products")
        ).toBeInTheDocument();
    });
    screen.debug(null,{pretty:true})
  });
});
