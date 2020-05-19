class Character {
  constructor() {
    this.r = 80;
    this.x = 500;
    this.y = height - this.r;
    this.vy = 0;
    this.gravity = 5;
  }

  jump() {
    this.vy = -30;
  }

  left() {
    this.x += -5;
  }

  right() {
    this.x += 5;
  }

  stop(y) {
    this.y = y;
  }

  update() {
    this.y += this.vy;
    if (this.vy <= 0) {
      this.vy += this.gravity;
    }
    this.y = constrain(this.y, 0, height - this.r);
    this.x = constrain(this.x, 0, width - (this.r + 6));
  }

  show() {
    image(boatImage, this.x, this.y, this.r, this.r);
  }
}
