<template>
  <MDBContainer>
    <MDBRow>
      <MDBCol class="col-lg-6 col-md-8 col-sm-12 mx-auto">
        <form
          @submit.prevent="handleSubmit"
          class="w-100"
          name="contact"
          method="POST"
          netlify-honeypot="bot-field"
          data-netflity="true"
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
            label="Name"
            id="form4Name"
            v-model="form4Name"
            wrapperClass="mb-4"
          />

          <!-- Email input -->
          <MDBInput
            type="email"
            name="email"
            label="Email address"
            id="form4Email"
            v-model="form4Email"
            wrapperClass="mb-4"
          />
          <MDBInput
            type="subject"
            name="subject"
            label="Subject"
            id="form4Email"
            v-model="form4Subject"
            wrapperClass="mb-4"
          />

          <!-- Message input -->
          <MDBTextarea
            label="Message"
            name="message"
            id="form4Textarea"
            v-model="form4Textarea"
            wrapperClass="mb-4"
          />

          <!-- Submit button -->
          <MDBBtn color="primary" block class="mb-4" type="submit">
            Send
          </MDBBtn>
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
import { ref } from "vue";
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
          "Content-Type": "application/x-www-urlencoded",
        },
        body: this.encode({
          "form-name": "contact",
          ...this.form,
        }),
      })
        .then(() => console.log("successfully submitted"))
        .catch((e) => console.error(e));
    },
  },
  setup() {
    const form4Name = ref("");
    const form4Email = ref("");
    const form4Subject = ref("");
    const form4Password = ref("");
    const form4Textarea = ref("");
    const form4CopyCheck = ref(true);

    return {
      form4Name,
      form4Subject,
      form4Email,
      form4Password,
      form4Textarea,
      form4CopyCheck,
    };
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
</style>
