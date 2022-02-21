<template>
  <div>
    <Menubar :model="items">
      <template #start>
        <img alt="logo" src="https://www.primefaces.org/wp-content/uploads/2020/05/placeholder.png" height="40" class="mr-2">
      </template>
      <template #end>
        <InputText placeholder="Search" type="text" />
      </template>
    </Menubar>
  </div>
</template>

<script setup>
const items = ref([
  {
    label:'Quit',
    icon:'pi pi-fw pi-power-off'
  }
]);
</script>