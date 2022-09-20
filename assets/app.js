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
          readers : ["UPC"]
        }
      }, function(err) {
          if (err) {
              console.log(err);
              return
          }
          console.log("Initialization finished. Ready to start");
          Quagga.start();
          console.log(codeResult[code]);
      });
    });
// Stop Scan & terminate media device
document.querySelector('#stop').addEventListener('click', () => {
    Quagga.stop();
    // document.querySelector('#frame').innerHTML = '';
});

// // Set video Eleemtn on page
// const videoElement = document.querySelector('#video');

// Grant access to user's webcam via the browser
/*********************************************** */

// Use Async/Await to fulfill promise & error handling
// async function init() {
    
//     // declare 'stream' variable
//     let stream = null;

//     try {
//         // grant permsions to access user's webcam
//         stream = await navigator
//             .mediaDevices
//             .getUserMedia({
//                 audio: false,
//                 video: {width: 640, height: 480},
//             }); 
//             // test output
//             console.log(stream);
//             // display stream on the web page
//             videoElement.srcObject = stream;
//     }
//     catch(err) {
//         //handle error output
//         console.log(err);
//     }
// };

// Run Async function call
//init();


// Use Raw Promise
// navigator
//     .mediaDevices
//     .getUserMedia({
//         audio: false,
//         video: {
//             width: 640,
//             height: 480,
//         },
//     })
//     .then(stream => {
//         console.log(stream);
//         //videoElement.srcObject = stream;
//     })
//     .catch(err => {
//         console.log(`error: ${err}`);
//     });


// if scan is successful log results to console
function decoded(result) {
    console.log(`decoded barcode: ${result}`)
    console.log('decode barcode is: ', result);
}




// Failed Implementations
// Needs JQuery ? 
// https://cdnjs.cloudflare.com/ajax/libs/quagga/0.12.1/quagga.min.js
// https://cdnjs.cloudflare.com/ajax/libs/quagga/0.12.1/quagga.js


// Needs Vue ?
// https://cdn.jsdelivr.net/npm/vue-quaggajs@1.0.12/dist/vue-quagga.min.js

// JS only ?
// https://cdn.jsdelivr.net/npm/quagga@0.12.1/dist/quagga.min.js

// import upcscanner from 'https://cdn.jsdelivr.net/npm/quagga@0.12.1/dist/quagga.min.js';
