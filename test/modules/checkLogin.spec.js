var assert = require('assert').strict;
var checkLogin = require('../../modules/checkLogin');
// useless, but tests mocha config
describe('Check Login module', function(){
    it('should return false if not logged in', async function(){
        var loggedIn = await checkLogin()
        assert.ok(loggedIn === false)
    })
})