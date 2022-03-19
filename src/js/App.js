import Header from "./Header.js";
import Content from "./Content.js";

export default function App({ $app }) {
  this.state = {
    tags: new Set([]),
  };

  const $wrapper = document.createElement("section");
  $wrapper.className = "wrapper";
  $app.append($wrapper);

  const header = new Header({ $wrapper });
  const content = new Content({
    $wrapper,
    initialState: [],
    onEnter: (value) => {
      const nextState = this.state;
      value.split(",").forEach((val) => {
        nextState.tags.add(val);
      });
      this.setState(nextState);
      const $input = document.querySelector(".content input");
      $input.focus();
    },
    onClick: (value) => {
      const nextState = this.state;
      nextState.tags.delete(value);
      this.setState(nextState);
    },

    onClear: () => {
      this.state.tags.clear();
      this.setState();
    },
  });

  this.setState = (nextState) => {
    if (nextState) {
      this.state = nextState;
    }
    content.setState(this.state);
  };
}
