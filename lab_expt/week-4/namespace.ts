namespace GovernmentID{
    const aadhaarLength=12;
    export function validateAadhaar(aadhaar:string):boolean{
        const isNumeric=/^\d+$/.test(aadhaar);
        return isNumeric && aadhaar.length===aadhaarLength;
    }
    
    export function validatePAN(pan:string):boolean{
        const panRegex=/^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan);
    }

}

const aadhaarNumber:string='456789012123';
const panNumber:string='ABCDE1234F';

console.log(GovernmentID.validateAadhaar(aadhaarNumber));
console.log(GovernmentID.validatePAN(panNumber));