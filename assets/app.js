// Verify that web worker supoprt is enabled in browser
/************************************************** */
if (typeof(Worker) !== "undefined") {
    console.log('Yes! Web worker support!');
} else {
    console.log('Sorry! No Web Worker support.');
}

// Define HTML element variables
/******************************* */
const videoFrame = document.querySelector('#frame');
const scan = document.querySelector('#start');
const scanResult = document.querySelector('#result');

// Connect to scanner library via cdn
/************************************ */

// Start Scan using Device Camera
scan.addEventListener('click', () => {
    // toggle visibily to bring video preview into view
    videoFrame.classList.toggle('hidden');

    // initialize async/await
    Quagga.init({
        inputStream : {
          name : "Live",
          type : "LiveStream",
          target: document.querySelector('#frame')  // highlight where in DOM to load preview
        },
        decoder : {
          readers : ["upc_reader"] // specify which type of barcode reader
        },
      }, function(err) {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");

          // Start scanning the bardcode
          Quagga.start() 
          //Quagga.onProcessed(callback);

          // On detection process results of scan
          Quagga.onDetected(function(result) {
            if(result.codeResult) {
                console.log("result", result.codeResult.code); // log to console as test
                scanResult.innerText = `Result: ${result.codeResult.code}`; // place in DOM as preview
                Quagga.stop();
                videoFrame.classList.add('hidden'); // hide preview on completion
            } else {
                document.querySelector('#result').innerText = "not detected"; // display error text
                videoFrame.classList.add('hidden'); // hide preivew on error
            }
        });
      })
    });



// Stop Scan & terminate media device
// document.querySelector('#stop').addEventListener('click', () => {
//     Quagga.stop();
//     // document.querySelector('#frame').innerHTML = '';
// });

