<style>
  @CHARSET "ISO-8859-1";
  /* Reset CSS
  * --------------------------------------- */
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,
  form,fieldset,input,textarea,p,blockquote,th,td {
      padding: 0;
      margin: 0;
  }
  a{
      text-decoration:none;
  }
  table {
      border-spacing: 0;
  }
  fieldset,img {
      border: 0;
  }
  address,caption,cite,code,dfn,em,strong,th,var {
      font-weight: normal;
      font-style: normal;
  }
  strong{
      font-weight: bold;
  }
  ol,ul {
      list-style: none;
      margin:0;
      padding:0;
  }
  caption,th {
      text-align: left;

  }
  h1,h2,h3,h4,h5,h6 {
      font-weight: normal;
      font-size: 100%;
      margin:0;
      padding:0;
  }
  q:before,q:after {
      content:'';
  }
  abbr,acronym { border: 0;
  }
  *{
      -webkit-box-sizing: border-box; /* Safari<=5 Android<=3 */
      -moz-box-sizing: border-box; /* <=28 */
      box-sizing: border-box;
  }

  /* Custom
  * --------------------------------------- */
  body {
      font-family: arial, helvetica;
  }
  .section{
      position: relative;
      text-align: center;
  }
  #section-1 h2{
      color: #fff;
      font-size: 10em;
      font-weight: 900;
  }
  #section-1 h1{
      font-size: 2em;
      font-weight: 100;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
      margin: 1.5em auto 1em auto;
      color: #35495e;
      padding-right: 30px;
      padding-left: 30px;
  }
  #section-1 li {
      display: inline-block;
      margin: 1.25em 0.3em;
  }
  .section-1-button{
      padding: 0.93em 1.87em;
      background: #35495e;
      border-radius: 5px;
      display: block;
      color: #fff;
  }
  h3{
      font-size: 5em;
      text-align: center;
      color: #fff;
      font-weight: bold;
  }
  #logo{
      position: fixed;
      top: 20px;
      left: 20px;
      color: #fff;
      font-weight: bold;
      z-index: 99;
      font-size: 1.9em;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
  }

  /* Menu
  * --------------------------------------- */
  #menu-line {
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 159px;
      height: 2px;
      background: #fff;
  }

  #menu{
      position: fixed;
      top: 20px;
      right: 20px;
      z-index: 70;
      -webkit-font-smoothing: antialiased;
      -moz-font-smoothing: antialiased;
      letter-spacing: 1px;
      font-size: 1.1em;
  }
  #menu li{
      display: inline-block;
      margin: 10px 0px;
      position: relative;
  }
  #menu a{
      color: #fff;
      padding: 0 1.1em 1.1em 1.1em;
  }
  #menu li.active a:after{
      content: '';
      margin: 0 1.1em 0 1.1em;
      height: 2px;
      background: #fff;
      display: block;
      position: absolute;
      bottom: -6px;
      left: 0;
      right: 0;
      display: block;
  }

  /* Actions buttons
  * --------------------------------------- */
  .actions{
      position: fixed;
      bottom: 2%;
      margin: 0 auto;
      z-index: 99;
      left: 0;
      right: 0;
      text-align: center;
  }
  .actions li{
      display: inline-block;
      margin: 0.3em 0.3em;
  }
  .actions-button{
      padding: 0.73em 1.47em;
      background: rgba(53, 73, 94, 0.47);
      border-radius: 5px;
      display: block;
      color: #fff;
      cursor: pointer;
  }

  /* Twitter
  * --------------------------------------- */
  .twitter-share i{
      vertical-align: middle;
      position: relative;
      top: 2px;
      display: inline-block;
      width: 38px;
      height: 14px;
      color: white;
      top: -4px;
      left: -2px;
      fill: #fff;
  }
  .twitter-share svg{
      height: 40px;
      margin-top: -10px;
  }
  .view-github{
      position: fixed;
      top: 20px;
      left: 20px;
      z-index: 999;
      padding: .93em 1.87em;
      background: #35495e;
      border-radius: 5px;
      display: block;
      color: #fff;
  }

</style>
<template>
  <div>
    <full-page :options="options" id="fullpage" ref="fullpage">
      <div class="section">
          <h3>vue-fullpage.js</h3>
      </div>
      <div class="section">
          <div class="slide">
              <h3>Slide 2.1</h3>
          </div>
          <div class="slide">
              <h3>Slide 2.2</h3>
          </div>
          <div class="slide">
              <h3>Slide 2.3</h3>
          </div>
      </div>
      <div class="section">
          <h3>Section 3</h3>
      </div>
    </full-page>
    
    <a class="view-github" href="https://github.com/alvarotrigo/vue-fullpage.js" target="_blank">View on Github</a>
    
    <ul class="actions">
      <li @click="moveSectionDown" class="actions-button">Down</li>
      <li @click="moveSectionUp" class="actions-button">Up</li>
      <li @click="moveTo(2,2)" class="actions-button">MoveTo</li>
      <li @click="silentMoveTo(2,2)" class="actions-button">Silent Move</li>
      <li @click="moveSlideRight" class="actions-button">Move right</li>
      <li @click="moveSlideLeft" class="actions-button">Move lef</li>
      <li @click="setAutoScrolling(false)" class="actions-button">Set autoScroll</li>
      <li @click="setFitToSection(false)" class="actions-button">Set fitTo</li>
      <li @click="setAllowScrolling(false)" class="actions-button">Set allowScroll</li>
      <li @click="setKeyboardScrolling(false)" class="actions-button">Set keyboardScroll</li>
      <li @click="setScrollingSpeed(4000)" class="actions-button">setScrollingSpeed</li>
      <li @click="destroy('all')" class="actions-button">Destroy</li>
      <li @click="addSection" class="actions-button">Add section</li>
      <li @click="removeSection" class="actions-button">Remove section</li>
    </ul>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/fullPage.js/2.9.5/jquery.fullpage.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.5.13/vue.min.js"></script>

<script src="https://alvarotrigo.com/vue-fullpage/dist/js/mixin.min.js?v=21"></script>
<script src="https://alvarotrigo.com/vue-fullpage/dist/js/build.min.js?v=21"></script>
<script>
  import FullPage from 'vue-fullpage.js';

  export default {
    components: {
      FullPage,
    },

    data() {
      return {
        options: {
          navigation: true,
          anchors: ['page1', 'page2', 'page3', 'page4'],
          sectionsColor: ['#41b883', '#ff5f45', '#0798ec', '#fec401', '#1bcee6', '#ee1a59', '#2c3e4f', '#ba5be9', '#b4b8ab']
        }
      }
    },
    methods: {
      addSection: function(e) {
        e.preventDefault();
        var newSectionNumber = $('.fp-section').length + 1;

        //adding section
        $('#fullpage').append(`<div class="section"><h3>Section ${newSectionNumber}</h3></div>`);

        //adding anchor for the section
        this.options.anchors.push(`page${newSectionNumber}`);

        //we have to call `update` manually as DOM changes won't fire updates
        //requires the use of the attribute ref="fullpage" on the
        //component element, in this case, <full-page>
        this.$refs.fullpage.update();
      },
      removeSection: function(){
          $('#fullpage').find('.fp-section').last().remove();
          this.options.anchors.pop();
      },
    }
  }
</script>