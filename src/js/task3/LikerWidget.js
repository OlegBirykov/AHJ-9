export default class LikerWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.classes = this.constructor.classes;
  }

  static get classes() {
    return {
      widget: 'liker-widget',
      button: 'button-like',
    };
  }

  static get markup() {
    return `<button class="${this.classes.button}">Like</button>`;
  }

  bindToDOM() {
    this.widget = document.createElement('div');
    this.widget.classList.add(this.classes.widget);
    this.widget.innerHTML = this.constructor.markup;

    this.parentEl.appendChild(this.widget);
  }
}
