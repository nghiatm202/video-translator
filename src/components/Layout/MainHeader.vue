<style lang="scss">
.header__component {
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  width: 100%;
  z-index: 3;

  .wrapper__container__top {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 1rem 30px;

    .layout__in__end {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      align-items: center;

      column-gap: 10px;

      .wrapper__hambuger {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        position: relative;
        width: 40px;
        height: 30px;
        padding: 1rem;

        cursor: pointer;
        pointer-events: all;

        background: transparent;
        border: none;
        overflow: hidden;

        .line {
          display: block;
          width: 22px;
          height: 2px;
          pointer-events: none;

          background-color: #161616;

          position: absolute;
          left: 50%;
          border-radius: 5px;

          &:nth-child(1) {
            top: 30%;
            translate: -50% -50%;
          }
          &:nth-child(2) {
            top: 50%;
            opacity: 1;
            translate: -50% -50%;
          }
          &:nth-child(3) {
            top: 70%;
            translate: -50% -50%;
          }
        }

        &.active {
          .line {
            &:nth-child(1) {
              top: 50%;
              rotate: 40deg;
              translate: -50% -50%;
            }
            &:nth-child(2) {
              top: 50%;
              opacity: 0;
              translate: -50% -50%;
            }
            &:nth-child(3) {
              top: 50%;
              rotate: -40deg;
              translate: -50% -50%;
            }
          }
        }
      }
    }
  }

  .list__group {
    display: block;
    max-height: 0;

    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;

    &.active {
      max-height: 1000px;
    }

    .nav__link {
      display: block;
      padding: 1rem 30px;
      border-right: 1px solid #f4f4f4;
      text-decoration: none;

      color: #6eac3a;
      text-decoration: none;
    }
  }

  // Header Global
  .button__custom__style {
    display: block;

    padding: 0.5rem 0.75rem;

    font-size: 14px;
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;

    color: white;
    background-size: 200% auto;

    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;

    border: 0px;
    border-radius: 10px;
    box-shadow: 0px 0px 14px -7px #f09819;
    background-image: linear-gradient(
      45deg,
      #088f8f 0%,
      #097969 51%,
      #aaff00 100%
    );

    transition: 0.5s;

    &:hover {
      background-position: right center;
      /* change the direction of the change here */
      color: #fff;
      text-decoration: none;
    }

    &:active {
      transform: scale(0.95);
    }
  }
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

  text-decoration: none;
  color: #161616;
}

/* menu */

.header .menu {
  clear: both;
  max-height: 0;
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
import { ref } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()
const props = defineProps({ userName: String })

const OpenHambuger = ref(false)

const GoRegister = () => {
  return router.push("/register")
}

const OpenNestedGroup = () => {
  if (OpenHambuger.value === false) return (OpenHambuger.value = true)
  else OpenHambuger.value = false
}
</script>

<template>
  <header class="header__component">
    <div class="wrapper__container__top">
      <a href="#" class="logo">LOGO</a>

      <div class="layout__in__end">
        <button class="btn button__custom__style" v-if="userName" role="button">
          {{ userName }}
        </button>
        <button
          class="btn button__custom__style"
          v-else
          @click.native="GoRegister()"
        >
          Sign up
        </button>

        <button
          v-if="userName"
          class="wrapper__hambuger"
          @click="OpenNestedGroup()"
          :class="OpenHambuger === true ? 'active' : ''"
        >
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </button>
      </div>
    </div>

    <ul
      v-if="userName"
      class="list__group menu__component"
      :class="OpenHambuger === true ? 'active' : ''"
    >
      <li><a href="#" class="nav__link">User</a></li>
      <li><a href="#" class="nav__link">Cài đặt</a></li>
      <li @click="$emit('ClickEventHandler')">
        <a class="logout nav__link">Đăng xuất</a>
      </li>
    </ul>
  </header>
</template>
