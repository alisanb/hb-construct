document.addEventListener('DOMContentLoaded', () => {
    const endDate = new Date('2024-09-15T00:00:00+04:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            document.getElementById('months').innerText = 0;
            document.getElementById('days').innerText = 0;
            document.getElementById('hours').innerText = 0;
            return;
        }

        const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        document.getElementById('months').innerText = months;
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
    }

    updateCountdown(); // Initial call to avoid delay
    setInterval(updateCountdown, 1000);
});

document.addEventListener('DOMContentLoaded', () => {
    const endDate = new Date('2024-09-15T00:00:00+04:00').getTime();

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = endDate - now;

        if (distance < 0) {
            document.getElementById('daysRemaining').innerText = 0;
            return;
        }

        const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));

        document.getElementById('daysRemaining').innerText = daysRemaining;
    }

    updateCountdown(); // Initial call to avoid delay
    setInterval(updateCountdown, 86400000); // Update every 24 hours
});
