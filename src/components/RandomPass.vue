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
                <el-col  :span="4">特殊字符</el-col>
                <el-col :span="4">
                    <el-input v-model="rdForm.specialSymbols" clearble></el-input>
                </el-col>
            </el-form-item>
            <el-form-item>
               <el-button type="primary" icon="el-icon-check" @click="generator">生成</el-button>
            </el-form-item>
            <el-form-item>
                <el-col>
                    {{randomPass}}
                </el-col>
                <el-col>
                    <el-rate v-model="passStrength" disabled v-if="randomPass" show-score></el-rate>
                </el-col>
                <!-- <template v-model="randomPass" disabled></template> -->
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script>
var numbers = '0123456789'
var letters = 'abcdefghijklmnopqrstuvwxyz'
var symbols = '!@#$%^&*'
export default{
  data () {
    return {
      rdForm: {
        passLength: 20,
        checkedConditions: ['0-9', 'a-z', 'A-Z'],
        conditions: ['0-9', 'a-z', 'A-Z'],
        specialSymbols: '!@#$%^&*'
      },
      randomPass: '',
      passStrength: null
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
      // 重置为空
      this.randomPass = ''
      // 随机字符串池
      var pool = ''
      // console.log('rdForm: ' + JSON.stringify(this.rdForm))
      this.rdForm.checkedConditions.forEach(element => {
        // console.log('element: ' + element)
        // console.log('index: ' + this.rdForm.conditions.indexOf(element))
        if (this.rdForm.conditions.indexOf(element) === 0) {
          pool += '0123456789'
        }
        if (this.rdForm.conditions.indexOf(element) === 1) {
          pool += 'abcdefghijklmnopqrstuvwxyz'
        }
        if (this.rdForm.conditions.indexOf(element) === 2) {
          pool += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
        }
      })
      // 特殊字符增加
      pool += this.rdForm.specialSymbols
      var Random = require('random-js')
      var random = new Random(Random.engines.mt19937().autoSeed())
      // console.log('random: ' + random.integer(1, 100))
      // console.log('random string: ' + random.string(this.rdForm.passLength))
      // console.log('random pool: ' + random.string(10, pool))
      var randomPass = random.string(this.rdForm.passLength, pool)
      // 判断强度 根据字母和特殊字符占的百分比乘以5
      var strength = 0
      for (var r of randomPass) {
        if (numbers.indexOf(r) !== -1) {
          strength += 2
          continue
        }
        if (letters.indexOf(r) !== -1) {
          strength += 5
          continue
        }
        if (symbols.indexOf(r) !== -1) {
          strength += 10
          continue
        }
      }
      // console.log('strength: ' + strength)
      this.randomPass = randomPass
      this.passStrength = parseFloat((strength / (this.rdForm.passLength * 10) * 5).toFixed(2))
    }
  }
}
</script>

<style>

</style>
