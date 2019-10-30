<template>
  <div class="menu-tree">
    <a-menu mode="inline" theme="dark">
      <template v-for="item in treeData">
        <a-menu-item v-if="!item.children" :key="item.id">
          <a-icon type="user" />
          <span>{{item.title}}</span>
        </a-menu-item>
        <sub-menu v-else :menu-info="item" :key="item.id" />
      </template>
    </a-menu>
  </div>
</template>
<script>
import SubMenu from "./SubMenu";
import Utils from "@/utils";
export default {
  name: "MenuTree",
  data() {
    return {
      arrayTree: [
        {
          id: 1,
          pid: 0,
          title: "菜单A"
        },
        {
          id: 5,
          pid: 1,
          title: "菜单A-1"
        },
        {
          id: 6,
          pid: 1,
          title: "菜单A-2"
        },
        {
          id: 2,
          pid: 0,
          title: "菜单B"
        },
        {
          id: 7,
          pid: 2,
          title: "菜单B-1"
        },
        {
          id: 8,
          pid: 2,
          title: "菜单B-2"
        },
        {
          id: 3,
          pid: 0,
          title: "菜单C"
        },
        {
          id: 9,
          pid: 3,
          title: "菜单C-1"
        },
        {
          id: 10,
          pid: 9,
          title: "菜单C-1-1"
        },
        {
          id: 4,
          pid: 0,
          title: "菜单D"
        }
      ],
      treeData: []
    };
  },
  created() {
    this.treeData = Utils.array2Tree(this.arrayTree);
  },
  components: {
    SubMenu
  }
};
</script>
<style scoped>
</style>
