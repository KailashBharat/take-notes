import { render } from "@testing-library/vue";
import BottomBar from "@/components/main/BottomBar.vue";
import { test } from "vitest";

test("it should work", (ctx) => {
  const { getByText } = render(BottomBar, {
    global: {
      provide: {
        emitter: {
          on: (val: string, cb: Function) => {},
        },
      },
    },
  });
  getByText("Bootmine", { exact: false });
  getByText("notes", { exact: false });
});
