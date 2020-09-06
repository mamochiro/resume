<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Framework and Computer Language</h3>
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
          progress: 70,
          progressType: 'gradient-info',
        },
        {
          name: 'Laravel',
          progress: 85,
          progressType: 'gradient-info',
        },
        {
          name: 'JQuery',
          progress: 65,
          progressType: 'gradient-success',
        },
        {
          name: 'Node.JS',
          progress: 75,
          progressType: 'gradient-info',
        },
        {
          name: 'Lumen',
          progress: 75,
          progressType: 'gradient-success',
        },
        {
          name: 'Adonis',
          progress: 60,
          progressType: 'gradient-success',
        },
        {
          name: 'Vue.JS',
          progress: 55,
          progressType: 'gradient-success',
        },
        {
          name: 'Nuxt.JS',
          progress: 55,
          progressType: 'gradient-success',
        },
        {
          name: 'Golang',
          progress: 60,
          progressType: 'gradient-success',
        },
      ],
    }
  },
}
</script>
<style></style>
