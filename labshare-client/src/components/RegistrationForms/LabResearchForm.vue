<template>
  <div class="lab_diag-form">
    <b-form @submit="submit">

      <template v-if="!profileUpdate">
        <transition :name="transition" mode="out-in">
          <component
            :is="formSection"
            v-model="formData"
            :role="role"
            @nextState="nextFormSection"
            @previousState="previousFormSection"
            :profileUpdate="profileUpdate"
            @submit="submit"
          ></component>
        </transition>
      </template>

      <template v-else>
        <b-modal
          id="deleteModal"
          :title="$t('profile.delete.btn_title')"
          :ok-title="$t('general.delete')"
          :cancel-title="$t('general.cancel')"
          ok-variant="danger"
          @ok="$emit('deleteProfile')"
        >
          <p class="my-4">{{ $t('profile.delete.confirmation') }}</p>
        </b-modal>
        <div v-for="i in updateFormSections" :key="i">
          <component
            :is="i"
            v-model="formData"
            :role="role"
            @nextState="nextFormSection"
            @previousState="previousFormSection"
            :profileUpdate="profileUpdate"
          ></component>
        </div>
        <b-row>
          <b-col cols="auto">
            <b-button variant="primary" @click="submit" :disabled="disableSubmit">{{ $t("general.save") }}</b-button>
          </b-col>
          <b-col cols="auto">
            <b-button variant="danger" v-b-modal.deleteModal>{{ $t("profile.delete.btn_title") }}</b-button>
          </b-col>
        </b-row>
      </template>
      
    </b-form>
  </div>
</template>

<script>
import registrationForm from "@/mixins/registrationForm";

export default {
  name: "LabDiagForm",
  mixins: [registrationForm],
  data: function() {
    return {
      formData: {
        address: {
          city: "",
          zipcode: "",
          street: ""
        },
        contact: {
          firstname: "",
          lastname: "",
          email: "",
          phone: ""
        },
        organization: "",
        description: "",
        password: "",
        website: "",
        consent: {
          publicSearch: true,
          mailUpdates: true,
        },
        offers: {
          equipment: [],
          advice: [],
          equipmentDescription: "",
          adviceDescription: ""
        }
      },
      formSections: [
        "LoginInformation",
        "Lab_Contact",
        "Lab_Offer",
        "Lab_Consent",
      ],
    };
  },
  computed: {
    updateFormSections() {
      return [
        "LoginInformation",
        "Lab_Contact",
        "Lab_Consent",
      ]
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.section {
  margin-top: 50px;
}

.forward-enter-active, .forward-leave-active {
  transition: all .2s ease;
}
.forward-leave-to {
  opacity: 0;
  transform: translateX(-100px);
}

.forward-enter {
  opacity: 0;
  transform: translateX(400px);
}


.back-enter-active, .back-leave-active {
  transition: all .2s ease;
}
.back-leave-to {
  opacity: 0;
  transform: translateX(400px);
}

.back-enter {
  opacity: 0;
  transform: translateX(-100px);
}
</style>
