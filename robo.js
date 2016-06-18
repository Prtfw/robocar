var j5 = require("johnny-five");
var brd = new j5.Board();

brd.on('ready', function(){
    console.log('beepbop');
    var m1 = new j5.Motor({
      pins: {
        pwm:5,
        dir:4
      },
      invertPWM: true
    });

    var m2 = new j5.Motor({
      pins: {
        pwm:3,
        dir:2
      },
      invertPWM: true
    });

    function fwd(){
                  console.log("in fwd");

      m1.forward(255);
      m2.forward(255);

    }

    function cut(){
      m1.stop();
      m2.stop();
    }

    function rvs(){
            console.log("in rvs");

      m1.reverse(255);
      m2.reverse(255);
    }

    function bf(){
      fwd();

      brd.wait(2000, function(){
        console.log("in b1");
        cut();
         console.log("done cut1");
               rvs();

        brd.wait(2000, function(){
          console.log("in b2");
          cut();
          console.log("done cut2");
        })
      })


    };








    this.repl.inject({
      m1:m1,
      m2:m2,
      fwd:fwd,
      cut:cut,
      rvs:rvs,
      bf:bf,
    })
});
