<template>
  <div class="track-container">
    <span class="range-value min">{{ minValue }} </span>
    <span class="range-value max">{{ maxValue }}</span>
    <div class="track" ref="_vpcTrack"></div>
    <div class="track-highlight" ref="trackHighlight"></div>
    <button class="track-btn trackAccent1" ref="trackAccent1"></button>
    <button class="track-btn trackAccent2" ref="trackAccent2"></button>
  </div>
</template>

<script>
export default {
  name: "RangeAccent",

  props: {
    trackHeight: {
      type: Number,
      deafult: 1,
    },
  },

  data() {
    return {
      min: 0,
      max: 1,
      minValue: 0,
      maxValue: 1,
      step: 0.01,
      totalSteps: 0,
      percentPerStep: 1,
      trackWidth: null,
      isDragging: false,
      pos: {
        curTrack: null,
      },
    }
  },

  methods: {
    moveTrack(track, ev) {
      let percentInPx = this.getPercentInPx()

      let trackX = Math.round(this.$refs._vpcTrack.getBoundingClientRect().left)
      let clientX = ev.clientX
      let moveDiff = clientX - trackX

      let moveInPct = moveDiff / percentInPx
      // console.log(moveInPct)

      if (moveInPct < 1 || moveInPct > 100) return
      let value = Number(
        (
          Math.round(moveInPct / this.percentPerStep) * this.step +
          this.min
        ).toFixed(1)
      )
      if (track === "trackAccent1") {
        if (value >= this.maxValue - this.step) return
        this.minValue = value
      }

      if (track === "trackAccent2") {
        if (value <= this.minValue + this.step) return
        this.maxValue = value
      }

      this.$refs[track].style.left = moveInPct + "%"
      this.setTrackHightlight()
    },
    mousedown(ev, track) {
      if (this.isDragging) return
      this.isDragging = true
      this.pos.curTrack = track
    },

    touchstart(ev, track) {
      this.mousedown(ev, track)
    },

    mouseup(ev, track) {
      if (!this.isDragging) return
      this.isDragging = false
    },

    touchend(ev, track) {
      this.mouseup(ev, track)
    },

    mousemove(ev, track) {
      if (!this.isDragging) return
      this.moveTrack(track, ev)
    },

    touchmove(ev, track) {
      this.mousemove(ev.changedTouches[0], track)
    },

    valueToPercent(value) {
      return ((value - this.min) / this.step) * this.percentPerStep
    },

    setTrackHightlight() {
      this.$refs.trackHighlight.style.left =
        this.valueToPercent(this.minValue) + "%"
      this.$refs.trackHighlight.style.width =
        this.valueToPercent(this.maxValue) -
        this.valueToPercent(this.minValue) +
        "%"
    },

    getPercentInPx() {
      let trackWidth = this.$refs._vpcTrack.offsetWidth
      let oneStepInPx = trackWidth / this.totalSteps
      // 1 percent in px
      let percentInPx = oneStepInPx / this.percentPerStep

      return percentInPx
    },

    setClickMove(ev) {
      let track1Left = this.$refs.trackAccent1.getBoundingClientRect().left
      let track2Left = this.$refs.trackAccent2.getBoundingClientRect().left
      // console.log('track1Left', track1Left)
      if (ev.clientX < track1Left) {
        this.moveTrack("trackAccent1", ev)
      } else if (ev.clientX - track1Left < track2Left - ev.clientX) {
        this.moveTrack("trackAccent1", ev)
      } else {
        this.moveTrack("trackAccent2", ev)
      }
    },
  },

  mounted() {
    // calc per step value
    this.totalSteps = (this.max - this.min) / this.step

    // percent the track button to be moved on each step
    this.percentPerStep = 100 / this.totalSteps
    // console.log('percentPerStep', this.percentPerStep)

    // set track1 initilal
    document.querySelector(".trackAccent1").style.left =
      this.valueToPercent(this.minValue) + "%"
    // track2 initial position
    document.querySelector(".trackAccent2").style.left =
      this.valueToPercent(this.maxValue) + "%"
    // set initila track highlight
    this.setTrackHightlight()

    var self = this

    ;["mouseup", "mousemove"].forEach((type) => {
      document.body.addEventListener(type, (ev) => {
        // ev.preventDefault();
        if (self.isDragging && self.pos.curTrack) {
          self[type](ev, self.pos.curTrack)
        }
      })
    })
    ;[
      "mousedown",
      "mouseup",
      "mousemove",
      "touchstart",
      "touchmove",
      "touchend",
    ].forEach((type) => {
      document.querySelector(".trackAccent1").addEventListener(type, (ev) => {
        ev.stopPropagation()
        self[type](ev, "trackAccent1")
      })

      document.querySelector(".trackAccent2").addEventListener(type, (ev) => {
        ev.stopPropagation()
        self[type](ev, "trackAccent2")
      })
    })

    // on track clik
    // determine direction based on click proximity
    // determine percent to move based on track.clientX - click.clientX
    document.querySelector(".track").addEventListener("click", function (ev) {
      ev.stopPropagation()
      self.setClickMove(ev)
    })

    document
      .querySelector(".track-highlight")
      .addEventListener("click", function (ev) {
        ev.stopPropagation()
        self.setClickMove(ev)
      })
  },
}
</script>

<style>
.range-value {
  position: absolute;
  top: -2rem;
}
.range-value.min {
  left: 0;
}

.range-value.max {
  right: 0;
}
.track-container {
  width: 30%;
  position: relative;
  cursor: pointer;
  height: 0.5rem;
}

.track,
.track-highlight {
  display: block;
  position: absolute;
  width: 100%;
  height: 0.5rem;
}

.track {
  background-color: #ddd;
}

.track-highlight {
  background-color: green;
  z-index: 2;
}

.track-btn {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  outline: none;
  cursor: pointer;
  display: block;
  position: absolute;
  z-index: 2;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 100%;
  top: calc(-50% - 0.25rem);
  margin-left: -1rem;
  border: none;
  background-color: green;
  -ms-touch-action: pan-x;
  touch-action: pan-x;
  transition: box-shadow 0.3s ease-out, background-color 0.3s ease,
    -webkit-transform 0.3s ease-out;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease;
  transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
    background-color 0.3s ease, -webkit-transform 0.3s ease-out;
}
</style>
