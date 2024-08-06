const { createCanvas } = require('canvas');
const fs = require('fs');

function generateGraph(data) {
    const width = 800;
    const height = 400;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');

    // Background
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, width, height);

    // Draw the bar graph
    const barWidth = 50;
    const gap = 20;
    const maxBarHeight = height - 100;
    const maxDataValue = Math.max(...data.map(d => d.Value));

    ctx.fillStyle = 'skyblue';

    data.forEach((d, i) => {
        const barHeight = (d.Value / maxDataValue) * maxBarHeight;
        const x = i * (barWidth + gap) + 50;
        const y = height - barHeight - 50;
        ctx.fillRect(x, y, barWidth, barHeight);
        ctx.fillStyle = '#000';
        ctx.fillText(d.Month, x, height - 30);
        ctx.fillText(d.Value, x, y - 10);
        ctx.fillStyle = 'maroon';
    });

    // Save the graph image
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync('public/images/graph.png', buffer);
}

module.exports = generateGraph;