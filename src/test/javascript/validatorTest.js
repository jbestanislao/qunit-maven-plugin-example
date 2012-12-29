test("Test valid email", function() {
    expect(1);
    equal(true, validateEmail("testuser.lastname@pcmall.com"));
});

test("Test invalid email", function() {
    expect(1);
    equal(false, validateEmail(";drop table test;@pcmall.com"));
});