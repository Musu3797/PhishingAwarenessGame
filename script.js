const scenarios = [
    {
        title: "Suspicious Email",
        description: "An email claims to be from the IT department asking for your password. Is this phishing?",
        image: "images/email.png",
        content: `
            <p>From: it-department@company.com</p>
            <p>Subject: Password Reset Required</p>
            <p>Dear User,</p>
            <p>Your password is about to expire. Please reply with your current password to reset it.</p>
            <button class="phishing" onclick="checkAnswer('yes')">Report as Phishing</button>
            <button class="safe" onclick="checkAnswer('no')">It's Safe</button>
        `,
        correctAnswer: "yes",
        feedback: "Correct! This is a phishing email. Never share your password via email."
    },
    {
        title: "Fake Login Page",
        description: "A pop-up window appears asking you to log in to your account. Is this phishing?",
        image: "images/login.png",
        content: `
            <p>https://secure-login.fakebank.com</p>
            <p>Username: <input type="text" placeholder="Enter your username"></p>
            <p>Password: <input type="password" placeholder="Enter your password"></p>
            <button class="phishing" onclick="checkAnswer('yes')">Report as Phishing</button>
            <button class="safe" onclick="checkAnswer('no')">It's Safe</button>
        `,
        correctAnswer: "yes",
        feedback: "Correct! The URL is suspicious. Always check the URL carefully."
    },
    {
        title: "Urgent Message",
        description: "An urgent message asks for immediate action, like verifying personal information. Is this phishing?",
        image: "images/urgent.png",
        content: `
            <p>From: admin@security-alert.com</p>
            <p>Subject: Immediate Action Required</p>
            <p>Dear User,</p>
            <p>Your account has been compromised. Please verify your personal information immediately.</p>
            <button class="phishing" onclick="checkAnswer('yes')">Report as Phishing</button>
            <button class="safe" onclick="checkAnswer('no')">It's Safe</button>
        `,
        correctAnswer: "yes",
        feedback: "Correct! Be cautious of urgent messages asking for personal information."
    },
    {
        title: "Suspicious Link",
        description: "An email contains a link to a website. Hover over the link to see the actual URL. Is this phishing?",
        image: "images/link.png",
        content: `
            <p>From: service@trustedbank.com</p>
            <p>Subject: Verify Your Account</p>
            <p>Click the following link to verify your account: <a href="https://secure-login.fakebank.com" onmouseover="showActualUrl()">https://trustedbank.com/verify</a></p>
            <button class="phishing" onclick="checkAnswer('yes')">Report as Phishing</button>
            <button class="safe" onclick="checkAnswer('no')">It's Safe</button>
        `,
        correctAnswer: "yes",
        feedback: "Correct! The actual URL is different from the displayed URL. Always hover over links to verify."
    }
];

let currentScenario = 0;

function loadScenario(index) {
    const scenario = scenarios[index];
    document.getElementById('scenario-title').textContent = scenario.title;
    document.getElementById('scenario-description').textContent = scenario.description;
    document.getElementById('scenario-image').src = scenario.image;
    document.getElementById('scenario-content').innerHTML = scenario.content;
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-button').style.display = 'none';
}

function checkAnswer(answer) {
    const scenario = scenarios[currentScenario];
    if (answer === scenario.correctAnswer) {
        document.getElementById('feedback').textContent = scenario.feedback;
    } else {
        document.getElementById('feedback').textContent = 'Incorrect. Please try again.';
    }
    document.getElementById('next-button').style.display = 'block';
}

function nextScenario() {
    currentScenario++;
    if (currentScenario < scenarios.length) {
        loadScenario(currentScenario);
    } else {
        document.getElementById('game').innerHTML = '<h2>Congratulations! You have completed the Phishing Awareness Game.</h2>';
    }
}

function showActualUrl() {
    alert('Actual URL: https://secure-login.fakebank.com');
}

// Load the first scenario when the page loads
window.onload = function() {
    loadScenario(currentScenario);
};
