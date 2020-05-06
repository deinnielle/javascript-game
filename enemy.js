class Enemy {
  constructor() {
    this.r = 50;
    this.x = Math.floor(Math.random() * 1024 + 0);
    this.y = -this.r;
    this.v = 0;
    this.rv = Math.random() * 0.2 + 0.1;
  }

  move() {
    this.y += this.v;
  }

  down() {
    this.v += this.rv;
  }

  show() {
    image(fishImage, this.x, this.y, this.r, this.r);
  }
}
