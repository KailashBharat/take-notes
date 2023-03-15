import { render } from "@testing-library/vue";
import NoteCard from "@/components/notes/NoteCard.vue";
import { expect, test } from "vitest";

test("it should work", () => {
  const { getByText } = render(NoteCard, {
    props: {
      title: "title",
      description: "description",
      id: "id",
    },
  });

  getByText("title");
  getByText("description");
});
