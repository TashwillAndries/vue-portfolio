<template>
  <div class="profile-container">
    <div class="profile-parent">
      <div class="profile-details">
        <div class="colz">
          <div class="colz-icon">
            <a href="https://github.com/TashwillAndries"
              ><i class="fab fa-github"></i
            ></a>
            <a href="https://www.linkedin.com/in/tashwill-andries-0293a2203"
              ><i class="fab fa-linkedin-in"></i
            ></a>
            <a href="https://codepen.io/tashwillandries"
              ><i class="fab fa-codepen"></i
            ></a>
          </div>
        </div>
        <div class="profile-details-name">
          <span class="primary-text"
            >Hello, I'm
            <span class="highlighted-text">Tashwill Andries</span></span
          >
        </div>
        <div class="profile-details-role">
          <span class="primary-text">
            <h1>
              Aspiring <span class="typed-text">{{ typeValue }}</span>
              <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
            </h1>
            <span class="profile-role-tagline"
              >Building applications utilizing both front and back end
              operations.</span
            >
          </span>
        </div>
        <div class="profile-options">
          <button class="btn primary-btn">Contact Me</button>
          <a download href="CURRICULUM-VITAE.pdf">
            <button class="btn highlighted-btn">Get CV</button></a
          >
        </div>
      </div>
      <div class="profile-picture">
        <div class="profile-picture-background"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeValue: "",
      typeStatus: false,
      typeArray: [
        "Software Developer",
        "FullStack Developer",
        "Game Developer",
      ],
      typingSpeed: 200,
      erasingSpeed: 100,
      newTextDelay: 2000,
      typeArrayIndex: 0,
      charIndex: 0,
    };
  },
  methods: {
    typeText() {
      if (this.charIndex < this.typeArray[this.typeArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true;
        this.typeValue += this.typeArray[this.typeArrayIndex].charAt(
          this.charIndex
        );
        this.charIndex += 1;

        setTimeout(this.typeText, this.typingSpeed);
      } else {
        this.typeStatus = false;
        setTimeout(this.eraseText, this.newTextDelay);
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true;

        this.typeValue = this.typeArray[this.typeArrayIndex].substring(
          0,
          this.charIndex - 1
        );
        this.charIndex -= 1;
        setTimeout(this.eraseText, this.erasingSpeed);
      } else {
        this.typeStatus = false;
        this.typeArrayIndex += 1;

        if (this.typeArrayIndex >= this.typeArray.length)
          this.typeArrayIndex = 0;

        setTimeout(this.typeText, this.typingSpeed + 1000);
      }
    },
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200);
  },
};
</script>

<style scoped>
.profile-container {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  height: 10%;
  min-height: fit-content;
}

.profile-parent {
  display: flex;
  align-items: center;
  color: aliceblue;
}

.profile-details-name {
  font-size: 24px;
  font-family: "Poppins SemiBold";
}

.profile-details-role {
  display: flex;
  flex-direction: column;
  margin: 14px 0 24px 0;
}

.profile-details-role h1 {
  font-size: 40px;
}

.primary-text {
  color: #fff;
}

.highlighted-text {
  color: #ca6702;
}

.profile-role-tagline {
  font-size: 19px;
  margin: 5px 0 0 0;
  font-family: "Poppins Light";
}

.profile-picture {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px #fff;
  border-radius: 50%;
  height: 380px;
  width: 380px;
  margin: 0 0px 0 100px;
}

.profile-picture-background {
  height: 92%;
  width: 92%;
  background-image: url("../../assets/Home/picture.png");
  background-size: cover;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
}

.profile-picture-background:hover {
  transform: scale(1.07);
  transition: 1s ease-out;
}

.colz .colz-icon i {
  color: white;
  padding: 8px;
  padding-left: 0px;
}

.colz .colz-icon i:hover {
  transform: scale(1.5);
}

.profile-options .highlighted-btn {
  margin: 0 0 0 28px;
}

.profile-options .highlighted-btn:hover {
  margin: 0 0 0 28px;
  background-color: cornsilk;
  color: #111;
}

span.cursor {
  display: inline-block;
  margin-left: 3px;
  width: 4px;
  background-color: black;
  animation: cursorBlink 1s infinite;
}

span.cursor.typing {
  animation: none;
}
@keyframes cursorBlink {
  49% {
    background-color: black;
  }
  50% {
    background-color: transparent;
  }
  99% {
    background-color: transparent;
  }
}

@media screen and (max-width: 1110px) {
  .profile-picture {
    margin: 0 0px 0 80px;
  }
  .profile-details-name {
    font-size: 20px;
  }

  .profile-details-role .primary-text {
    font-size: 12px;
  }

  .profile-options .btn {
    width: 120px;
    padding: 11px 0;
    z-index: 700;
  }
}

@media screen and (max-width: 910px) {
  .profile-picture {
    height: 320px;
    width: 320px;
    margin: 0 0 0 4px;
  }
}
@media screen and (max-width: 810px) {
  .profile-picture {
    margin: 0 !important;
  }
  .profile-parent {
    flex-direction: column-reverse;
    margin: 40px 0 0 0;
  }
  .profile-options {
    display: flex;
    justify-content: space-between;
  }
  .profile-details {
    margin: 25px 0 0;
  }
  .profile-options .highlighted-btn {
    margin: 0 !important;
  }
  .profile-options,
  .profile-details-role {
    text-align: center;
  }
}
@media screen and (max-width: 384px) {
  .profile-picture {
    height: 275px;
    width: 275px;
    margin-top: -90px;
  }
  .profile-details {
    width: 90%;
  }
}
</style>
