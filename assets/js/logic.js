let scanner = new Instascan.Scanner({ video: document.getElementById('preview') })
scanner.addListener('scan', function (content) {
  // console.log('found',content);
  document.getElementById('fill').value = content
})
Instascan.Camera.getCameras()
.then(function (cameras) {
  document.getElementById('fill').value = (cameras.length + ' camera(s)')
  if (cameras.length > 0) {
    console.log('cameras', cameras)
    // need to toggle camera view between [0] to [1]
    // let camSwitch = increment
    let index = 0
    document.getElementById('button1').addEventListener('click',
    function () {
      // var abc = ['x','y']
      if (cameras.length > 1) {
        scanner.stop()
        let increment = 1
        if (index < cameras.length - 1) {
          index += increment
          scanner.start(cameras[index])
        } else if (index === cameras.length - 1) {
          index -= increment
          scanner.start(cameras[index])
        }
        // index += increment
        // console.log('index',index)
      } else {
        alert('You only have a single camera')
      }
    })
    scanner.start(cameras[0])
  } else {
    console.error('No cameras found.')
  }
})
.catch(function (e) {
  console.error(e)
})
