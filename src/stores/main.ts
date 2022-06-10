import { acceptHMRUpdate, defineStore } from "pinia";
import { useStorage } from "@vueuse/core";
import { useToast } from "vue-toastification";
import { isUndefined } from "lodash";
import makeRequest from "../api/makeRequest";

interface DefaultInterface {
  id?: string;
  title?: string;
}

const toast = useToast();
const locale = "uz";

export const useStore = defineStore("main", {
  state: () => ({
    heiList: [],
    heiPaginatedList: [],
    directionsList: [],
    subjectsList: [],
    selectedHei: useStorage("selectedHei", {}),
    selectedDirection: useStorage("selectedDirection", {}),
    selectedSubjects: useStorage("selectedSubjects", []),
    selectedSubject1: useStorage("selectedSubject1", {}),
    selectedSubject2: useStorage("selectedSubject2", {}),
    answeredQuestionsList: useStorage("selectedSubject2", {}),
    exam: useStorage("exam", {}),
    diff: 0,
    timerID: null,
    userVariants: useStorage("userVariants", []),
    examResults: [],
  }),

  getters: {
    getHeiList: (state) => state.heiList,
    getHeiPaginatedList: (state) => state.heiPaginatedList,
    getDirectionsList: (state) => state.directionsList,
    getSubjectsList: (state) => state.subjectsList,
    getSelectedHei: (state) => state.selectedHei,
    getSelectedDirection: (state) => state.selectedDirection,
    getSelectedSubjects: (state) => state.selectedSubjects,
    getSelectedSubject1: (state) => state.selectedSubject1,
    getSelectedSubject2: (state) => state.selectedSubject2,
    getExam: (state) => state.exam,
    getDiff: (state) => state.diff,
    getUserVariants: (state) => state.userVariants,
    getExamResults: (state) => state.examResults,
  },

  actions: {
    async fetchHeiList() {
      try {
        const res = await makeRequest({
          url: `/api/heis/all`,
          headers: { authorization: true },
        });
        this.heiList = res.data;
      } catch (err: any) {
        console.log("error while fetching Hei: ", err.message);
        toast.error(err.message);
        throw err;
      }
    },

    async fetchHeiById(hei_id) {
      try {
        const res = await makeRequest({
          url: `/api/heis/${hei_id}`,
          headers: { authorization: true },
        });
        return res.data;
      } catch (err: any) {
        console.log("error while fetching Hei: ", err.message);
        toast.error(err.message);
        throw err;
      }
    },

    async fetchHeiPaginatedList(payload: any) {
      try {
        const res = await makeRequest({
          url: `/api/heis`,
          params: payload,
          headers: { authorization: true },
        });
        this.heiPaginatedList = res.data;
      } catch (err: any) {
        console.log("error while fetching Hei: ", err.message);
        toast.error(err.message);
        throw err;
      }
    },

    async fetchSubjectsList() {
      try {
        const res = await makeRequest({
          url: `/api/subjects/all`,
          params: {
            locale,
          },
          headers: { authorization: true },
        });
        this.subjectsList = res.data;
      } catch (err: any) {
        console.log("error while fetching subjects: ", err.message);
        toast.error(err.message);
        throw err;
      }
    },

    async fetchDefaultSubjects() {
      try {
        const res = await makeRequest({
          url: `/api/subjects/defaults`,
          params: {
            locale,
          },
          headers: { authorization: true },
        });
        this.selectedSubjects = res.data;
      } catch (err: any) {
        console.log("error while fetching subjects: ", err.message);
        toast.error(err.message);
        throw err;
      }
    },

    async fetchDirectionsList() {
      try {
        const res = await makeRequest({
          url: `/api/heis/${this.selectedHei.id}/directions`,
          headers: { authorization: true },
        });
        this.directionsList = res.data;
      } catch (err: any) {
        console.log("error while fetching directions: ", err.message);
        toast.error(err.message);
        throw err;
      }
    },

    async fetchQuestions() {
      try {
        const exam_id = this.getExam.id;
        const subject_1 = await this.getSelectedSubjects[0]?.id;
        const subject_2 = await this.getSelectedSubjects[1]?.id;
        const selected_hei = await this.getSelectedHei.id;
        const selected_direction = await this.getSelectedDirection.id;

        const res = await makeRequest({
          url: `/api/questions/filtered`,
          params: {
            locale,
            subject_1,
            subject_2,
            exam_id,
            selected_hei,
            selected_direction,
          },
          headers: { authorization: true },
        });

        const { subject1, subject2, onatili, matematika, uzb_tarixi, exam } =
          res.data;

        this.selectedSubjects = [
          subject1,
          subject2,
          onatili,
          matematika,
          uzb_tarixi,
        ];
        this.exam = exam;
        // localStorage.setItem("exam", JSON.stringify(res.data.exam));
        // useStorage("exam", await res.data.exam);
      } catch (error: any) {
        console.log("error while fetching directions: ", error.message);
        toast.error(error.message);
        throw error;
      }
    },

    async fetchExamResults() {
      try {
        const res = await makeRequest({
          url: `/api/results`,
          params: { locale },
          headers: { authorization: true },
        });

        this.examResults = res.data;
        // toast.success("Data received successfully!");
      } catch (err: any) {
        console.log("Error while fetching results: ", err.message);
        toast.error(err.message);
        throw err;
      }
    },

    async syncExamTimerWithServer() {
      try {
        const res = await makeRequest({
          url: `/api/exams/${this.exam.id}/refresh`,
          headers: { authorization: true },
        });
        this.exam = res.data;
      } catch (err: any) {
        console.log("error while fetching directions: ", err.message);
        toast.error(err.message);
        throw err;
      }
    },

    async startTimer() {
      const startTime = Date.now();
      const endTime = Date.parse(this.exam.end_time);
      this.diff = endTime - startTime;

      const interval = 1000;

      // this.finishExam();
      const timerID = setInterval(() => {
        if (this.diff <= 0) {
          clearInterval(timerID);
        } else {
          this.diff = this.diff - interval;
        }
      }, interval);
    },

    async saveUserVariant(data) {
      try {
        const res = await makeRequest({
          url: `/api/results`,
          method: "post",
          data,
          headers: { authorization: true },
        });

        this.userVariants = res.data;
      } catch (error) {}
    },

    async finishExam() {
      try {
        const exam_id = this.exam.id;
        if (!isUndefined(exam_id))
          await makeRequest({
            url: `/api/exams/${exam_id}/end_time`,
            method: "put",
            headers: { authorization: true },
          });

        this.diff = 0;
        this.exam = {};
        this.userVariants = [];
      } catch (error: any) {
        console.log("Error while ending exam: ", error.message);
        toast.error(error.message);
        throw error;
      }
      // this.$router.push("/exam-results");
    },
  },
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
