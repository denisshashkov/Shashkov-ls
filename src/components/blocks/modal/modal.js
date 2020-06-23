import EventBus from '../../../scripts/EventBus';

export default {
  template: '#modal-template',
  data: () => ({
    modal: {
      showed: false,
    }
  }),
  methods: {
    closeModal() {
      this.modal.showed = false;
    },
  },
  mounted() {
    EventBus.$on('validateEvent', payload => {
      this.modal.showed = payload.showed;
    });
  },
};