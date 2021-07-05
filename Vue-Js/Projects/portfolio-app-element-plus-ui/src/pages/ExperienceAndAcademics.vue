<template>
  <el-container>
    <el-main>
      <el-row>
        <el-card>
          <h2>Academic Info</h2>
          <ul v-if="isMobileView">
            <li v-for="academic in tableData"
              :key="academic.course"
            >Course :<span class="academic-info"><h4>{{academic.course}}</h4></span><span>Institute :<h4>{{academic.institute}}</h4></span></li>
          </ul>


          <!-- <h4>Course:B.Tech Computer Science and Engineering</h4> -->
          <!-- <h4>Institute:College Of Engineering Trivandrum,Kerala,India</h4> -->
          <el-table
              :data="tableData" v-else
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
          <!-- <h4>Python/Odoo Developer(1yr), Cybrosys Technologies</h4> -->
          <ul v-if="isMobileView">
            <li v-for="exp in experienceData"
              :key="exp.company"
            >position :<span class="academic-info"><h4>{{exp.position}}({{exp.expYrs}} yrs)</h4></span>Company :<span><h4>{{exp.company}}</h4></span></li>
          </ul>

          <el-table v-else
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
                label="Years Of Experience"
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
  import { ref } from 'vue';
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
      //Mobile View
      const isMobileView = ref(window.innerWidth<768);
      return{
        tableData,
        experienceData:experienceTableData,
        isMobileView,
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
  font-size:1em;
}
h4{
  margin:0;
  font-size: 0.9em;
}
@media (max-width:768px) {
  h2{
    font-size: 1.2em;
  }
}
/* ul{
  list-style: none;
} */
</style>
