<script lang="ts">
  import DeviceDetector from '../DeviceDetector.svelte';
  import Howler from 'howler';
  import AlparuA from '../img/BG2.png';
  import AlparuB from '../img/BG1.png';
  import PopSound from '../pop.mp3';
  import 'twind/shim';

  let pop = 0;
  let popText =  "0";
  let mouseDown = false;
  const sound = new Howler.Howl({
    src: [PopSound],
    html5: true
  });
</script>

<svelte:head>
  <link rel="stylesheet" href="//fonts.googleapis.com/css?family=Permanent+Marker:300,400,600,700&lang=en">
</svelte:head>

<DeviceDetector showInDevice="desktop">
<div class="w-screen h-screen bg-gray-800 overflow-hidden"
  on:mousedown={() => {
     mouseDown = true;
     pop = pop + 1;
     sound.play();
     popText = pop % 100 ? pop : 'POPALPARU!';
  }}
  on:mouseup={() => {
    mouseDown = false;
  }}>

  <div class="w-2/5 h-2/5 m-auto relative py-10">
    <div class="text text-white text-center text-3xl font-medium select-none">{popText}</div>
    <img class="w-full h-full select-none my-10" src={mouseDown ? AlparuB : AlparuA} alt="alparu" />
  </div>
</div>
</DeviceDetector>

<DeviceDetector showInDevice="mobile">
<div class="w-screen h-screen bg-gray-800 overflow-hidden"
  on:touchstart={() => {
    mouseDown = true;
     pop = pop + 1;
     sound.play();
    popText = pop % 100 ? pop : 'POPALPARU!';
  }}
  on:touchend={() => {
    mouseDown = false;
  }}>

  <div class="w-2/5 h-2/5 m-auto relative py-10">
    <div class="text text-white text-center text-lg font-medium select-none">{popText}</div>
    <img class="w-full h-full select-none my-10" src={mouseDown ? AlparuB : AlparuA} alt="alparu" />
  </div>
</div>
</DeviceDetector>

<style>
  .text {
    font-family: Permanent Marker;
  }
</style>
