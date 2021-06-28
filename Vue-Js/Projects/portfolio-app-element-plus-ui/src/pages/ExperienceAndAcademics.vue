<template>
  <el-container>
    <el-main>
      <el-row>
        <el-card>
          <h2>Academic Info</h2>
          <!-- <h4>Course:B.Tech Computer Science and Engineering</h4> -->
          <!-- <h4>Institute:College Of Engineering Trivandrum,Kerala,India</h4> -->
          <el-table
              :data="tableData"
              style="width: 100%">
              <el-table-column
                prop="course"
                label="Course"
                width="400">
              </el-table-column>
              <el-table-column
                prop="passYear"
                label="Year of Passing"
                width="400">
              </el-table-column>
              <el-table-column
                prop="institute"
                label="Institute"
                width="400">
              </el-table-column>
            </el-table>
        </el-card>
        <el-card>
          <h2>Experiences</h2>
          <h4>Python/Odoo Developer(1yr), Cybrosys Technologies</h4>
          <el-table
              :data="experienceData"
              style="width: 100%">
              <el-table-column
                prop="position"
                label="Job Position"
                width="200">
              </el-table-column>
              <el-table-column
                prop="company"
                label="Company"
                width="200">
              </el-table-column>
              <el-table-column
                prop="fromDate"
                label="From Date"
                width="180">
              </el-table-column>
              <el-table-column
                prop="toDate"
                label="To Date"
                width="180">
              </el-table-column>
              <el-table-column
                prop="expYrs"
                label="Years Of Experiences"
                width="180">
              </el-table-column>
              <el-table-column
                prop="techs"
                label="Tech Stack"
                width="250">
              </el-table-column>
            </el-table>
        </el-card>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
  export default{
    setup(){
      //Table data to render
      const tableData = [
        {
          course:'B.Tech. Computer Science and Engineering',
          passYear:'2015',
          institute:'College of Engineering Trivandrum'
        }
      ];
      //Experiences Table
      const experienceTableData = [
        {
          position:'Python/Odoo Developer',
          company:'Cybrosys Technologies',
          expYrs:1,
          fromDate:'2019-11-04',
          toDate:'2020-10-18',
          techs:'Python, Odoo, Javascript, XML, PostgreSQL'
        }
      ]
      return{
        tableData,
        experienceData:experienceTableData,
      }
    }
  }
</script>
<style scoped>
.el-card{
  width:100%;
  display: flex;
  justify-content: center;
}
.el-table{
  width:100%;
}
</style>
