const quotes = [
    { text: "Love is not about how many days, months, or years you have been together. Love is about how much you love each other every single day.", author: "Unknown" },
    { text: "The best love is the kind that awakens the soul and makes us reach for more, that plants a fire in our hearts and brings peace to our minds.", author: "Nicholas Sparks" },
    { text: "Love is composed of a single soul inhabiting two bodies.", author: "Aristotle" },
    { text: "I have found the paradox, that if you love until it hurts, there can be no more hurt, only more love.", author: "Mother Teresa" },
    { text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.", author: "Maya Angelou" },
    { text: "The greatest thing you'll ever learn is just to love and be loved in return.", author: "Moulin Rouge" },
    { text: "Love is when the other person's happiness is more important than your own.", author: "H. Jackson Brown Jr." },
    { text: "Love is not finding someone to live with; it's finding someone you can't live without.", author: "Rafael Ortiz" },
    { text: "To love and be loved is to feel the sun from both sides.", author: "David Viscott" },
    { text: "Love is the bridge between two hearts.", author: "Unknown" },
    { text: "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine.", author: "Maya Angelou" },
    { text: "Love is not about possession. Love is about appreciation.", author: "Osho" },
    { text: "The best and most beautiful things in this world cannot be seen or even heard, but must be felt with the heart.", author: "Helen Keller" },
    { text: "Love is the only force capable of transforming an enemy into a friend.", author: "Martin Luther King Jr." },
    { text: "Where there is love there is life.", author: "Mahatma Gandhi" },
    { text: "Love is like the wind, you can't see it but you can feel it.", author: "Nicholas Sparks" },
    { text: "The heart wants what it wants. There's no logic to these things. You meet someone and you fall in love and that's that.", author: "Woody Allen" },
    { text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", author: "1 Corinthians 13:4" },
    { text: "Love is the master key that opens the gates of happiness.", author: "Oliver Wendell Holmes" },
    { text: "True love is not a hide and seek game: in true love, both lovers seek each other.", author: "Michael Bassey Johnson" },
    { text: "Love doesn't make the world go round. Love is what makes the ride worthwhile.", author: "Franklin P. Jones" },
    { text: "The most precious possession that ever comes to a man in this world is a woman's heart.", author: "Josiah G. Holland" },
    { text: "Love is a game that two can play and both win.", author: "Eva Gabor" },
    { text: "Love is the flower you've got to let grow.", author: "John Lennon" },
    { text: "Love is not only something you feel, it is something you do.", author: "David Wilkerson" },
    { text: "The greatest happiness of life is the conviction that we are loved; loved for ourselves, or rather, loved in spite of ourselves.", author: "Victor Hugo" },
    { text: "Love is the beauty of the soul.", author: "Saint Augustine" },
    { text: "Love is a friendship set to music.", author: "Joseph Campbell" },
    { text: "Love is the answer, and you know that for sure; Love is a flower, you've got to let it grow.", author: "John Lennon" },
    { text: "Love is the voice under all silences, the hope which has no opposite in fear.", author: "E.E. Cummings" },
    { text: "Love is an irresistible desire to be irresistibly desired.", author: "Robert Frost" },
    { text: "Love is the greatest refreshment in life.", author: "Pablo Picasso" },
    { text: "Love is like a beautiful flower which I can't wait to touch, but which may sting me if I do.", author: "T. William Shakespeare" },
    { text: "Love is not what you say. Love is what you do.", author: "Unknown" },
    { text: "Love is the triumph of imagination over intelligence.", author: "H. L. Mencken" },
    { text: "Love is a canvas furnished by nature and embroidered by imagination.", author: "Voltaire" },
    { text: "Love is the poetry of the senses.", author: "Honoré de Balzac" },
    { text: "Love is a sweet tyranny, because the lover endures his torment willingly.", author: "Proverb" },
    { text: "Love is the condition in which the happiness of another person is essential to your own.", author: "Robert A. Heinlein" },
    { text: "Love is not blind - it sees more, not less. But because it sees more, it is willing to see less.", author: "Julius Gordon" },
    { text: "Love is a force more formidable than any other. It is invisible - it cannot be seen or measured, yet it is powerful enough to transform you in a moment.", author: "Barbara De Angelis" },
    { text: "Love is the emblem of eternity; it confounds all notion of time.", author: "Madame de Staël" },
    { text: "Love is the only reality and it is not a mere sentiment. It is the ultimate truth that lies at the heart of creation.", author: "Rabindranath Tagore" },
    { text: "Love is a temporary madness, it erupts like volcanoes and then subsides.", author: "Louis de Bernières" },
    { text: "Love is not a feeling of happiness. Love is a willingness to sacrifice.", author: "Michael Novak" },
    { text: "Love is the magician that pulls man out of his own hat.", author: "Ben Hecht" },
    { text: "Love is like a virus. It can happen to anybody at any time.", author: "Maya Angelou" },
    { text: "Love is a language spoken by everyone but understood only by the heart.", author: "Unknown" },
    { text: "Love is the greatest adventure.", author: "Unknown" },
    { text: "Love is not something you find. Love is something that finds you.", author: "Loretta Young" },
    { text: "Love is giving someone the power to destroy you, but trusting them not to.", author: "Unknown" },
    { text: "Love is not about finding the right person, but creating a right relationship.", author: "Unknown" },
    { text: "Love is the closest thing we have to magic.", author: "Unknown" },
    { text: "Love is a verb. Without action, it is merely a word.", author: "Unknown" },
    { text: "Love is the bridge between you and everything.", author: "Rumi" },
    { text: "Love is the only gold.", author: "Alfred Lord Tennyson" },
    { text: "Love is the wisdom of the fool and the folly of the wise.", author: "Samuel Johnson" },
    { text: "Love is a circle that doth restless move in the same sweet eternity of love.", author: "Robert Herrick" },
    { text: "Love is anterior to life, posterior to death, initial of creation, and the exponent of breath.", author: "Emily Dickinson" },
    { text: "Love is the whole history of a woman's life, it is but an episode in a man's.", author: "Madame de Staël" },
    { text: "Love is a fruit in season at all times, and within reach of every hand.", author: "Mother Teresa" },
    { text: "Love is the child of illusion and the parent of disillusion.", author: "Miguel de Unamuno" },
    { text: "Love is an energy which exists of itself. It is its own value.", author: "Thornton Wilder" },
    { text: "Love is a game that two can play and both win.", author: "Eva Gabor" },
    { text: "Love is the expansion of two natures in such fashion that each includes the other, each is enriched by the other.", author: "Felix Adler" },
    { text: "Love is not a matter of counting the years... But making the years count.", author: "Michelle St. Amand" },
    { text: "Love is something eternal; the aspect may change, but not the essence.", author: "Vincent van Gogh" },
    { text: "Love is a promise, love is a souvenir, once given never forgotten, never let it disappear.", author: "John Lennon" },
    { text: "Love is the ultimate truth. It is the only thing that can give us happiness.", author: "Unknown" },
    { text: "Love is a gift of one's inner most soul to another so both can be whole.", author: "Buddha" },
    { text: "Love is a choice you make from moment to moment.", author: "Barbara De Angelis" },
    { text: "Love is a better teacher than duty.", author: "Albert Einstein" },
    { text: "Love is a state of being. Your love is not outside; it is deep within you.", author: "Eckhart Tolle" },
    { text: "Love is the immortal flow of energy that nourishes, extends and preserves. Its eternal goal is life.", author: "Smiley Blanton" },
    { text: "Love is a decision, it is a judgment, it is a promise.", author: "Erich Fromm" },
    { text: "Love is the only sane and satisfactory answer to the problem of human existence.", author: "Erich Fromm" },
    { text: "Love is like pi - natural, irrational, and very important.", author: "Lisa Hoffman" },
    { text: "Love is not something you feel, it's something you give.", author: "David Wilkerson" },
    { text: "Love is the thread that binds us all together.", author: "Unknown" },
    { text: "Love is the beauty and truth of the soul.", author: "Unknown" },
    { text: "Love is a song that never ends.", author: "Bambi" },
    { text: "Love is the key that opens every heart.", author: "Unknown" },
    { text: "Love is not about perfect. Love is about trying.", author: "Unknown" },
    { text: "Love is the comfort of knowing you are not alone.", author: "Unknown" },
    { text: "Love is when you meet someone who tells you something new about yourself.", author: "André Breton" },
    { text: "Love is seeing an imperfect person perfectly.", author: "Unknown" },
    { text: "Love is the strongest force the world possesses, and yet it is the humblest imaginable.", author: "Mahatma Gandhi" },
    { text: "Love is not just a feeling, it's an action. It's a choice we make every day.", author: "Unknown" },
    { text: "Love is the sunrise that brightens every dawn of togetherness.", author: "Unknown" },
    { text: "Love is the calm after the storm and the rainbow after the rain.", author: "Unknown" },
    { text: "Love is not about how much you say 'I love you', but how much you prove that it's true.", author: "Unknown" },
    { text: "Love is patient and kind, love is not jealous or boastful, love is not arrogant or rude.", author: "Corinthians" },
    { text: "Love is the fire that warms our hearts and souls.", author: "Unknown" },
    { text: "Love is the gentle whisper in the chaos of life.", author: "Unknown" },
    { text: "Love is not about finding someone to complete you, but finding someone to share your completeness with.", author: "Unknown" },
    { text: "Love is the anchor that keeps us grounded and the wings that help us soar.", author: "Unknown" },
    { text: "Love is like a puzzle. When you're in love, all the pieces fit.", author: "Unknown" },
    { text: "Love is the light that guides us through the darkness.", author: "Unknown" },
    { text: "Love is not about being inseparable; it's about being separated and nothing changes.", author: "Unknown" },
    { text: "Love is the medicine for the sickness of the world.", author: "Unknown" },
    { text: "Love is the heartbeat that gives life meaning.", author: "Unknown" },
    { text: "Love is not about two people staring at each other, but both looking in the same direction.", author: "Unknown" },
    { text: "Love is the courage to be vulnerable with another person.", author: "Unknown" },
    { text: "Love is the silence between two thoughts, the space between words, and the pause between heartbeats.", author: "Unknown" },
    { text: "Love is not about possession, it's about appreciation and gratitude.", author: "Unknown" },
    { text: "Love is the invisible thread that connects all hearts.", author: "Unknown" }
];

let currentQuoteIndex = 0;
let quotesRead = 1;

function createFloatingHearts() {
    const heartsContainer = document.getElementById('floating-hearts');

    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'floating-heart';
        heart.innerHTML = '♥';
        heart.style.left = Math.random() * 100 + '%';
        heart.style.fontSize = (Math.random() * 10 + 15) + 'px';
        heart.style.animationDelay = '0s';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';

        heartsContainer.appendChild(heart);

        setTimeout(() => {
            heartsContainer.removeChild(heart);
        }, 7000);
    }, 2000);
}

function generateNewQuote() {
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const quoteContainer = document.getElementById('quote-container');

    // Get a random quote different from current one
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex && quotes.length > 1);

    currentQuoteIndex = newIndex;
    const newQuote = quotes[currentQuoteIndex];

    // Animate out current quote
    gsap.to(quoteContainer, {
        duration: 0.5,
        opacity: 0,
        scale: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
            // Update text
            quoteText.textContent = `"${newQuote.text}"`;
            quoteAuthor.textContent = `— ${newQuote.author}`;

            // Update counter
            quotesRead++;
            document.getElementById('quote-count').textContent = quotesRead;

            // Animate in new quote
            gsap.fromTo(quoteContainer,
                { opacity: 0, scale: 0.8 },
                {
                    duration: 0.8,
                    opacity: 1,
                    scale: 1,
                    ease: "back.out(1.7)"
                }
            );

            // Animate counter
            gsap.fromTo('#quote-count',
                { scale: 1 },
                {
                    scale: 1.2,
                    duration: 0.3,
                    yoyo: true,
                    repeat: 1,
                    ease: "power2.inOut"
                }
            );
        }
    });
}

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    // Initial animations
    gsap.fromTo('.container',
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: "back.out(1.7)" }
    );

    gsap.fromTo('.app-title',
        { opacity: 0, y: -30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power2.out" }
    );

    gsap.fromTo('.subtitle',
        { opacity: 0 },
        { opacity: 1, duration: 1, delay: 0.5 }
    );

    gsap.fromTo('.quote-container',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1, delay: 0.7, ease: "back.out(1.7)" }
    );

    gsap.fromTo('.generate-btn',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.9, ease: "power2.out" }
    );

    gsap.fromTo('.stats',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 1, delay: 1.1, ease: "power2.out" }
    );

    createFloatingHearts();
});

// Button event listener
document.getElementById('generate-btn').addEventListener('click', () => {
    // Button click animation
    gsap.to('#generate-btn', {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut"
    });

    generateNewQuote();
});

// Add hover effects for the button
document.getElementById('generate-btn').addEventListener('mouseenter', () => {
    gsap.to('#generate-btn', {
        scale: 1.05,
        duration: 0.3,
        ease: "power2.out"
    });
});

document.getElementById('generate-btn').addEventListener('mouseleave', () => {
    gsap.to('#generate-btn', {
        scale: 1,
        duration: 0.3,
        ease: "power2.out"
    });
});