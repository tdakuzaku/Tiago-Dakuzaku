var n = 1;
search: while (true) {
  n += 1;
  for (var i = 2; i <= Math.sqrt(n); i += 1)
    if (n % i == 0)
     continue search;
  // found a prime!
  postMessage(n);
}

// // settings
// var num_workers = 10;
// var items_per_worker = 1000000;

// // start the workers
// var result = 0;
// var pending_workers = num_workers;
// for (var i = 0; i < num_workers; i += 1) {
//   var worker = new Worker('core.js');
//   worker.postMessage(i * items_per_worker);
//   worker.postMessage((i+1) * items_per_worker);
//   worker.onmessage = storeResult;
// }

// // handle the results
// function storeResult(event) {
//   result += 1*event.data;
//   pending_workers -= 1;
//   if (pending_workers <= 0)
//     postMessage(result); // finished!
// }
