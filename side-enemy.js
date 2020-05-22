class SideEnemy {
  constructor(x, direction, levels) {
    this.r = 50;
    this.x = x;
    this.y = 500;
    this.v = 0;
    this.rv = Math.random() * 2 + 1 + levels * 0.1;
    this.direction = direction;
  }

  right() {
    this.x += this.rv;
  }

  left() {
    this.x -= this.rv;
  }

  show() {
    image(pirate, this.x, 450, 100, 100);
  }
}
