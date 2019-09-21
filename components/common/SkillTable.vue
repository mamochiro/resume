<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Framework and Computer Language Skills</h3>
        </div>
        <div class="col text-right">
          <!-- <base-button size="sm" type="primary">See all</base-button> -->
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table thead-classes="thead-light" :data="tableData">
        <template slot="columns">
          <th>Skill</th>
          <th>Level</th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">{{ row.name }}</th>
          <td>
            <div class="d-flex align-items-center">
              <base-progress
                :type="row.progressType"
                class="pt-0"
                :show-percentage="false"
                :value="row.progress"
              />
            </div>
          </td>
        </template>
      </base-table>
    </div>
  </div>
</template>
<script>
export default {
  name: 'SkillTable',
  data() {
    return {
      tableData: [
        {
          name: 'PHP',
          visitors: '1,480',
          progress: 70,
          progressType: 'gradient-success',
        },
        {
          name: 'Laravel',
          visitors: '5,480',
          progress: 85,
          progressType: 'gradient-success',
        },
        {
          name: 'JQuery',
          visitors: '5,480',
          progress: 65,
          progressType: 'gradient-info',
        },
        {
          name: 'Node.JS',
          visitors: '4,807',
          progress: 65,
          progressType: 'gradient-info',
        },
        {
          name: 'Lumen',
          visitors: '3,678',
          progress: 75,
          progressType: 'gradient-info',
        },
        {
          name: 'Adonis',
          visitors: '2,645',
          progress: 60,
          progressType: 'gradient-info',
        },
        {
          name: 'Vue.JS',
          visitors: '2,645',
          progress: 55,
          progressType: 'gradient-info',
        },
        {
          name: 'Nuxt.JS',
          visitors: '2,645',
          progress: 55,
          progressType: 'gradient-info',
        },
      ],
    }
  },
}
</script>
<style></style>
