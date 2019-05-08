var assert = require("assert").strict;
var login = require("../../modules/login");

describe("Login module", function() {
  it("should return true if login values are correct", async function() {
    var loggedIn = await login();
    assert.ok(loggedIn);
  });
});
