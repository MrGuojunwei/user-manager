<template>
  <div class="layout">
    <Layout>
      <Header class="layout-header">
        <Menu mode="horizontal" class="header-menu" theme="dark" active-name="1">
          <div class="layout-logo"></div>
          <div class="layout-nav">
            <MenuItem name="1">
              <Icon type="ios-navigate"></Icon>权限管理
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider class="layout-sider">
          <Menu class="sider-menu" active-name="1-1" theme="light" width="220" :open-names="['1']">
            <Submenu name="1">
              <template slot="title">
                <Icon type="ios-navigate"></Icon>用户管理
              </template>
              <MenuItem name="1-1">用户管理</MenuItem>
              <MenuItem name="1-2">角色管理</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout class="layout-content">
          <Breadcrumb class="bread-curmb">
            <BreadcrumbItem to="/">权限管理</BreadcrumbItem>
            <BreadcrumbItem to="/">用户管理</BreadcrumbItem>
            <BreadcrumbItem>用户管理</BreadcrumbItem>
          </Breadcrumb>
          <Content class="content">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  name: "baseLayout",
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>
$headerHeight: 60px;
$siderWidth: 200px;
$BreadcrumbHeight: 50px;
.layout {
  position: relative;
  width: 100%;
  height: 100%;
}
.layout-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  overflow: hidden;
  height: $headerHeight;
}
.layout-sider {
  position: fixed;
  left: 0;
  top: $headerHeight;
  bottom: 0;
  width: $siderWidth;
  background-color: #fff;
}
.layout-content {
  position: fixed;
  top: $headerHeight;
  left: $siderWidth;
  right: 0;
  bottom: 0;
}
.layout-logo {
  width: 100px;
  height: 30px;
  background: #5b6270;
  border-radius: 3px;
  float: left;
  position: relative;
  top: 15px;
  left: 20px;
}
.header-menu {
  display: flex;
  justify-content: space-between;
}
.layout-nav {
  height: $headerHeight;
  flex: 1;
  display: flex;
  justify-content: flex-end;
}
.sider-menu {
  height: 100%;
}
.bread-curmb {
  height: $BreadcrumbHeight;
  line-height: $BreadcrumbHeight;
  margin-left: 15px;
}
.content {
  margin: 0 15px 15px;
  box-sizing: border-box;
  position: fixed;
  top: $headerHeight + $BreadcrumbHeight;
  left: $siderWidth;
  right: 0;
  bottom: 0;
  background-color: #fff;
}
</style>
