import moment from "moment";
import { ref } from "vue";

// const threeHour = 1000 * 60 * 60 * 3;
// const diff = ref(threeHour);

const sencondsByNow = Date.now();
const sencondsAfterThreeHours = moment(sencondsByNow).add(3, "hours");
const diff = ref(sencondsAfterThreeHours - sencondsByNow);
const interval = 1000;

export default () => {
  function startTimer() {
    const timerID = setInterval(() => {
      if (diff.value === 0) clearInterval(timerID);
      diff.value = diff.value - interval;
    }, interval);
  }

  return {
    startTimer,
    diff,
  };
};
