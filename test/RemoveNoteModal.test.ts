import { fireEvent, render } from "@testing-library/vue";
import RemoveNoteModal from "@/components/main/RemoveNoteModal.vue";
import { expect, test } from "vitest";

test("it should work", async() => {
  const { getByText } = render(RemoveNoteModal, {
    props: {
      title: "test",
    },
  });
  const removeBtn = getByText("Remove");
  const cancelBtn = getByText("Cancel");

  getByText("This action cannot be undone");
  getByText("test");


  await fireEvent.click(cancelBtn);
  await fireEvent.click(removeBtn);
});
