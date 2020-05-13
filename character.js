class Character {
  constructor() {
    this.r = 80;
    this.x = 500;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 2;
  }

  jump() {
    this.vy = -25;
  }

  left() {
    this.x += -8;
  }

  right() {
    this.x += 8;
  }

  stop(y) {
    this.y = y - 45;
    this.gravity = 0;
  }

  setGravity() {
    this.gravity = 2;
  }

  move() {
    this.y += this.vy;
    this.vy += this.gravity;
    this.y = constrain(this.y, 0, height - this.r);
    this.x = constrain(this.x, 0, width - (this.r + 6));
  }

  show() {
    image(boatImage, this.x, this.y, this.r, this.r);
  }
}
