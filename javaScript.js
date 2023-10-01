
document.addEventListener('DOMContentLoaded', function () {
    const birthdateInput = document.getElementById('birthdate');
    const submitButton = document.getElementById('submit');
    const zodiacSign = document.getElementById('zodiac-sign');
    const horoscope = document.getElementById('horoscope');

    submitButton.addEventListener('click', function () {
        const birthdate = new Date(birthdateInput.value);
        const zodiac = determineZodiacSign(birthdate);
        const horoscopeData = fetchHoroscope(zodiac);

        zodiacSign.textContent = `Your Zodiac Sign: ${zodiac}`;
        horoscope.textContent = `Daily Horoscope: ${horoscopeData}`;
    });

    function determineZodiacSign(birthdate) {
        const month = birthdate.getMonth() + 1; // Month is zero-indexed, so add 1
        const day = birthdate.getDate();

        if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
            return 'Aries';
        } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
            return 'Taurus';
        } else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
            return 'Gemini';
        } else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
            return 'Cancer';
        } else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
            return 'Leo';
        } else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
            return 'Virgo';
        } else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
            return 'Libra';
        } else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
            return 'Scorpio';
        } else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
            return 'Sagittarius';
        } else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
            return 'Capricorn';
        } else if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
            return 'Aquarius';
        } else {
            return 'Pisces';
        }
    }

    function fetchHoroscope(zodiac) {
        // This is a simplified example using hardcoded horoscope data
        const horoscopeData = {
            Aries: "Today is a good day for new beginnings.",
            Taurus: "You might face challenges today, but stay persistent.",
            Gemini: "Communication will be your key strength today.",
            Cancer: "Focus on your emotional well-being today.",
            Leo: "Your creative energy is at its peak today.",
            Virgo: "Pay attention to detail in your tasks today.",
            Libra: "Seek balance in all aspects of your life today.",
            Scorpio: "Your intuition will guide you in making decisions today.",
            Sagittarius: "Embrace your adventurous spirit today.",
            Capricorn: "Focus on your career goals and ambitions today.",
            Aquarius: "Collaboration and teamwork will lead to success today.",
            Pisces: "Listen to your inner voice and trust your instincts today."
        };

        // Check if the provided zodiac sign is in the dataset
        if (zodiac in horoscopeData) {
            return horoscopeData[zodiac];
        } else {
            return "Horoscope data not available for this sign.";
        }
    }
});
