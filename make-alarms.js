document.querySelector('button').onclick = function() {
  var time = +new Date;
  var n = 100;
  
  localStorage.setItem('counter', 0);

  var q = Array.apply(null, {length: n}).map(function() {
    return function(next) {
      time += 1000;

      var request = navigator.mozAlarms.add(new Date(time), 'ignoreTimezone', {
        type: 'yolo'
      });

      request.onsuccess = next;
      request.onerror = function() {
        console.error('setting alarm failed');
        next();
      };

      console.log('created alarm', new Date(time));
    };
  });

  function queue(q, n) {
    q.length ? q.shift()(queue.bind(this, q, n)) : n();
  }

  queue(q, function() {
    alert('Done setting ' + n + ' alarms');
  });
};