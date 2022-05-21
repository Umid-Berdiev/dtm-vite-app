<script setup lang="ts">
import { useI18n } from 'vue-i18n';

const { t } = useI18n()
</script>

<template>
  <div class="box table-responsive p-4 mt-3">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">
            #
          </th>
          <th scope="col">
            First
          </th>
          <th scope="col">
            Last
          </th>
          <th scope="col">
            Handle
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            1
          </th>
          <td>Baxa</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">
            2
          </th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">
            3
          </th>
          <td colspan="2">
            Larry the Bird
          </td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
</style>
