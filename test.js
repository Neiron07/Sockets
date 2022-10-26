
const Service = {
  sumOfNum: (a,b) => {
    return a+b;
  }
};

describe('test',()=>{
    test('must to return 50', ()=>{
        expect(Service.sumOfNum(4,5)).toBe(9);
    });
})
