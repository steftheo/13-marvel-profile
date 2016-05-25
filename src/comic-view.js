'use strict';

export default class ComicView {
  constructor(data) {
    this.element = document.createElement(`div`);
    this.element.classList.add(`comic`);
    this.element.innerHTML =
    `<div class="comic-pic">
      <img class="generic" src="${data.thumbnail.path}.${data.thumbnail.extension}" alt=""/>
    </div>
    <div class="comic-number">#${data.issueNumber}</div>
    <div class="comic-name">${data.title}</div>
    <button class="read-more">Read More</button>
    <div id="modal" class="modal--active modal">
      <div class="modal-card">
      <button class="close-button">X</button>
      <p class="modal-title">${data.title}</p>
      <p class="modal-text">${data.description}</p>
      </div>
    </div>
    `;

    this.data = data;
    this.triggerModal();
  }
  triggerModal() {
    const button = this.element.querySelector(`.read-more`);
    const close = this.element.querySelector(`.close-button`);
    const modal = this.element.querySelector(`#modal`);
    button.addEventListener(`click`, () => {
      modal.classList.toggle(`modal--active`);
    });
    close.addEventListener(`click`, () => {
      modal.classList.toggle(`modal--active`);
    });
  }
   }
