export default function Content({
  $wrapper,
  initialState,
  onEnter,
  onClick,
  onClear,
}) {
  this.state = initialState;

  const $target = document.createElement("article");
  $target.className = "content";
  $wrapper.append($target);

  this.render = () => {
    $target.innerHTML = `
      <p>Press enter or add a comma after each tags</p>
        
      <ul>

        ${
          this.state.tags
            ? [...this.state.tags]
                .map((tag) => `<li>${tag} <i class="fa-thin fa-x"></i></li>`)
                .join("")
            : ""
        }
          
        <input  type="text" placeholder="${
          this.state.tags ? "" : "Add a tag..."
        }">
      </ul>

   <div class="details">
      <p><span>${
        this.state.tags ? 10 - this.state.tags.size : 10
      }</span> tags are remaining</p>
      <button>Remove All</button>
   </div>       
    `;

    const $input = document.querySelector(".content input");
    $input.addEventListener("keyup", (e) => {
      if (e.key === "Enter") {
        const a = this.state.tags ? this.state.tags.size : 0;
        if (a > 9) {
          $input.value = "";
          return;
        }
        onEnter($input.value);
      }
    });
    const $crossLine = document.querySelector(".content ul");
    $crossLine.addEventListener("click", (e) => {
      if (e.target.closest("i")) {
        onClick(e.target.closest("li").innerText);
      }
    });

    const $removeBtn = document.querySelector(".details button");
    $removeBtn.addEventListener("click", () => {
      onClear();
    });
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render();
}
