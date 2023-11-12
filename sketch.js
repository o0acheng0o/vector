let position;
let velocity;

function setup() {
  createCanvas(400, 400, WEBGL);
  position = createVector(0, 0, 0); // 初始位置
  velocity = createVector(1, 1, 1); // 初始速度
}

function draw() {
  background(220);

  // 更新位置
  position.add(velocity);

  // 分别检查每个维度的边界
  if (position.x > width / 2 || position.x < -width / 2) {
    velocity.x *= -1;
  }
  if (position.y > height / 2 || position.y < -height / 2) {
    velocity.y *= -1;
  }
  if (position.z > width / 2 || position.z < -width / 2) {
    velocity.z *= -1;
  }

  // 绘制对象
  translate(position.x, position.y, position.z);
  box(50); // 绘制一个立方体
}