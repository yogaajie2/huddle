<template>
  <footer class="-m-6 mt-56 text-white lg:-mx-24">
    <div class="bg-cover bg-no-repeat h-12 bg-footer-top lg:h-38"></div>

    <div class="bg-dark-cyan px-6 py-12 lg:flex lg:flex-row-reverse lg:p-40">
      <section class="lg:ml-40">
        <span class="block font-bold text-lg uppercase">Newsletter</span>

        <p class="mt-4 lg:mt-6 lg:w-3/4">To receive tips on how to grow your community, sign up to our weekly newsletter. We'll never send you spam or pass on your email address.</p>

        <form
          @submit.prevent="validateEmail"
          action=""
          class="mt-2 lg:mt-4"
        >
          <p
            :class="{ invisible: hideCheckEmail }"
            class="text-light-red"
          >Check your email please</p>
          
          <div class="lg:flex">
            <input
              :class="{ 'border': isValid, 'border-light-red': isValid }"
              v-model.lazy.trim="email"
              type="text"
              class="mt-1 p-2 rounded text-black w-full lg:mt-0"
            />

            <div class="flex justify-end mt-4 lg:ml-10 lg:mt-0">
              <button
                type="submit"
                class="bg-pink font-semibold px-12 py-3 rounded text-white hover:bg-light-pink"
              >Subscribe</button>
            </div>
          </div>
        </form>
      </section>

      <section class="mt-32 lg:mt-0">
        <a href="javascript:void(0);">
          <img
            src="~/assets/img/logo-light.png"
            alt=""
          />
        </a>

        <p class="mt-6 lg:mt-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, henderit lacinia vestibulum a, ultrices quis sem.</p>
      

        <div class="mt-12">
          <div class="flex font-normal">
            <img
              class="w-6"
              src="~/assets/img/icon-phone.svg"
              alt=""
            />

            <p class="ml-6">Phone: +1-543-123-4567</p>
          </div>

          <div class="flex font-normal mt-6">
            <img
              class="w-6"
              src="~/assets/img/icon-email.svg"
              alt=""
            />

            <p class="ml-6">example@company.com</p>
          </div>
        </div>

        <div class="mt-12 space-x-4 lg:mt-20">
          <a href="javascript:void(0);">
            <font-awesome-icon
              :icon="['fab', 'facebook-square']"
              class="hover:text-facebook-blue"
              size="2x"
            />
          </a>

          <a href="javascript:void(0);">
            <font-awesome-icon
              :icon="['fab', 'instagram']"
              class="hover:text-black"
              size="2x"
            />
          </a>

          <a href="javascript:void(0);">
            <font-awesome-icon
              :icon="['fab', 'twitter-square']"
              class="hover:text-twitter-blue"
              size="2x"
            />
          </a>
        </div>
      </section>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      isValid: false,
      hideCheckEmail: true
    };
  },

  methods: {
    validateEmail: function() {
      const regex = /\S+@\S+\.\S+/;
      
      let validation = regex.test(this.email);

      if (validation) {
        this.isValid = false;
        this.hideCheckEmail = true;
        
        alert('Thank you for subscribing!');
      } else {
        this.isValid = true;
        this.hideCheckEmail = false;
      }
    }
  }
}
</script>