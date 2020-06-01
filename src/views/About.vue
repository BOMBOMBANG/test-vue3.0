<template>
  <div class="test">
    <h1>test count: {{count}}</h1>
    <button @click="add">add</button>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMouse } from "@/units";
export default {
  // useMouse,
  setup() {
    const count = ref(0);
    const { x, y } = useMouse();
    function add() {
      count.value++;
    }
    return {
      count,
      add,
      x,
      y
    };
  }
};
</script>