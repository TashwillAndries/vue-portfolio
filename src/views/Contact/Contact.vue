<template>
  <MDBContainer>
    <MDBRow>
      <MDBCol class="col-lg-6 col-md-8 col-sm-12 mx-auto">
        <form
          @submit.prevent="handleSubmit"
          class="w-100"
          name="contact"
          method="POST"
          data-netlify="true"
        >
          <p style="display: none" class="hidden">
            <label
              >Dont fill this out youre humanL <input name="bot-field"
            /></label>
          </p>
          <!-- Name input -->
          <MDBInput
            type="text"
            name="name"
            label="Your Name"
            class="input"
            id="form4Name"
            v-model="form.name"
            wrapperClass="mb-4"
          />

          <!-- Email input -->
          <MDBInput
            type="email"
            class="input"
            name=" Email"
            label="Email address"
            id="form4Email"
            v-model="form.email"
            wrapperClass="mb-4"
          />
          <MDBInput
            type="subject"
            class="input"
            name="subject"
            label="Subject"
            id="form4Subject"
            v-model="form.subject"
            wrapperClass="mb-4"
          />

          <!-- Message input -->
          <MDBTextarea
            label="Message"
            class="input"
            name="message"
            id="form4Textarea"
            v-model="form.message"
            wrapperClass="mb-4"
          />

          <!-- Submit button -->
          <MDBBtn block class="mb-4" type="submit"> Send </MDBBtn>
        </form>
      </MDBCol>
    </MDBRow>
  </MDBContainer>
</template>

<script>
import {
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBTextarea,
  MDBContainer,
  MDBRow,
  MDBCol,
} from "mdb-vue-ui-kit";
export default {
  data: () => ({
    form: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  }),
  components: {
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBTextarea,
    MDBContainer,
    MDBRow,
    MDBCol,
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    handleSubmit() {
      fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: this.encode({
          "form-name": "contact",
          ...this.form,
        }),
      })
        .then(() => this.$router.push({ path: "/" }))
        .catch((e) => console.error(e));
    },
  },
};
</script>

<style>
.btn {
  border: 2px solid white;
  background-color: #ff5823 !important;
  transition: 0.5s ease-in-out;
}

.btn:hover {
  background-color: #ff562369 !important;
}

.form-label {
  color: #ff5823 !important;
}
.form-outline .form-control {
  color: #fff !important;
  background-color: black;
}

.form-outline .form-control:focus {
  background-color: black;
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
</style>
