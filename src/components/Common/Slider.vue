<style>
.slide-container {
  width: 100%;
  margin: 16px 0;
}

.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 25px;
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}

.slide-text-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #151515;
  font-size: 16px;
}
</style>

<template>
  <div class="slide-container">
    <input type="range" min="1" max="100" value="50" class="slider" />
    <div class="slide-text-container">
      <span>00:00</span>
      <span>00:10</span>
      <span>00:20</span>
      <span>00:30</span>
      <span>00:40</span>
      <span>00:50</span>
      <span>01:00</span>
    </div>
  </div>
</template>
