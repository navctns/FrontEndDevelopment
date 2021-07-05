<template>
  <el-container>
    <el-main>
      <el-row>
        <el-card>
          <h3>Academic Info</h3>
          <ul v-if="isMobileView">
          <!-- <ul> -->
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
          <h3>Experiences</h3>
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
  background: #F9F9F9;

}
.el-table{
  width:90%;
  font-size:0.9em;
  background: #F6F5F5;
}
h4{
  margin:0;
  font-size: 0.9em;
}
ul{
  width:100%;
}
ul li{
  /* margin:1em; */
  /* margin: auto; */
  /* display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start; */
  margin:0 15em;
  width:90%;
}
h3{
  text-align: left;
  margin:0 15em;

}
@media (max-width:768px) {
  h2{
    font-size: 1.2em;
  }
  ul li{
    margin:0;
  }
  h3{
    margin:0;
    text-align:center;
  }
}
/* ul{
  list-style: none;
} */
</style>
