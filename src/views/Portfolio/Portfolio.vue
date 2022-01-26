<template>
  <section id="projects">
    <div class="container">
      <div class="title">
        <h1>Portfolio</h1>
      </div>
      <div class="row">
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../../assets/calculator.png"
              alt="calculator"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Calculator</h5>
              <p class="card-text">
                A calculator made using html, css and javascript
              </p>
              <a href="https://tashwill-calculator.netlify.app" target="_blank"
                >Live</a
              >
              <a
                href="https://github.com/TashwillAndries/Calculator"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../../assets/pokedex.png"
              alt="calculator"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Pokedex</h5>
              <p class="card-text">
                A pokedex using html, css, javascript and data from the pokemon
                api
              </p>
              <a href="https://tashwill-pokedex.netlify.app/" target="_blank"
                >Live</a
              >
              <a
                href="https://github.com/TashwillAndries/Pokedex"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../../assets/insect.png"
              alt="calculator"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Insect Game</h5>
              <p class="card-text">
                An insect catch game using html, css and javascript
              </p>
              <a href="https://catch-game.netlify.app/" target="_blank">Live</a>
              <a
                href="https://github.com/TashwillAndries/insect-game"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../../assets/bootstrap.png"
              alt="calculator"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Responsive Website</h5>
              <p class="card-text">
                A responsive website using html, css and bootstrap
              </p>
              <a
                href="https://responsive-bootstrap.netlify.app/"
                target="_blank"
                >Live</a
              >
              <a
                href="https://github.com/TashwillAndries/bootstrap-site"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="card text-center">
            <img
              src="../../assets/hangman.png"
              alt="calculator"
              class="card-img-top"
            />
            <div class="card-body">
              <h5 class="card-title">Hangman Game</h5>
              <p class="card-text">
                A hangman game created with html, css, javascript and vuejs
                composition api
              </p>
              <a href="https://vuejs-hangman.netlify.app" target="_blank"
                >Live</a
              >
              <a
                href="https://github.com/TashwillAndries/hangman"
                target="_blank"
                >Github</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#projects {
  padding: 30px 0px;
}
.title {
  display: flex;
  justify-content: center;
  padding-bottom: 50px;
  padding-top: 25px;
  padding-right: 0px;
  padding-left: 0px;
  margin-right: auto;
  margin-left: auto;
}
.card-body {
  background-color: rgba(54, 53, 59, 0.7);
  box-shadow: 0 0 20px 7px rgba(255, 86, 35, 0.493);
}

.card {
  margin: 20px 10px;
}

.card-body a {
  display: flex;
  justify-content: space-around;
  color: #1f2235;
  text-decoration: underline;
  font-size: 15px;
  margin-top: auto;
  font-weight: 600;
}

.card-body a:hover {
  color: #1f22353f;
}

.card-title {
  color: #9b9a9c;
}

.card-text {
  color: #9b9a9c;
}

.title h1 {
  font-size: 25px;
  box-shadow: -39px -8px 0px -1px rgba(255, 88, 35, 0.7) inset;
}
</style>
