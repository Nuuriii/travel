import { fireEvent, render, screen } from "@testing-library/react";
import ItemList from "./itemList";

describe("check text & add function", () => {
  test("Check String", () => {
    render(<ItemList />);

    //write code for find string
    const titleElement = screen.getByText("Daftar Item");
    const inputElement = screen.getByPlaceholderText("tambahkan item");

    //expect string to be in the document
    expect(titleElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });
  test("Check add function", () => {
    render(<ItemList />);

    //write code for find string
    const inputElement = screen.getByPlaceholderText("tambahkan item");
    const addItemButton = screen.getByText("Tambah Item");

    //write code for check add function
    fireEvent.change(inputElement, { target: { value: "Item Baru" } });
    fireEvent.click(addItemButton);

    //write code for check new item is to be in the document
    const newItemElement = screen.getByText("Item Baru");
    expect(newItemElement).toBeInTheDocument();
  });
});
