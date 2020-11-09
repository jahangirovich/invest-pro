<template>
  <div>
    <div class="container_move">
      <Header />
      <TopNavigator/>
      <Nuxt />
      <div class="bottom">
        <Navigator/>
        <Footer />
      </div>
    </div>
    <Sidebar />
  </div>
</template>
<script>
import Header from '@/components/layoutComponent/Header'
import Footer from '@/components/layoutComponent/Footer'
import Navigator from '@/components/layoutComponent/Navigator'
import TopNavigator from '@/components/layoutComponent/TopNavigation'

export default {
  components: {
    Header,
    Footer,
    Navigator,
    TopNavigator
  }
}
</script>
<style lang="scss">

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}
body {
  background-color: #F4F4F4;
}
.nav_up{
  display: none;
}
.container_move{
  padding-right: 28px
}

</style>
