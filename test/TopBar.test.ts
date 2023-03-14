import { render } from "@testing-library/vue";
import TopBar from "@/components/main/TopBar.vue";
import { expect, test } from "vitest";

test("it should work", () => {
  const { getByText } = render(TopBar);

  getByText("Bootmine");
});
