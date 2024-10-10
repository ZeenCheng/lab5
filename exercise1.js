// 获取 canvas 元素和其 2D 上下文
var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// 绘制脸部的圆形
ctx.beginPath();
ctx.arc(200, 200, 100, 0, Math.PI * 2, true); // 外圆
ctx.fillStyle = 'yellow';  // 设置填充颜色为黄色
ctx.fill();  // 填充圆
ctx.stroke();  // 绘制圆边框

// 绘制左眼
ctx.beginPath();
ctx.arc(160, 170, 10, 0, Math.PI * 2, true);  // 左眼
ctx.fillStyle = 'black';  // 设置填充颜色为黑色
ctx.fill();  // 填充左眼

// 绘制右眼
ctx.beginPath();
ctx.arc(240, 170, 10, 0, Math.PI * 2, true);  // 右眼
ctx.fillStyle = 'black';  // 设置填充颜色为黑色
ctx.fill();  // 填充右眼

// 绘制嘴巴
ctx.beginPath();
ctx.arc(200, 220, 50, 1/6*Math.PI, 5/6*Math.PI, false);  // 嘴巴为半圆形
ctx.stroke();  // 绘制嘴巴边框

// 在画布上添加文本
ctx.font = '20px Arial';  // 设置字体和大小
ctx.fillStyle = 'black';  // 设置文本颜色
ctx.fillText('The canvas brought me to life! ', 70, 350);  // 在指定位置绘制文本

ctx.beginPath();
// The following specify the path your
// paint-brush would follow to draw the plus sign
ctx.moveTo(200,200);
ctx.lineTo(200,230);
ctx.stroke(); // Draw the path just constructed above
