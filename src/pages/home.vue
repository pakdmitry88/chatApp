<template>
  <f7-page :page-content="false">
    <f7-navbar title="МЧСApp">
      <f7-nav-right>
        <!-- <f7-link icon-ios="f7:arrow_up_arrow_down_circle_fill" icon-aurora="f7:arrow_up_arrow_down_circle_fill" icon-md="material:compare_arrows" @click="isBottom = !isBottom"></f7-link> -->
      </f7-nav-right>
    </f7-navbar>
    <f7-toolbar tabbar labels :position="isBottom ? 'bottom' : 'top'">
      <f7-link tab-link="#tab-1" tab-link-active text="Домой" icon-ios="f7:house" icon-aurora="f7:envelope_fill" icon-md="material:email"></f7-link>
      <f7-link tab-link="#tab-2" text="Контакты" icon-ios="f7:text_bubble" icon-aurora="f7:calendar_fill" icon-md="material:today"></f7-link>
      <f7-link tab-link="#tab-3" text="Настройки" icon-ios="f7:gear_alt" icon-aurora="f7:cloud_upload_fill" icon-md="material:file_upload"></f7-link>
    </f7-toolbar>

    <f7-tabs>
      <f7-tab id="tab-1" class="page-content" tab-active>
        <f7-block>
          <f7-list>
                  <f7-list-item>
                        <f7-list-item>    
                          <f7-input type="text" :value="name" placeholder="Your name" clear-button @input="name = $event.target.value"></f7-input>
                          
                          
                        </f7-list-item>
                  </f7-list-item>
                  <f7-list-button v-on:click="enterChat(name)">Enter Chat</f7-list-button>
                </f7-list>
          
        </f7-block>
      </f7-tab>
      <f7-tab id="tab-2" class="page-content">
        <contact-view></contact-view>
      </f7-tab>
      <f7-tab id="tab-3" class="page-content">
        
        <page-chat></page-chat>

      </f7-tab>
    </f7-tabs>
  </f7-page>
</template>
<script>
import ContactView from '../pages/contact.vue'
import PageChat from '../pages/page-chat.vue'
import Pusher from 'pusher-js' 
export default {
    data() {
      return {
        isBottom: true,
        name: '',
      }
    }, 
    methods: {
    enterChat: function(name){
          if(name.trim().length === 0 ){
            alert(" Enter your name ...")
            return false;
          }
          console.log(this.name)
          // this.msgs.length = 0;
          this.$f7.views.main.router.navigate('/chat/', {props: {names: this.name}});
          
        },
    
    },
    
    components: {
      ContactView,
      PageChat
    }
  }
</script>


  