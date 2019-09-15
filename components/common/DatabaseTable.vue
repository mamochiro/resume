<template>
  <div class="card">
    <div class="card-header bg-dark text-white border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0 text-white">Database Skills</h3>
        </div>
        <div class="col text-right">
          <!-- <base-button size="sm" type="primary">See all</base-button> -->
        </div>
      </div>
    </div>

    <div class="table-responsive">
      <base-table
        class="table align-items-center table-flush table-dark"
        thead-classes="thead-dark"
        :data="tableData"
      >
        <template slot="columns">
          <th>Referral</th>
          <th>Visitors</th>
          <th></th>
        </template>

        <template slot-scope="{ row }">
          <th scope="row">{{ row.name }}</th>
          <td>{{ row.visitors }}</td>
          <td>
            <div class="d-flex align-items-center">
              <span class="mr-2">{{ row.progress }}%</span>
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
          name: 'Marai DB',
          visitors: '1,480',
          progress: 60,
          progressType: 'gradient-danger',
        },
        {
          name: 'Mongo DB',
          visitors: '5,480',
          progress: 70,
          progressType: 'gradient-success',
        },
        {
          name: 'Microsoft SQL Server',
          visitors: '4,807',
          progress: 80,
          progressType: 'gradient-primary',
        },
      ],
    }
  },
}
</script>
<style></style>
