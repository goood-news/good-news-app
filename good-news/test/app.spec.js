var assert = require("assert");
// import assert from "assert";
const politics = require("../src/modules/Politics")

describe('계산기 테스트', function () {
    it('1+1은 2를 반환해라', function (done) {
        assert.equal(1+1, 2);
        done();
    });

    it('2*2 는 4를 반환해라', function (done) {
        assert.equal(2*2, 4);
        done();
    })
})

describe('Politics의 getData 함수는...', () => {
    it('data의 길이가 page number의 5배이다.', () => {
        const result = politics.getData();
        assert.equal(result.len, pageCnt * 5);
    })
})