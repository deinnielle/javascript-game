class Platform {
  constructor() {
    this.r = 50;
    this.x = 500;
    this.y = 450;
  }

  show() {
    rect(this.x, this.y, this.r, this.r);
  }
}
