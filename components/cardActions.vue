<!-- Please remove this file from your project -->
<template>
  <v-row no-gutters justify="center" class="pa-5">
    <v-btn class="mr-4" @click="$emit('cancel')"> Cancel </v-btn>
    <v-btn :disabled="disabled" @click="$emit('submit')" color="primary" class="mr-4">
      Confirm
    </v-btn>
  </v-row>
</template>

<script>
export default {
  name: "CardActions",
  props: {
    disabled:{
     type: Boolean,
     default: false,
    } 
  }
};
</script>
