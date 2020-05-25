class Gem {
  constructor(x, y) {
    this.r = 25;
    this.x = x;
    this.y = y;
  }

  show() {
    image(gem, this.x, this.y, this.r, this.r);
  }
}
