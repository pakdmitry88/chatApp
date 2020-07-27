<template>
 <f7-page>
  <f7-messages >
      <f7-message v-for="msg in msgs" :name="msg.name" :text="msg.text" :type="msg.type" :key="msg.text">
    </f7-message>
    </f7-messages>
      <f7-messagebar placeholder="type message" send-link="Send" v-on:send="onSend" />
  
</f7-page>
</template>

<script>
import axios from 'axios';

export default {
  props: ['names']
  ,
  created(){
    const pusher = new Pusher('73ab9f4e8e72fe50e567', {
        cluster: 'eu',
        encrypted: true,
      });
      const channel = pusher.subscribe('chat');
      channel.bind('message', data => {
          console.log(this.msgs)
          // console.log(this.names)
        var type = data.name == this.names ? 'sent':'received'
        var name = type == 'sent'? this.names : data.names;
        console.log('Added')
        this.msgs.push({name:this.names, text:data.text, type:type});
      });
  },
  data(){
    return {
      name: '',
      msgs: [],
    }
  },
  methods: {
        onSend: function(text, clear){
             console.log("clicked") 
            var message = {
                name: this.names,
                text: text 
            }
            axios.post('https://express-chat-app-server.herokuapp.com/message', message);
          if( typeof clear == 'function' ) clear()
          }
        }
}
      
</script>
