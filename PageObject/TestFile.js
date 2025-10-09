


function generateDynamicPayload() {
    const firstNames = ['Adrew', 'John', 'Michael', 'Sarah', 'Jessica'];
    const middleNames = ['Thomas', 'John', 'Smith', 'Alex', 'Jordan'];
    const lastNames = ['Harri', 'Smith', 'Johnson', 'Brown', 'Williams'];
    const domains = ['hotmail.com', 'example.com', 'gmail.com', 'yahoo.com'];
    const empID = Math.floor(Math.random() * 100000);

    const emailList = [
        `${firstName}${empID}@hotmail.com`,
        `${firstName}${empID}@example.com`,
        `${firstName}${empID}@wellsfargo.com`,
        `${firstName}.${lastName}${empID}@wellsfargo.com`,
        `${firstName}.${lastName}@wellsfargo.com`
    ];

    return {
        clientDomains: ["wellsfargo.com"],
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        empID: empID.toString(),
        emailList: emailList
    };
}

const payload = generatePayload();
console.log(payload);