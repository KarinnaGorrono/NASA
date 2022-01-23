<template>
<div class="row">
  <div class="col-12 d-flex justify-content-center">
 <label class="mx-3" for="start">Picture date: </label>
    
<input
      v-model="date"
      type="date"
      />
      <button class="btn btn-success mx-3" @click="getImage()">See Picture</button>
    
  </div>
  </div>

<div class="row">
  <div class="col-12 d-flex justify-content-center">
<div class="home-card p-5 bg-white shadow " v-if="apod">
    <h1>{{ apod.title }}</h1>
    <div v-if="apod.media_type == 'image'">
      <img :src="apod.hdurl" alt="" height="400" width="500" />
    </div>
    <div v-else-if="apod.media_type == 'video'">
      <iframe height="400" width="500" :src="apod.url"> </iframe>
    </div>
    <h5>{{ apod.date }}</h5>
  </div>
  </div>
</div>
</template>


<script>
import { imagesService } from "../services/ImagesService";
import { computed, ref } from "@vue/reactivity";
import { AppState } from "../AppState";
export default {
  setup(){
    const date = ref("");
    return {
      apod: computed(() => AppState.apod),
      date,
      async getImage() {
        try {
          await imagesService.getImage(date.value);
        } catch (error) {
          logger.error(error);
        }
      },
    };
  },
};
</script>


<style lang="scss" scoped>

</style>