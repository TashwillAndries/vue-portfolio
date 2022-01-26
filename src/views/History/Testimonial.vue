<template>
  <div class="testimonials">
    <div class="header">
      <h2>Testimonials</h2>
    </div>
    <div class="_do_pdl14_coach">
      <div class="_dp_pdl4_coach_main_all">
        <div class="_do_pdl4_coach_slider_all">
          <div class="_do_pdl4_coach_slider">
            <div
              class="_do_pdl4_coach_main"
              :style="{
                transform: 'translate3d(' + translateValue + '%, 0px, 0px)',
              }"
            >
              <div class="_do_pdl4_lft_main" v-for="(g, i) in images" :key="i">
                <div class="_do_pdl4_coach_left">
                  <div class="_do_pdl4_coach_left_img">
                    <img :src="g.img" />
                  </div>
                  <div class="_do_pdl4_coach_dtls">
                    <div class="_o_pdl4_coach_dtls_one">
                      <div class="_do_pdl4_coach_dtls_top">
                        <p>{{ g.number }}</p>
                        <h3>
                          {{ g.name }} <span>{{ g.surname }}</span>
                        </h3>
                      </div>
                      <div class="_do_pdl4_coach_dtls_txt">
                        <p>
                          {{ g.description }}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- next -->
          <div @click="goBack" class="_next_pre _pre">&lt;</div>

          <!-- pre -->
          <div @click="goNext" class="_next_pre _next">></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      translateValue: 0,
      images: [
        {
          img: "../../../aaliyah.png",
          number: "person 1",
          name: "Aaliyah",
          surname: "Jardien",
          description:
            "Tashwill is very dedicated to his work. He assists whenever he can, and solves issues with a different outlook. One of the best people to have around.",
        },
        {
          img: "../../../jason.png",
          number: "person 2",
          name: "Jason",
          surname: "Wandrag",
          description:
            "Tashwill is a friendly individual with a very bright mind and a natural talent for leadership. He is a great all rounder and will become a great developer",
        },
        {
          img: "../../../Mikayla.png",
          number: "person 3",
          name: "Mikayla",
          surname: "Beelders",
          description:
            "Accompanying the fact that Tashwill is a quick learner, he is also always ready to assist others. Tashwill is very eager in expanding his learning and has a deep love for coding",
        },
        {
          img: "../../../Nathan.png",
          number: "person 4",
          name: "Nathan",
          surname: "Giose",
          description:
            "Tashwill is able to work great, no matter the circumstances. His time management skills are excellent. Tashwill has pronounced front end developement skills, and interacts well with his colleagues",
        },
        {
          img: "../../../Zaid.png",
          number: "person 5",
          name: "Zaid",
          surname: "Flandorp",
          description:
            "Tashwill is a fast learner and very diligent in what he does. He's always willing to help out where he's able and can communicate clearly. He has a great sense of humor and will always lighten up the mood",
        },
        {
          img: "../../../aaliyah.png",
          number: "person 1",
          name: "Aaliyah",
          surname: "Jardien",
          description:
            "Tashwill is very dedicated to his work. He assists whenever he can, and solves issues with a different outlook. One of the best people to have around.",
        },
        {
          img: "../../../jason.png",
          number: "person 2",
          name: "Jason",
          surname: "Wandrag",
          description:
            "Tashwill is a friendly individual with a very bright mind and a natural talent for leadership. He is a great all rounder and will become a great developer",
        },
        {
          img: "../../../Mikayla.png",
          number: "person 3",
          name: "Mikayla",
          surname: "Beelders",
          description:
            "Accompanying the fact that Tashwill is a quick learner, he is also always ready to assist others. Tashwill is very eager in expanding his learning and has a deep love for coding",
        },
        {
          img: "../../../Nathan.png",
          number: "person 4",
          name: "Nathan",
          surname: "Giose",
          description:
            "Tashwill is able to work great, no matter the circumstances. His time management skills are excellent. Tashwill has pronounced front end developement skills, and interacts well with his colleagues",
        },
        {
          img: "../../../Zaid.png",
          number: "person 5",
          name: "Zaid",
          surname: "Flandorp",
          description:
            "Tashwill is a fast learner and very diligent in what he does. He's always willing to help out where he's able and can communicate clearly. He has a great sense of humor and will always lighten up the mood",
        },
        {
          img: "../../../aaliyah.png",
          number: "person 1",
          name: "Aaliyah",
          surname: "Jardien",
          description:
            "Tashwill is very dedicated to his work. He assists whenever he can, and solves issues with a different outlook. One of the best people to have around.",
        },
        {
          img: "../../../jason.png",
          number: "person 2",
          name: "Jason",
          surname: "Wandrag",
          description:
            "Tashwill is a friendly individual with a very bright mind and a natural talent for leadership. He is a great all rounder and will become a great developer",
        },
        {
          img: "../../../Mikayla.png",
          number: "person 3",
          name: "Mikayla",
          surname: "Beelders",
          description:
            "Accompanying the fact that Tashwill is a quick learner, he is also always ready to assist others. Tashwill is very eager in expanding his learning and has a deep love for coding",
        },
        {
          img: "../../../Nathan.png",
          number: "person 4",
          name: "Nathan",
          surname: "Giose",
          description:
            "Tashwill is able to work great, no matter the circumstances. His time management skills are excellent. Tashwill has pronounced front end developement skills, and interacts well with his colleagues",
        },
        {
          img: "../../../Zaid.png",
          number: "person 5",
          name: "Zaid",
          surname: "Flandorp",
          description:
            "Tashwill is a fast learner and very diligent in what he does. He's always willing to help out where he's able and can communicate clearly. He has a great sense of humor and will always lighten up the mood",
        },
        {
          img: "../../../aaliyah.png",
          number: "person 1",
          name: "Aaliyah",
          surname: "Jardien",
          description:
            "Tashwill is very dedicated to his work. He assists whenever he can, and solves issues with a different outlook. One of the best people to have around.",
        },
        {
          img: "../../../jason.png",
          number: "person 2",
          name: "Jason",
          surname: "Wandrag",
          description:
            "Tashwill is a friendly individual with a very bright mind and a natural talent for leadership. He is a great all rounder and will become a great developer",
        },
        {
          img: "../../../Mikayla.png",
          number: "person 3",
          name: "Mikayla",
          surname: "Beelders",
          description:
            "Accompanying the fact that Tashwill is a quick learner, he is also always ready to assist others. Tashwill is very eager in expanding his learning and has a deep love for coding",
        },
        {
          img: "../../../Nathan.png",
          number: "person 4",
          name: "Nathan",
          surname: "Giose",
          description:
            "Tashwill is able to work great, no matter the circumstances. His time management skills are excellent. Tashwill has pronounced front end developement skills, and interacts well with his colleagues",
        },
        {
          img: "../../../Zaid.png",
          number: "person 5",
          name: "Zaid",
          surname: "Flandorp",
          description:
            "Tashwill is a fast learner and very diligent in what he does. He's always willing to help out where he's able and can communicate clearly. He has a great sense of humor and will always lighten up the mood",
        },
        {
          img: "../../../aaliyah.png",
          number: "person 1",
          name: "Aaliyah",
          surname: "Jardien",
          description:
            "Tashwill is very dedicated to his work. He assists whenever he can, and solves issues with a different outlook. One of the best people to have around.",
        },
      ],
      numberOfClicked: 1,
    };
  },
  methods: {
    goNext() {
      if (this.images.length - 1 == this.numberOfClicked) {
        this.translateValue = 0;
        this.numberOfClicked = 1;
        return;
      }
      this.translateValue = this.numberOfClicked * -69;
      this.numberOfClicked++;
    },
    goBack() {
      if (this.numberOfClicked == 1) return;
      this.translateValue = this.translateValue + 69;
      this.numberOfClicked--;
    },
  },
};
</script>

<style scoped>
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

.do_pl4_coach_slider_all {
  position: relative;
}

._next_pre {
  position: absolute;
  background: #eeee;
  height: 50px;

  width: 50px;
  border-radius: 100%;
  top: 1256px;
  /* transform: translateY(-50%); */
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Poppins", sans-serif;
  color: #000;
  font-size: 44px;
  line-height: 28px;
  padding: 0 0 3px;
  cursor: pointer;
  box-shadow: 0px 4px 8px 0px #00000087;
  transition: 0.3s all ease;
}

._next {
  right: 50px;
}

/* ._do_pdl4_coach_slider_all:hover ._next {
  opacity: 0.8;
  right: -23px;
} */

._pre {
  left: 50px;
}

/* ._do_pdl4_coach_all:hover ._pre {
  opacity: 0.8;
  left: -23px;
} */
/* 
._next_pre:hover {
  opacity: 1 !important;
} */

._do_pdl4_coach_slider {
  overflow: hidden;
}

._do_pdl4_coach_main {
  transition: 0.5s all ease;
  width: 100%;
}

._do_pdl4_coach_lft_main {
  max-width: 69%;
  padding-right: 20px;
}
._do_pdl4_coach {
  padding: 100px 20px 80px 104px;
  background: white;
}

._do_pdl4_coach_top p {
  margin: 0px 0px 60px 0px;
  font-family: "Poppins", sans-serif;
  font-size: 30px;
  font-weight: 600;
  line-height: 1.9;
  color: #ff5823;
  border-radius: 12px;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  padding: 5px 21px;
}

._do_pdl4_coach_main {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
._do_pdl4_coach_left {
  border-radius: 20px;
  background-color: rgba(54, 53, 59, 0.7);
  padding: 13px 45px 13px 13px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  flex: 0 0 69%;
  margin-left: 25px;
  color: white;
}

._do_pdl4_coach_left_img {
  width: 520px;
  margin-right: 25px;
}

._do_pdl4_coach_left_img img {
  -o-object-fit: cover;
  object-fit: cover;
  width: 100%;
  height: 100% !important;
  display: block;
  border-radius: 20px !important;
}

._do_pdl4_coach_dlts {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

._do_pdl4_coach_dtls_top {
  padding-left: 60px;
  margin-top: 40px;
}
</style>
