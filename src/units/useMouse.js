import {
  ref, onMounted, onUnmounted
} from 'vue'
function useMouse() {
  const x = ref(0)
  const y = ref(0)
  const update = e => {
    x.value = e.pageX
    y.value = e.pageY
    console.log("y:" + y.value, "x:" + x.value);
  }
  onMounted(() => {
    window.addEventListener('mousemove', update)
  })
  onUnmounted(() => {
    window.removeEventListener('mousemove', update)
  })
  return { x, y }
}

export default useMouse