import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import { Button } from "./Button";

test("O botão chama a função ao ser clicado", async () => {
  const onClickMock = vi.fn()
  render(<Button onClick={onClickMock}>Clique Aqui</Button>)

  await userEvent.click(screen.getByRole("button", { name: "Clique Aqui" }));

  expect(onClickMock).toHaveBeenCalledTimes(1);
});