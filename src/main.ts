import { factory } from "./factory";

let count :()=>number = factory(0, 1);

function update_count_and_reset_counter() {
  const start:number = +start_at_control.value;
  const step:number = +step_control.value;
  count = factory(start, step);
}

const start_at_control = document.getElementById(
  "start_at",
) as HTMLInputElement;

const step_control = document.getElementById("step") as HTMLInputElement;

start_at_control?.addEventListener("change", () => {
  update_count_and_reset_counter()
});

step_control?.addEventListener("change", () => {
  update_count_and_reset_counter()
});

const count_button = document.querySelector(
  ".count_button",
) as HTMLButtonElement;

const current_count = document.querySelector(
  ".current_count",
) as HTMLSpanElement;


function update_count() {
  const result:number = count();
  current_count.innerHTML = result.toString();
}

count_button.addEventListener("click", update_count);
