var assert = require('assert').strict;
var post = require('../../modules/post');

describe('Post module', function () {
    it('should attempt to post if the correct values are provided', function () {
        var dto = {
            image: '/home/adam/workspace/mission/craigy/config/images/10/5.png',
            title: '5',
            city: 'lacrosse',
            price: 10,
            body: 'This is the body'
        }
        post(dto)
    })
})