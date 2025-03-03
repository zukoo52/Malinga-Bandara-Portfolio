<template>
<AboutMeBanner />

<DownloadResume />

<PortfolioOverView />
</template>
<script>

import AboutMeBanner from "@/components/AboutUs/AboutMeBanner.vue";
import DownloadResume from "@/components/AboutUs/DownloadResume.vue";
import PortfolioOverView from "@/components/AboutUs/PortfolioOverView.vue"
export default {
  components: {
    AboutMeBanner,
    DownloadResume,
    PortfolioOverView,
  },
};
</script>
