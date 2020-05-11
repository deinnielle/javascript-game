class SideEnemy {
  constructor(x, direction) {
    this.r = 50;
    this.x = x;
    this.y = 500;
    this.v = 0;
    this.rv = Math.random() * 2 + 1;
    this.direction = direction;
  }

  right() {
    this.x += this.rv;
  }

  left() {
    this.x -= this.rv;
  }

  show() {
    image(fishImage, this.x, this.y, this.r, this.r);
  }
}
