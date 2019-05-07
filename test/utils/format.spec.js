var assert = require('assert').strict;
var format = require('../../utils/format');


describe('Format util', function () {
    describe('Capitalise', function () {
        it('should return the same word with a capital first letter', function () {
            var word = format.capitalFirstLetter('pickles');
            assert.ok(word.charAt(0) === 'P');
            assert.ok(word.substring(1) === 'ickles')
            assert.ok(word.toLowerCase() === 'pickles');
        })
    })

    describe('String to boolean', function () {
        it('Should return false if the string "false" or "" is passed in', function () {
            assert.ok(format.stringToBoolean('') === false)
            assert.ok(format.stringToBoolean('false') === false)
        });
        it('Should return true if any other value is passed in', function () {
            assert.ok(format.stringToBoolean('true'))
            assert.ok(format.stringToBoolean(1))
            assert.ok(format.stringToBoolean(0))
        })
    })
})