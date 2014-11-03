//load scripts based on test
//Modernizr.load

Modernizr.load({
    test: Modernizr.inputtypes.date,
        yep: "js/success.js",
        nope: "js/fail.js",
        complete: function(){
        //run after js is loaded

        console.log("The test is complete");


        }

});