<template>
  <div class="about-info-container">
    <div class="left">
      <div class="profile-picture">
        <div class="profile-picture-background"></div>
      </div>
    </div>
    <div class="right">
      <div class="header">
        <h2 class="title">About Me</h2>
      </div>
      <div class="subheader">
        <h4>I am a passionate aspiring web designer and developer</h4>
      </div>
      <p>
        I would describe my personality as a mixture between introverted with an
        adventurous side. I like being indoors, in front of a computer playing
        games, or watching anime but I am also always willing to try new things.
        I consider myself to be very honest and kind.
      </p>
      <p>
        My passion for the tech industry began in primary school when we did our
        first MS Office class, it sparked my interest in computers. I chose
        (CAT) Computer Application Technology as a subject in high school but it
        was watching shows like Mr Robot that made me want to dive deeper and
        learn more about what computers had to offer. My aim is to improve my
        skills.
      </p>

      <div class="personal-info">
        <div class="left-info">
          <div class="col-sm-6">
            <ul>
              <li>Name: <span>Tashwill Andries</span></li>
              <li class="age-point">Age: <span>22</span></li>
              <li>Address: <span>Rocklands, Cape Town</span></li>
              <li>Licence: <span>Drivers</span></li>
            </ul>
          </div>
        </div>
        <div class="right-info">
          <div class="col-sm-6">
            <ul>
              <li>Phone: <span>+27 72 191 8667</span></li>
              <li>Whatsapp: <span>+27 84 869 1781</span></li>
              <li>Languages: <span>English / Afrikaans</span></li>
              <li>Vaccinated: <span>Yes</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="skills-container">
    <div class="header">
      <h2 class="title">My Skills</h2>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  display: flex;
}

.header h2 {
  font-size: 25px;
  box-shadow: -39px -8px 0px -1px rgba(54, 53, 59, 0.7) inset;
}

.subheader {
  display: flex;
  padding: 15px 0px;
}

.subheader h4 {
  border-bottom: 3px solid rgba(54, 53, 59, 0.7);
  padding-bottom: 4px;
  word-wrap: break-word;
}

.profile-picture {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 6px 11px 0px 1px rgba(255, 88, 35, 0.7);
  height: 380px;
  width: 380px;
  margin: 0 58px;
  padding: 0;
}

.profile-picture-background {
  height: 92%;
  width: 92%;
  background-image: url("../../assets/Home/picture.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.about-info-container {
  display: flex;
  margin: 25px;
}

.right {
  font-size: 15px;
}

.personal-info {
  display: flex;
  justify-content: space-around;
  background-color: rgba(54, 53, 59, 0.7);
}

.left-info {
  white-space: nowrap;
}

.right-info {
  white-space: nowrap;
}

ul {
  list-style: none;
}

ul li::before {
  content: "\2022";
  color: #ff5823;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  font-size: 20px;
  margin-left: -3em;
}
li {
  margin-left: 10px;
}
.age-point {
  margin-right: 64px;
}

@media screen and (max-width: 1110px) {
  .left {
    width: 50%;
  }
  .left-info {
    white-space: nowrap;
  }

  .right-info {
    white-space: nowrap;
  }
}
.skills-container {
  padding: 0px 86px;
}
</style>
