<template>
  <div>
    <Form :model="queryForm" :label-width="100" label-position="right">
      <Row class="row">
        <Col span="8">
          <FormItem label="用户名： 王孟娟">
            <Input v-model="queryForm.name" />
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem label="年龄：">
            <InputNumber class="ageInput" :min="1" :max="100" :step="1" v-model="queryForm.age" />
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem label="手机号：">
            <Input v-model="queryForm.phone" placeholder="请输入用户手机号" />
          </FormItem>
        </Col>
      </Row>
      <Row>
        <Col span="8">
          <FormItem label="角色：">
            <Input v-model="queryForm.role" placeholder="请输入要查询的用户角色" />
          </FormItem>
        </Col>
        <Col span="8">
          <FormItem label="状态：">
            <Select v-model="queryForm.state" placeholder="请选择账号状态">
              <Option value="0">停用</Option>
              <Option value="1">启用</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <Row style="text-align: center">
        <div style="display: inline-block">
          <Button type="primary">查询</Button>
          <Button class="resetButton">重置</Button>
        </div>
      </Row>
    </Form>
    <div class="table-wrap">
      <Table :columns="columns" :data="data" border />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryForm: {
        name: "",
        age: 0,
        phone: "",
        role: "",
        state: 0
      },
      data: [],
      columns: [
        {
          title: "序号",
          key: "num",
          align: "center",
          width: 80
        },
        {
          title: "用户名",
          key: "name",
          align: "center",
          minWidth: 150
        },
        {
          title: "年龄",
          key: "age",
          align: "center",
          minWidth: 100
        },
        {
          title: "状态",
          key: "state",
          align: "center",
          minWidth: 100
        },
        {
          title: "手机号",
          key: "phone",
          align: "center",
          minWidth: 150
        },
        {
          title: "角色",
          key: "role",
          align: "center",
          width: "150"
        }
      ]
    };
  },
  mounted() {
    console.log('$options',this.$options);
  }
};
</script>

<style lang="scss" scoped>
.row {
  margin: 10px 16px;
}
.ageInput {
  width: 100%;
}
.resetButton {
  margin-left: 20px;
}
.table-wrap {
  // margin-top: 20px;
  margin: 20px;
}
</style>