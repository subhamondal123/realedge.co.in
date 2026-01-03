export const capitalizeEachWord = (value) => {
    return value
        .toLowerCase()
        .replace(/\b\w/g, char => char.toUpperCase());
};

export function generateRandomNumber(length) {
    if (length <= 0) return "";

    const min = Math.pow(10, length - 1);
    const max = Math.pow(10, length) - 1;

    return Math.floor(min + Math.random() * (max - min + 1)).toString();
}



export function generateCaptcha() {
    let captchaText = "";
    const canvas = document.getElementById("captchaCanvas");
    const ctx = canvas.getContext("2d");

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Background
    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Generate text
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
    captchaText = "";
    for (let i = 0; i < 6; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    // Text style
    ctx.font = "30px Arial";
    ctx.textBaseline = "middle";

    // Draw text with random rotation
    for (let i = 0; i < captchaText.length; i++) {
        const x = 20 + i * 25;
        const y = canvas.height / 2;
        const angle = (Math.random() - 0.5) * 0.5;

        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(angle);
        ctx.fillStyle = "#333";
        ctx.fillText(captchaText[i], 0, 0);
        ctx.restore();
    }

    // Noise lines
    for (let i = 0; i < 5; i++) {
        ctx.strokeStyle = `rgba(0,0,0,${Math.random()})`;
        ctx.beginPath();
        ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
        ctx.stroke();
    }

    // Noise dots
    for (let i = 0; i < 30; i++) {
        ctx.fillStyle = "#999";
        ctx.beginPath();
        ctx.arc(
            Math.random() * canvas.width,
            Math.random() * canvas.height,
            1.5,
            0,
            Math.PI * 2
        );
        ctx.fill();
    }
    return captchaText
}