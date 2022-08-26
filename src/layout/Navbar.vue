<template>
  <div>
    <NavbarTop />
    <NavbarLeft />
  </div>
</template>

<script>
import NavbarLeft from "@/layout/NavbarLeft.vue";
import NavbarTop from "@/layout/NavbarTop.vue";

export default {
  components: { NavbarTop, NavbarLeft },
};
</script>
