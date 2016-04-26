describe('LED', function() {
    var grid;
    var inputs;
    var gridNum;

    beforeEach(function() {
       
        inputs = 910;
        grid=["._.","...","|.|","..|","._|","|_|","|_."];
        gridNum=[[0,2,5],[1,3,3],[0,4,6],[0,4,4],[1,5,3],[0,6,5],[0,6,5],[0,3,3],[0,5,5],[0,5,3]];
    });

    describe('Unit Test', function() {
        describe('Text stringarray',function () {
            it('return right stringarray',function () {
                var stringarray= buildNumberToStringArray(inputs);
                expect(stringarray).toEqual(["9","1","0"]);

            });

        });
    });
    describe('Unit Test', function() {
        describe('Text allStr',function () {
            it('return right allStr',function () {
                var stringarray= buildNumberToStringArray(inputs);
                var allStr= buildNumberString(stringarray,grid,gridNum) ;
                expect(allStr).toEqual(
                    "\n"+"._."+" "+"..."+" "+"._."+" "+"\n" +"|_|"+" "+"..|"+" "+"|.|"+" "+"\n" +"..|"+" "+"..|"+" "+"|_|"+" "+"\n"

                );

            });

        });
    });
    
    
    
    it('should print correct text', function() {

        spyOn(console, 'log');

        printReceipt(inputs,grid,gridNum);

        var expectText ="\n"+"._."+" "+"..."+" "+"._."+" "+"\n" +"|_|"+" "+"..|"+" "+"|.|"+" "+"\n" +"..|"+" "+"..|"+" "+"|_|"+" "+"\n"
      

    expect(console.log).toHaveBeenCalledWith(expectText);
    });
});

