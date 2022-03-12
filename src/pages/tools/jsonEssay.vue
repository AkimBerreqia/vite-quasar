
<script>
import { createApp } from 'vue'

const app = Vue.createApp({})

.component(
  // the registered name
  'MyComponent',
  // the implementation
  {
    export default {
    setup () {
        return {
            text: {
                lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                bb: 'bb'
            }
            
        }
        
    }
    }
  }
)

</script>