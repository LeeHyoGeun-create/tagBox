export default function Header({ $wrapper }) {
  const $target = document.createElement("header");
  $target.className = "title";
  $wrapper.append($target);

  this.render = () => {
    $target.innerHTML = `
      <i class="fa-solid fa-tags"></i>
      <h2>Tags</h2>
    `;
  };

  this.render();
}
