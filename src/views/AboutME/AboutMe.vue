<template>
  <section class="about-info-container">
    <div class="left">
      <div class="profile-picture">
        <div class="profile-picture-background"></div>
      </div>
    </div>
    <div>
      <div class="right">
        <div class="header">
          <h2 class="title">About Me</h2>
        </div>
        <div class="subheader">
          <h4>I am a passionate aspiring web designer and developer</h4>
        </div>
        <p>
          I would describe my personality as a mixture between introverted with
          an adventurous side. I like being indoors, in front of a computer
          playing games, or watching anime but I am also always willing to try
          new things. I consider myself to be very honest and kind.
        </p>
        <p>
          My passion for the tech industry began in primary school when we did
          our first MS Office class, it sparked my interest in computers. I
          chose (CAT) Computer Application Technology as a subject in high
          school but it was watching shows like Mr Robot that made me want to
          dive deeper and learn more about what computers had to offer. My aim
          is to improve my skills.
        </p>

        <div class="personal-info">
          <div class="left-info">
            <div class="col-sm-6">
              <ul class="personal-info-ul">
                <li class="list-point">Name: <span>Tashwill Andries</span></li>
                <li class="list-point age-point">Age: <span>22</span></li>
                <li class="list-point">
                  Address: <span>Rocklands, Cape Town</span>
                </li>
                <li class="list-point">Licence: <span>Drivers</span></li>
              </ul>
            </div>
          </div>
          <div class="right-info">
            <div class="col-sm-6">
              <ul class="personal-info-ul">
                <li class="list-point">Phone: <span>+27 72 191 8667</span></li>
                <li class="list-point">
                  Whatsapp: <span>+27 84 869 1781</span>
                </li>
                <li class="list-point">
                  Languages: <span>English / Afrikaans</span>
                </li>
                <li class="list-point">Vaccinated: <span>Yes</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="skills-container">
    <div class="container">
      <div class="header">
        <h2 class="title">My Skills</h2>
      </div>
      <div class="charts">
        <div class="chart left-chart">
          <div class="subtitle">
            <h4>Professional Skills</h4>
          </div>
          <ul class="level">
            <li><span>Advanced</span></li>
            <li><span>intermediate</span></li>
            <li><span>Beginner</span></li>
            <li><span>Noob</span></li>
          </ul>
          <ul class="bars">
            <li>
              <div class="bar" data-percentage="51"></div>
              <span>HTML/CSS</span>
            </li>
            <li>
              <div class="bar" data-percentage="38"></div>
              <span>JavaScript</span>
            </li>
            <li>
              <div class="bar" data-percentage="36"></div>
              <span>VueJs</span>
            </li>
            <li>
              <div class="bar" data-percentage="49"></div>
              <span>python</span>
            </li>
          </ul>
        </div>
        <div class="chart">
          <div class="subtitle">
            <h4>Personal Skills</h4>
          </div>
          <ul class="level">
            <li><span>Advanced</span></li>
            <li><span>intermediate</span></li>
            <li><span>Beginner</span></li>
            <li><span>Noob</span></li>
          </ul>
          <ul class="bars">
            <li>
              <div class="bar" data-percentage="68"></div>
              <span>Communication</span>
            </li>
            <li>
              <div class="bar" data-percentage="64"></div>
              <span>Teamwork</span>
            </li>
            <li>
              <div class="bar" data-percentage="70"></div>
              <span>Self-motivation</span>
            </li>
            <li>
              <div class="bar" data-percentage="64"></div>
              <span>Good Listener</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    $(function () {
      $(".bars li .bar").each(function (key, bar) {
        let percentage = $(this).data("percentage");
        $(this).animate(
          {
            height: percentage + "%",
          },
          1000
        );
      });
    });
  },
};
</script>

<style scoped>
.header {
  display: flex;
}

.container {
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
}

.header h2 {
  font-size: 25px;
  box-shadow: -39px -8px 0px -1px rgba(255, 88, 35, 0.7) inset;
}

.subheader {
  display: flex;
  padding: 15px 0px;
}

.subheader h4 {
  border-bottom: 3px solid rgba(255, 88, 35, 0.7);
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
  height: 380px;
  width: 380px;
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
.right p {
  color: #9b9a9c;
  line-height: 1.8;
  font-weight: 400;
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

.personal-info-ul {
  list-style: none;
}

.personal-info-ul li::before {
  content: "\2022";
  color: #ff5823;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  font-size: 20px;
  margin-left: -3em;
}
.list-point {
  margin-left: 10px;
}
.age-point {
  margin-right: 64px;
}

@media screen and (max-width: 1110px) {
  .left-info {
    white-space: nowrap;
  }

  .right-info {
    white-space: nowrap;
  }
}

@media screen and (max-width: 910px) {
  .profile-picture {
    height: 320px;
    width: 320px;
  }
  .profile-picture-background {
    height: 320px;
    width: 320px;
  }
  .about-info-container {
    display: block;
    justify-content: center;
    flex-direction: column;
  }

  .left {
    display: flex;
    justify-content: center;
    margin: unset;
  }
  .right {
    padding: 23px;
    padding-top: 50px;
  }
  .subheader {
    justify-content: center;
  }
  .header h2 {
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
  }

  .skills-container {
    padding-bottom: 120px;
    padding-right: 0px;
    padding-left: 0px;
    margin-right: auto;
    margin-left: auto;
  }
}

@media screen and (max-width: 384px) {
  .profile-picture {
    height: 275px;
    width: 275px;
    margin-top: 25px;
    box-shadow: unset;
  }
  .subheader h4 {
    position: relative;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 1px;
    line-height: 1.62;
    margin-bottom: 30px;
    padding-bottom: 15px;
  }

  .right p {
    font-size: 12px;
  }
  .personal-info {
    display: flex;
    flex-direction: column;

    justify-content: center;
  }
  .personal-info-ul .list-point {
    font-size: 12px;
  }
  .list-point {
    padding: 0px 60px;
    margin: 0px 55px;
  }
  .age-point {
    margin-left: 9px;
  }
  .personal-info-ul {
    padding-left: 0rem;
  }
}
.skills-container {
  padding-top: 120px;
}

.subtitle {
  display: flex;
  padding: 15px 0px;
  width: 100%;
  justify-content: center;
  text-align: center;
}

.subtitle h4 {
  display: flex;
  border-bottom: 3px solid rgba(255, 88, 35, 0.7);
  padding-bottom: 4px;
  justify-content: center;
  text-align: center;
}
.charts {
  display: flex;
  justify-content: space-between;
}

.chart {
  width: 600px;
  height: 400px;
  display: block;
}

.level {
  color: #9b9a9c;
  margin: 0px 0px -263px -3px;
  padding: 0;
  width: 50px;
  display: inline-block;
  float: left;
}
.level li {
  list-style: none;
  height: 95px;
  position: relative;
}

.level span {
  font-size: 12px;
  font-weight: 600;
  position: absolute;
  right: 1px;
}
.left-chart {
  margin-right: 35px;
}

.bars {
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  background: rgba(54, 53, 59, 0.7);
  margin: 0;
  padding: 0;
  display: inline-block;
  width: 500px;
  padding-right: 25px;
  height: 300px;
  box-shadow: 0 0 10px 0 #555;
  border-radius: 5px;
}
.bars li {
  display: table-cell;
  width: 100px;
  height: 300px;
  position: relative;
}

.bars span {
  width: 100%;
  position: absolute;
  bottom: -30px;
  text-align: center;
}
.bars .bar {
  display: block;
  background: #ff5823;
  width: 50px;
  position: absolute;
  bottom: 0;
  margin-left: 75px;
  text-align: center;
  box-shadow: 0 0 10px 0 rgba(23, 192, 235, 0.5);
  transition: 0.5s;
  transition-property: background, box-shadow;
}

.bars .bar:hover {
  background: #f0653b;
  box-shadow: 0 0 10px 0 rgba(85, 239, 196, 0.5);
  cursor: pointer;
}

@media screen and (max-width: 1110px) {
  .bars {
    width: 410px;
  }
  .bars .bar {
    margin: 0;
    padding: 0;
    margin-left: 41px;
  }
  .bars span {
    position: absolute;
    right: -17px;
    bottom: -37px;
  }
}
@media screen and (max-width: 910px) {
  .charts {
    display: flex;
    flex-direction: column;
  }
  .left-chart {
    margin-bottom: 25px;
  }

  .level span {
    position: absolute;
    right: -66px;
  }
}

@media screen and (max-width: 384px) {
  /* .skills-container {
    width: 50%;
  } */
  .bars li {
    margin: 0px 0px 0px 0px;
  }
  .chart {
    margin: 0;
    width: 150px;
    padding: 0;
    margin-right: 25px;
  }
  .bars {
    height: 225px;
    width: 255px;
  }
  .level span {
    position: absolute;
    font-size: 10px;
    right: 50px;
    top: 16px;
  }
  .level li {
    height: 66px;
    padding: 0;
    margin: 0;
  }
  .bars .bar {
    width: 14px;
    position: absolute;
    bottom: 75px;
  }
  .bars span {
    position: absolute;
    bottom: 50px;
    font-size: 10px;
    word-wrap: break-word;
  }
}
</style>
