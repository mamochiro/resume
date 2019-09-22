<template>
  <div>
    <base-header
      class="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
      :style="`background-size: cover; background-position: center top;`"
    >
      <!-- Mask -->
      <span class="mask bg-gradient-success opacity-8"></span>
      <!-- Header container -->
      <div class="container-fluid d-flex align-items-center">
        <div class="row">
          <div class="col-lg-7 col-md-10">
            <h1 class="display-2 text-white">What I do</h1>
            <p class="text-white mt-0 mb-5">
              I have more than 1 year experience building software for clients all over the world.
              Below is a quick overview of my main technical skill sets and technologies I use.
            </p>
          </div>
        </div>
      </div>
    </base-header>

    <!--Charts-->
    <div class="container-fluid mt--7">
      <!--Tables-->
      <div class="row mt-5">
        <div class="col-12 col-md-6">
          <SkillTable />
        </div>
        <div class="col-12 col-md-6">
          <ApiTable />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 col-md-6">
          <DatabaseTable />
        </div>
        <div class="col-12 col-md-6">
          <DevOpsTable />
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 col-md-6">
          <OsTable />
        </div>
      </div>
      <!--End tables-->
    </div>
  </div>
</template>

<script>
// Charts
// import PageVisitsTable from '~/components/common/PageVisitsTable'
import SkillTable from '~/components/common/SkillTable'
import ApiTable from '~/components/common/ApiTable'
import DatabaseTable from '~/components/common/DatabaseTable'
import DevOpsTable from '~/components/common/DevOpsTable'
import OsTable from '~/components/common/OsTable'
import * as chartConfigs from '~/components/themetools/Charts/config'
// import LineChart from '~/components/themetools/Charts/LineChart'
// import BarChart from '~/components/themetools/Charts/BarChart'

// Tables

export default {
  components: {
    // LineChart,
    // BarChart,
    // PageVisitsTable,
    SkillTable,
    ApiTable,
    DatabaseTable,
    DevOpsTable,
    OsTable,
  },
  data() {
    return {
      bigLineChart: {
        allData: [[0, 20, 10, 30, 15, 40, 20, 60, 60], [0, 20, 5, 25, 10, 30, 15, 40, 40]],
        activeIndex: 0,
        chartData: {
          datasets: [],
          labels: [],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Sales',
              data: [25, 20, 30, 22, 17, 29],
            },
          ],
        },
      },
    }
  },
  mounted() {
    this.initBigChart(0)
  },
  methods: {
    initBigChart(index) {
      const chartData = {
        datasets: [
          {
            label: 'Performance',
            data: this.bigLineChart.allData[index],
          },
        ],
        labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      }
      this.bigLineChart.chartData = chartData
      this.bigLineChart.activeIndex = index
    },
  },
}
</script>
<style></style>
