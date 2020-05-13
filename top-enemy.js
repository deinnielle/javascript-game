class TopEnemy {
  constructor() {
    this.r = 50;
    this.x = Math.floor(Math.random() * 1024 + 0);
    this.y = -this.r;
    this.v = 0;
    this.rv = Math.random() * 2 + 1;
  }

  down() {
    this.y += this.rv;
  }

  show() {
    image(fire, this.x, this.y, this.r, this.r);
  }
}
