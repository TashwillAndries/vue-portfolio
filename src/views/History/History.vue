<template>
  <div class="container">
    <div class="timeline">
      <ul>
        <li>
          <div class="timeline-content">
            <span class="date">2013 - 2017</span>
            <h1>Rocklands High School (Education)</h1>
            <p>
              Matriculated in 2017, my subjects were mathamatics, accouting,
              computer application technology, english, afrikaans, geography and
              life orientation.
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <span class="date">2017 - 2018</span>
            <h1>Pearson Institue (higher learning)</h1>
            <p>
              I studied higher Certificate technology where i took part in
              course like Visual Studio basic and programming, but was unable to
              complete due to financial constraint.
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <span class="date">2021 - 2022</span>
            <h1>Life Choices Coding Academy</h1>
            <p>
              A 12 month programme in coding. After the six month course,
              students who passed get employed in a six month internship
            </p>
          </div>
        </li>
        <li>
          <div class="timeline-content">
            <span class="date">2022 - present</span>
            <h1>Lc Studios</h1>
            <p>
              A not for profit organisation that mentors and helps the youth
              gain real experience in programming. My responsibilities were to
              complete tickets whether its frontend or backend development.
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  padding-bottom: 50px;
  padding-top: 25px;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
}

.header h2 {
  font-size: 25px;
  box-shadow: -39px -8px 0px -1px rgba(255, 88, 35, 0.7) inset;
}

.container {
  min-height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 70px 0;
  justify-content: center;
}

.timeline {
  width: 80%;
  height: 50%;
  max-width: 800px;
  margin: 0 auto;
  position: relative;
}

.timeline ul {
  list-style: none;
}

.timeline ul li {
  padding: 20px;
  background-color: rgba(54, 53, 59, 0.7);
  border-radius: 10px;
  margin-bottom: 50px;
}

.timeline ul li:last-child {
  margin-bottom: 0;
}

.timeline-content h1 {
  font-size: 20px;
  font-weight: 500;
  line-height: 30px;
  margin-bottom: 10px;
}

.timeline-content p {
  font-size: 16px;
  line-height: 30px;
  font-weight: 300;
}

.timeline-content .date {
  display: block;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  background: #f5865d;
}

@media only screen and (min-width: 768px) {
  .timeline::before {
    content: "";
    position: absolute;
    height: 69%;
    width: 2px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #36353b;
  }
  .timeline ul li {
    width: 50%;
    margin-bottom: -69px;
    position: relative;
  }
  .timeline ul li:nth-child(odd) {
    float: left;
    clear: right;
    transform: translateX(-30px);
    border-radius: 20px 0px 20px 20px;
  }
  .timeline ul li:nth-child(even) {
    float: right;
    clear: left;
    transform: translateX(30px);
    border-radius: 0px 20px 20px 20px;
    margin-bottom: 50px;
  }
  .timeline ul li::after {
    content: "";
    position: absolute;
    height: 20px;
    width: 20px;
    background-color: #ff5823;
    border-radius: 50%;
    top: 0;
  }

  .timeline ul li:nth-child(odd)::after {
    transform: translate(50%, -50%);
    right: -30px;
  }
  .timeline ul li:nth-child(even)::after {
    transform: translate(-50%, -50%);
    left: -30px;
  }
  .timeline ul li:hover::after {
    background-color: #f5865d;
  }

  .timeline-content .date {
    position: absolute;
    top: -30px;
    width: 100%;
    left: 0px;
  }
}
</style>
