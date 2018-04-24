<template>
    <el-card class="box-card">
        <div slot="header" class="clearfix">
            <span>随机密码生成</span>
        </div>
        <el-form width="100%">
            <el-form-item>
                <el-col :span="4">长度</el-col>
                <el-col :span="10">
                    <el-input-number v-model="rdForm.passLength" controls-position="right" @change="handleChange"></el-input-number>
                </el-col>
            </el-form-item>
            <el-form-item>
                <el-checkbox-group v-model="rdForm.checkedConditions" @change="handleCheckedConditionChange">
                     <el-checkbox v-for="(condition, index) in rdForm.conditions" :label="condition" :key="index">{{condition}}</el-checkbox>
                </el-checkbox-group>
            </el-form-item>
            <el-form-item>
               <el-button type="primary" icon="el-icon-check" @click="generator">生成</el-button>
            </el-form-item>
            <el-form-item>
                <el-input v-model="randomPass" disabled></el-input>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
export default{
  data () {
    return {
      rdForm: {
        passLength: 20,
        checkedConditions: ['0-9', 'A-Z', 'a-z'],
        conditions: ['0-9', 'A-Z', 'a-z'],
        specialSymbols: ['!', '@', '#', '$', '%', '^', '&', '*', ',', '.', '_', '``', '~', '-', '+', '=']
      },
      randomPass: ''
    }
  },
  methods: {
    // 条件筛选
    handleCheckedConditionChange (value) {
      // 拿到的是所有选中的值
      console.log('value: ' + value)
      // console.log('checkedConditions: ' + JSON.stringify(this.rdForm.checkedConditions))
    },
    handleChange () {

    },
    generator () {
      console.log('rdForm: ' + JSON.stringify(this.rdForm))
      this.randomPass = 'test'
    }
  }
}
</script>

<style>

</style>
