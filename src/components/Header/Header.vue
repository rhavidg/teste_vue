<script>
import { UpperHeader, LowerHeader } from "./Header";

export default {
  components: { UpperHeader, LowerHeader },
  props: {
    items: [],
    title: "",
    activePage: "",
  },
  data: function () {
    return {};
  },
  methods: {
    redirectTo(location) {
      const newLocation = "/" + location.toLowerCase();
      const currentLocation = "/" + this.$route.name;
      if (newLocation !== currentLocation) {
        return this.$router.push(newLocation);
      } else {
        return;
      }
    },
  },
};
</script>

<template>
  <div>
    <UpperHeader>
      <h1>{{ title }}</h1>
    </UpperHeader>
    <LowerHeader>
      <div
        v-for="item in items"
        v-on:click="redirectTo(item)"
        :class="$route.path.includes(item.toLowerCase()) ? 'active' : ''"
      >
        {{ item }}
      </div>
    </LowerHeader>
  </div>
</template>
