<template>
  <f7-page>
  <f7-navbar title="Contacts List"></f7-navbar>


  <f7-block-title>Contacts</f7-block-title>
<f7-list>
  <f7-list-item v-for="contact in contacts"
  :link="getLinks(contact.name)"
  :key="contact.name"
  :title="contact.name"
  :after="contact.status"
  >
    <f7-icon slot="media" icon="demo-list-icon"></f7-icon>
  </f7-list-item>
</f7-list>
</f7-page>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        {name: 'Aaron', status: 'CEO', getLink: '/message/'},
        {name: 'Abbie', status: 'CEO', getLink: '/message/'},
        {name: 'Adam', status: 'CEO', getLink: '/message/'}, 
        {name: 'Adele', status: 'CEO', getLink: '/message/'},
        {name: 'Agnes', status: 'CEO', getLink: '/message/'},
        {name: 'Bailie', status: 'CEO', getLink: '/message/'},
        {name: 'Barclay', status: 'CEO', getLink: '/message/'},
        {name: 'Bellamy', status: 'CEO', getLink: '/message/'},
        {name: 'Belle', status: 'CEO', getLink: '/message/'},
        {name: 'Benjamin', status: 'CEO', getLink: '/message/'},
        {name: 'Calvin', status: 'CEO', getLink: '/message/'},
        {name: 'Chester', status: 'CEO', getLink: '/message/'},
        {name: 'Cherlyn', status: 'CEO', getLink: '/message/'},
        {name: 'Chloe', status: 'CEO', getLink: '/message/'},
        {name: 'Vladimir', status: 'CEO', getLink: '/message/'}
      ]
      
    }
  },
  methods: {
    getLinks(name) {
      return '/message/'+name;
    }
  }
}
</script>

