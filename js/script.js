const app = new Vue({

  el : '#app',

  data:{
    message: 'Questa è la prima cosa che scrivo in Vue',
    sfondo: 'img-background',
    image: './generic_vue_header.jpg',
    visibilità: 'hide',
    visible: false
  },

  methods:{
    toggleGetImage(){
      this.visible = ! this.visible;
    }
  }

})

