import EventBus from '../../../scripts/EventBus';

export default {
  template: '#tooltip-template',
  data: () => ({
    tooltip: {
      showed: false,
      message: 'Сообщение успешно отправленно!'
    }
  }),
  methods: {
    closeTooltip() {
      this.tooltip.showed = false;
    }
  },
  mounted() {
    EventBus.$on('validateEvent', payload => {
      this.tooltip.showed = payload.showed;
    });
  },
  watch: {
    "tooltip.showed"(value) {
      if (value) {
        let timeout;

        clearTimeout(timeout);

        timeout = setTimeout(() => {
          this.closeTooltip();
        }, 3000);
      }
    }
  }
};