// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const endDate = new Date('2024-09-15T00:00:00+04:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.getElementById('months').innerText = months;
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
    }

    setInterval(updateCountdown, 1000);

});
