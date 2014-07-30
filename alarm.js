navigator.mozSetMessageHandler('alarm', function() {
  try {
    var version = Number(localStorage.getItem('counter'));
    localStorage.setItem('counter', version + 1);
  }
  catch (ex) {
    dump('oh noes ' + ex + '\n');
  }

  console.log(new Date(), version, 'got alarm');
  // launchSelf();
});

// function launchSelf() {
//   var request = window.navigator.mozApps.getSelf();
//   request.onsuccess = function() {
//     if (request.result) {
//       request.result.launch();
//     }
//   };
// }