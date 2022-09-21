// Verify that web worker supoprt is enabled in browser
/************************************************** */
if (typeof(Worker) !== "undefined") {
    console.log('Yes! Web worker support!');
} else {
    console.log('Sorry! No Web Worker support.');
}

// Connect to scanner library via cdn
/************************************ */

// Start Scan using Device Camera
document.querySelector('#start').addEventListener('click', () => {
    Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#frame')  // Or '#yourElement' (optional)
        },
        decoder : {
          readers : ["upc_reader"]
        },
      }, function(err) {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start()
          //Quagga.onProcessed(callback);
          Quagga.onDetected(function(result) {
            if(result.codeResult) {
                console.log("result", result.codeResult.code);
                document.querySelector('#result').innerText = result.codeResult.code;
            } else {
                console.log("not detected");
            }
        });
      })
    });



// Stop Scan & terminate media device
document.querySelector('#stop').addEventListener('click', () => {
    Quagga.stop();
    // document.querySelector('#frame').innerHTML = '';
});

// if scan is successful log results to console
function decoded(result) {
    console.log(`decoded barcode: ${result}`)
    console.log('decode barcode is: ', result);
}

