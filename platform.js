class Platform {
  constructor(x, y) {
    this.r = 50;
    this.x = x;
    this.y = y;
  }

  show() {
    rect(this.x, this.y, this.r, this.r);
  }
}
