export default class LikerWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.classes = this.constructor.classes;
  }

  static get classes() {
    return {
      widget: 'liker-widget',
      button: 'button-like',
      heart: 'heart',
    };
  }

  static get markup() {
    return `<button class="${this.classes.button}">Like</button>`;
  }

  bindToDOM() {
    this.widget = document.createElement('div');
    this.widget.classList.add(this.classes.widget);
    this.widget.innerHTML = this.constructor.markup;

    this.button = this.widget.querySelector(`.${this.classes.button}`);
    this.button.addEventListener('click', () => this.createHeart());

    this.parentEl.appendChild(this.widget);
  }

  createHeart() {
    const heart = document.createElement('img');
    heart.classList.add(this.classes.heart);
    const variant = Math.trunc(Math.random() * 4) + 1;
    heart.classList.add(`${this.classes.heart}-${variant}`);
    heart.src = 'img/heart.png';
    heart.width = 30;

    heart.addEventListener('animationend', () => {
      heart.remove();
    });

    this.widget.appendChild(heart);
  }
}
