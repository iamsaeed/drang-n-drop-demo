<template>
    <div class="flex justify-center items-center py-2">
      <nav v-if="data.last_page !== 1" class="relative z-0 flex items-center shadow">
        <div v-if="data.current_page !== 1"
           @click="gotoPage(1)"
           class="cursor-pointer relative inline-flex items-center px-2 py-2 bg-white dark:bg-gray-700 text-sm text-gray-500 hover:bg-gray-50">
          First
        </div>
        <div v-if="data.current_page !== 1"
           @click="gotoPreviousPage()"
           class="cursor-pointer relative inline-flex items-center px-2 py-2 bg-white dark:bg-gray-700 text-sm text-gray-500 hover:bg-gray-50">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div v-for="page in (data.last_page)" :key="page" @click="paginate(page)">
          <div v-if="page < data.current_page + 2 && page > data.current_page - 2"
             :class="data.current_page === page ? 'bg-primary-active text-white' : 'bg-white dark:bg-gray-700'"
             class="cursor-pointer z-10 relative inline-flex items-center px-4 py-2 text-sm">
            {{ page }}
          </div>
        </div>
        <div v-if="data.current_page !== data.last_page"
           @click="gotoNextPage()"
           class="cursor-pointer relative inline-flex items-center px-2 py-2 bg-white dark:bg-gray-700 text-sm text-gray-500 hover:bg-gray-50">
          <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </div>
        <div v-if="data.current_page !== data.last_page"
           @click="gotoPage(data.last_page)"
           class="cursor-pointer relative inline-flex items-center px-2 py-2 bg-white dark:bg-gray-700 text-sm text-gray-500 hover:bg-gray-50">
          Last
        </div>
      </nav>
    </div>
</template>

<script>
export default {
  props: ["data", "show"],
  methods: {
    paginate(page) {
      let _this = this;
      _this.data.current_page = page;
      _this.$emit('updatePagination', _this.data);
    },
    gotoNextPage() {
      let _this = this;
      if (_this.data.current_page !== _this.data.last_page) {
        _this.data.current_page = _this.data.current_page + 1;
        _this.$emit('updatePagination', _this.data);
      }
    },
    gotoPreviousPage() {
      let _this = this;
      if (_this.data.current_page > 1) {
        _this.data.current_page = _this.data.current_page - 1;
        _this.$emit('updatePagination', _this.data);
      }
    },
    gotoPage(id) {
      let _this = this;
      _this.data.current_page = id;
      _this.$emit('updatePagination', _this.data);
    }
  }
};
</script>
