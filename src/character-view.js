export default class CharacterView {

  constructor(data) {
    this.element = document.createElement(`div`);
    this.element.classList.add(`character`);

    this.element.innerHTML = `
      <div class="character__pic"></div>
      <h3 class="character__name"></h3>
      <div id="hero-modal" class="hero-modal--active hero-modal">
        <div class="hero-modal-card">
        <button class="hero-close-button">X</button>
        <p class="hero-modal-title">${data.name}</p>
        <p class="hero-modal-text">${data.description}</p>
        </div>
    `;
    this.data = data;

    this.renderCharacterPic();
    this.renderCharacterName();
    this.triggerHeroModal();
  }

  renderCharacterPic() {
    this.element.querySelector(`.character__pic`).innerHTML =
    `<img class="characters-pic__img" src="${this.data.thumbnail.path}.${this.data.thumbnail.extension}" alt="">`;
  }
  renderCharacterName() {
    this.element.querySelector(`.character__name`).innerHTML = `<h3 class="character__name">${this.data.name}</h3>`;
  }
  triggerHeroModal() {
    const hero = this.element.querySelector(`.character__pic`);
    const heroClose = this.element.querySelector(`.hero-close-button`);
    const heroModal = this.element.querySelector(`#hero-modal`);
    hero.addEventListener(`click`, () => {
      heroModal.classList.toggle(`hero-modal--active`);
    });
    heroClose.addEventListener(`click`, () => {
      heroModal.classList.toggle(`hero-modal--active`);
    });
  }}
