<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <h1 class="lp__title">Welcome to LandingPage</h1>

        <highcharts :options="chartOptions" :highcharts="hcInstance"></highcharts>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Highcharts from "highcharts";
export default {
  name: "LandingPage",

  data: () => ({
    hcInstance: Highcharts,
    chartOptions: {
      chart: {
        type: "pie"
      },
      title: {
        text: ""
      },
      credits: {
        enabled: false
      },
      plotOptions: {
        column: {
          borderWidth: 5,
          borderColor: {
            linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
            stops: [
              [0, "#1f4e94"], // start
              [0.5, "#215598"], // middle
              [1, "#318cb4"] // end
            ]
          }
        },
        pie: {
          allowPointSelect: true,
          cursor: "pointer",
          colors: [
            {
              linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
              stops: [
                [0, "#3290b6"], // start
                [0.5, "#52a2b6"], // middle
                [1, "#8bc1b3"] // end
              ]
            },
            "#306aa5",
            "#1ca6a9",
            "#1db9cb"
          ],
          dataLabels: {
            enabled: true,
            format: "<p>{point.percentage:.1f} %</p>",
            distance: -50
          },
          slicedOffset: 0
        }
      },
      series: [
        {
          data: [
            ["Firefox", 50],
            ["IE", 10],
            {
              name: "Chrome",
              y: 20,
              sliced: true,
              selected: true
            },
            ["Safari", 20]
          ]
        }
      ]
    }
  })
};
</script>

<style lang="scss">
@import "../assets/styles/_lp.scss";
</style>
