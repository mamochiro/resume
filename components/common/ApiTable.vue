<template>
  <div class="card">
    <div class="card-header border-0">
      <div class="row align-items-center">
        <div class="col">
          <h3 class="mb-0">Api Skills</h3>
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
          <th></th>
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
          name: 'Restful API',
          visitors: '1,480',
          progress: 60,
          progressType: 'gradient-danger',
        },
        {
          name: 'GraphQL',
          visitors: '5,480',
          progress: 70,
          progressType: 'gradient-success',
        },
      ],
    }
  },
}
</script>
<style></style>
