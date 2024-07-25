document.addEventListener('DOMContentLoaded', function () {
    const gearIcon = document.querySelector('.gear-icon');
    const settingsSection = document.getElementById('settingsSection');
    const closeSettingsIcon = document.querySelector('.close-settings-icon');

    gearIcon.addEventListener('click', function () {
        settingsSection.style.display = 'block';
        setTimeout(() => settingsSection.classList.add('show'), 10); // Delay to allow for display change
    });

    closeSettingsIcon.addEventListener('click', function () {
        settingsSection.classList.remove('show');
        setTimeout(() => settingsSection.style.display = 'none', 100); // Match this timeout with the transition duration in CSS
    });
});
