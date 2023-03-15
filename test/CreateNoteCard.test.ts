import { render, fireEvent } from "@testing-library/vue";
import CreateNoteCard from "@/components/notes/CreateNoteCard.vue";
import { expect, test } from "vitest";

test("it should work", async () => {
  const { getByText, getByPlaceholderText } = render(CreateNoteCard);

  const addBtn = getByText("Add")
  const noteTitleInput = getByPlaceholderText("Your note title")
  const noteDescriptionInput = getByPlaceholderText("Type your text here. Feel free to use markdown")


  await fireEvent.update(noteTitleInput, "Title")
  await fireEvent.update(noteDescriptionInput, "Description")

});
