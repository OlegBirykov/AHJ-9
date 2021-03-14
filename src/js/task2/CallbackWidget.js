export default class CallbackWidget {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.classes = this.constructor.classes;
  }

  static get classes() {
    return {
      widget: 'callback-widget',
      header: 'callback-header',
      title: 'callback-title',
      buttonSend: 'button-send',
      buttonClose: 'button-close',
      buttonActivate: 'button-activate',
      hide: 'hide',
    };
  }

  static get markup() {
    return `
      <form class="${this.classes.hide}">
        <div class="${this.classes.header}">
          <p class="${this.classes.title}">Напишите нам</p>
          <button class="${this.classes.buttonClose}" type="reset">x</button>
        </div>
        <textarea name="text" rows="7" required></textarea>
        <button class="${this.classes.buttonSend}" type="submit">Отправить</button>
      </form>
      <button class="${this.classes.buttonActivate}"></button>
    `;
  }

  bindToDOM() {
    this.widget = document.createElement('div');
    this.widget.classList.add(this.classes.widget);
    this.widget.innerHTML = this.constructor.markup;

    this.form = this.widget.querySelector('form');
    this.activate = this.widget.querySelector(`.${this.classes.buttonActivate}`);

    this.form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this.hideForm();
    });
    this.form.addEventListener('reset', () => this.hideForm());
    this.activate.addEventListener('click', () => this.showForm());

    this.parentEl.appendChild(this.widget);
  }

  showForm() {
    this.form.text.value = '';
    this.activate.classList.add('hide');
    this.form.classList.remove('hide');
  }

  hideForm() {
    this.form.classList.add('hide');
    this.activate.classList.remove('hide');
  }
}
