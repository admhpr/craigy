
var assert = require('assert').strict;
var format = require('../../utils/format');


describe('Format util', function(){
    describe('Capitalise', function(){
        it('should return the same word with a capital first letter', function(){
            var word = format.capitalFirstLetter('pickles');
            assert.ok(word.charAt(0) === 'P');
            assert.ok(word.substring(1) === 'ickles')
            assert.ok(word.toLowerCase() === 'pickles');
        })
    })
})