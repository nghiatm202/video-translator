<style>
a {
  color: green;
  text-decoration: none;
}

.header {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 3;
}

/* CSS */
.button-87 {
  margin: 10px;
  padding: 15px 30px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  border-radius: 10px;
  display: block;
  border: 0px;
  font-weight: 700;
  box-shadow: 0px 0px 14px -7px #f09819;
  background-image: linear-gradient(
    45deg,
    #088f8f 0%,
    #097969 51%,
    #aaff00 100%
  );
  cursor: pointer;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.button-87:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}

.button-87:active {
  transform: scale(0.95);
}

.btn-wrapper {
  display: flex;
  align-items: center;
  flex-direction: row-reverse;
}

.header ul {
  margin: 0;
  padding: 0;
  list-style: none;
  overflow: hidden;
  background-color: #fff;
}

.header li a {
  display: block;
  padding: 20px 20px;
  border-right: 1px solid #f4f4f4;
  text-decoration: none;
}

.header li a:hover,
.header .menu-btn:hover {
  background-color: #f4f4f4;
}

.header .logo {
  display: block;
  float: left;
  font-size: 2em;
  padding: 0 20px;
  text-decoration: none;
  line-height: 66px;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
  transition: max-height 0.2s ease-out;
}

/* menu icon */

.header .menu-icon {
  cursor: pointer;
  display: block;
  float: right;
  padding: 28px 20px;
  position: relative;
  user-select: none;
}

.header .menu-icon .navicon {
  background: #333;
  display: block;
  height: 3px;
  position: relative;
  transition: background 0.2s ease-out;
  width: 18px;
}

.header .menu-icon .navicon:before,
.header .menu-icon .navicon:after {
  background: #333;
  content: "";
  display: block;
  height: 100%;
  position: absolute;
  transition: all 0.2s ease-out;
  width: 100%;
}

.header .menu-icon .navicon:before {
  top: 5px;
}

.header .menu-icon .navicon:after {
  top: -5px;
}

/* menu btn */

.header .menu-btn {
  display: none;
}

.header .menu-btn:checked ~ .menu {
  max-height: 240px;
}

.header .menu-btn:checked ~ .menu-icon .navicon {
  background: transparent;
}

.header .menu-btn:checked ~ .menu-icon .navicon:before {
  transform: rotate(-45deg);
}

.header .menu-btn:checked ~ .menu-icon .navicon:after {
  transform: rotate(45deg);
}

.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
.header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
  top: 0;
}

.logout {
  display: block;
  cursor: pointer;
  pointer-events: all;
  text-decoration: none;
  color: #e03737;
  font-weight: 600;
}
</style>

<script>
export default {
  name: "MainHeader",
}
</script>

<script setup>
const props = defineProps({ userName: String })
</script>

<template>
  <header class="header">
    <a href="" class="logo">something</a>
    <input class="menu-btn" type="checkbox" id="menu-btn" />
    <div class="btn-wrapper">
      <label class="menu-icon" for="menu-btn"
        ><span class="navicon"></span
      ></label>

      <router-link :to="{ name: 'register' }"
        ><button class="button-87" v-if="userName" role="button">
          {{ userName }}
        </button>
        <button class="button-87" v-if="!userName" role="button">
          Sign In
        </button>
      </router-link>
    </div>
    <ul v-if="userName" class="menu">
      <li><a href="#">User</a></li>
      <li><a href="#">Cài đặt</a></li>
      <li @click="$emit('ClickEventHandler')">
        <a class="logout">Đăng xuất</a>
      </li>
    </ul>
  </header>
</template>
