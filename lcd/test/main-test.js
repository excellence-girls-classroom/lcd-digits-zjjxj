describe('LCD', function () {
    var inputs;
    var allLcds;

    beforeEach(function () {
        inputs = 910;
        allLcds = loadAllLcds();
    });

    describe('Unit Test', function () {
        
        describe('Text numberarray', function () {
            inputs = 910;
            it('return right numberarray', function () {
                var numberArray = buildNumberArray(inputs);

                expect(numberArray).toEqual([9, 1, 0]);

            });

        });

        describe('Text lcdarray', function () {
            inputs = 910;
            it('return right lcdarray', function () {
                var numberArray = buildNumberArray(inputs);
                var lcdArray = buildLcdString(allLcds, numberArray);

                expect(lcdArray).toEqual(
                    [['._.', '|_|', '..|'], ['...', '..|', '..|'], ['._.', '|.|', '|_|']]
                );

            });

        });
    });

    describe('Integration Testing', function () {
        inputs = 910;
        it('should print correct text', function () {

            spyOn(console, 'log');

            printLcd(inputs);

            var expectText = '._. ... ._.\n' + '|_| ..| |.|\n' + '..| ..| |_|';


            expect(console.log).toHaveBeenCalledWith(expectText);
        });
    });
});

