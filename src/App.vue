<template>
  <!-- Content -->
    <div class="px-3 py-10 md:px-10">
        <div class="w-full sm:w-1/2 lg:w-1/3 mx-auto">
          <pre>
            <!--{{ $store.state.todos }} -->
          </pre>
          <todoSpinner v-if="loading"/>
          <template v-else>
            <TodoFormAdd/>
            <TodoItems v-if="$store.state.todos.length"/>
            <TodoEmpty v-else/>
          </template>
        </div>
    </div>
    <!--/ Content -->
</template>

<script>
import todoSpinner from '@/components/todoSpinner.vue'
import TodoFormAdd from '@/components/todoFormAdd.vue'
import TodoItems from '@/components/todoItems.vue'
import TodoEmpty from '@/components/todoEmpty.vue'
import { ref } from 'vue'
import { useStore } from 'vuex'

export default {
  name: 'App',
  components: {
    todoSpinner,
    TodoFormAdd,
    TodoItems,
    TodoEmpty,
  },
  setup(){
    const loading = ref(false)
    const store = useStore()

    loading.value = true
    store.dispatch('getTodos').finally(() => {
      loading.value = false
    })

    return {
      loading,
    }
  },
}
</script>
