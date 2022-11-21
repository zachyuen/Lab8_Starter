// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// matches valid phone numbers
test('does phoneNumber1 match valid format', () => {
    expect(functions.isPhoneNumber('123-456-7899')).toBe(true);
});

test('does phoneNumber2 match valid format', () => {
    expect(functions.isPhoneNumber('(123)-456-7899')).toBe(true);
});

test('does phoneNumber3 match valid format', () => {
    expect(functions.isPhoneNumber('123-456-789')).toBe(false);
});

test('does phoneNumber4 match valid format', () => {
    expect(functions.isPhoneNumber('1')).toBe(false);
});

// matches valid emails
test('does email1 match valid format', () => {
    expect(functions.isEmail('batman@gmail.com')).toBe(true);
});

test('does email2 match valid format', () => {
    expect(functions.isEmail('robin@yahoo.net')).toBe(true);
});

test('does email3 match valid format', () => {
    expect(functions.isEmail('poisonivy@gmail.orgs')).toBe(false);
});

test('does email4 match valid format', () => {
    expect(functions.isEmail('mr.freeze@ucsd.edu')).toBe(false);
});

// passwords
test('is password1 strong', () => {
    expect(functions.isStrongPassword('password123')).toBe(true);
});

test('is password2 strong', () => {
    expect(functions.isStrongPassword('PASSWORD')).toBe(true);
});

test('is password3 strong', () => {
    expect(functions.isStrongPassword('1')).toBe(false);
});

test('is password4 strong', () => {
    expect(functions.isStrongPassword('123467891111111')).toBe(false);
});

// dates
test('is date1 valid', () => {
    expect(functions.isDate('12/34/5678')).toBe(true);
});

test('is date2 valid', () => {
    expect(functions.isDate('1/29/2002')).toBe(true);
});

test('is date3 valid', () => {
    expect(functions.isDate('02/13/22')).toBe(false);
});

test('is date4 valid', () => {
    expect(functions.isDate('January 1, 2000')).toBe(false);
});

// hex codes
test('is hex code1 valid', () => {
    expect(functions.isHexColor('DE4A2B')).toBe(true);
});

test('is hex code2 valid', () => {
    expect(functions.isHexColor('1B4C99')).toBe(true);
});

test('is hex code3 valid', () => {
    expect(functions.isHexColor('1234567')).toBe(false);
});

test('is hex code4 valid', () => {
    expect(functions.isHexColor('12')).toBe(false);
});