<template>
  <table class="table tablesorter" :class="tableClass">
    <thead :class="theadClasses">
      <tr>
        <slot name="columns" :columns="columns">
          <th v-for="column in columns" :key="column" />
        </slot>
      </tr>
    </thead>
    <tbody :class="tbodyClasses">
      <tr v-for="(item, index) in data" :key="index">
        <slot :row="item" :index="index">
          <td v-for="(column, index2) in colsWithValue(item)" :key="index2" />
        </slot>
      </tr>
    </tbody>
  </table>
</template>
<script>
export default {
  name: 'BaseTable',
  props: {
    labelEmpty: {
      type: String,
      default: 'ไม่พบข้อมูล',
    },
    columns: {
      type: Array,
      default: () => [],
      description: 'Table columns',
    },
    data: {
      type: [Array, Object],
      default: () => [],
      description: 'Table data',
    },
    type: {
      type: String, // striped | hover
      default: '',
      description: 'Whether table is striped or hover type',
    },
    theadClasses: {
      type: String,
      default: '',
      description: '<thead> css classes',
    },
    tbodyClasses: {
      type: String,
      default: '',
      description: '<tbody> css classes',
    },
  },
  computed: {
    tableClass() {
      return this.type && `table-${this.type}`
    },
    colsWithValue() {
      return row => this.columns.filter((columns, index) => this.hasValue(row, columns))
    },
  },
  methods: {
    hasValue(item, column) {
      return item[column.toLowerCase()] !== 'undefined'
    },
    itemValue(item, column) {
      return item[column.toLowerCase()]
    },
  },
}
</script>
<style></style>
