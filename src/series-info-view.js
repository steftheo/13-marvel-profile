export default class seriesInfoView {
  constructor(element, data) {
    this.element = element;
    this.data = data;

    this.seriesCreators = document.createElement(`li`);
    this.renderTitle();
    this.renderItems();
  }


  renderTitle() {
    this.element.querySelector(`.header__title`).innerText = this.element.title;
  }

  renderItems() {
    const startDate = this.element.querySelector(`.sidebar__start-year`);
    const endDate = this.element.querySelector(`.sidebar__end-year`);


    this.element.querySelector(`.sidebar__start-year`).innerText = this.element.startDate;
    this.element.querySelector(`.sidebar__end-year`).innerText = this.element.endDate;
    this.element.querySelector(`.series__creators-name`).innerText = this.element.seriesCreators;

  }


}
