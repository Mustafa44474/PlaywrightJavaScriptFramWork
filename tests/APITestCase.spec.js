const { request } = require('@playwright/test');
const fs = require('fs');

(async () => {
    const endpoint = 'https://run.mocky.io/v3/your-custom-id';
    const payload = `<?xml version="1.0" encoding="UTF-8"?>
<User>
    <FirstName>John</FirstName>
    <LastName>Doe</LastName>
    <Email>john.doe@example.com</Email>
    <Phone>+1234567890</Phone>
</User>`;

    const context = await request.newContext();
    let responses = '';
    
    for (let i = 0; i < 500; i++) {
        const response = await context.post(endpoint, {
            headers: {
                'Content-Type': 'application/xml',
            },
            data: payload,
        });

        const responseBody = await response.text();
        responses += `Request ${i + 1} Response:\n${responseBody}\n\n`;
        console.log(`Request ${i + 1} completed`);
    }

    fs.writeFileSync('Response.text', responses, 'utf-8');
    console.log('All responses saved to Response.text');
})();
