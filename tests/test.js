
var expect = chai.expect;

describe('test', function() {
    it('should pass', function() {
        expect(10 === 10).to.be.true;
    });

    it('should fail gloriously', function() {
        expect(10 === "10").to.be.false;
    });
})
