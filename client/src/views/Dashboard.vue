<template>
  <div class="home-section">
    &nbsp;
    <div class="container mt-3">
      <div class="row mt-3">
        <div class="col-md-2">
          <div class="sidebr">
            <div class="user-container">
              <router-link to="/Dashboard/profile" class="user">
                <img v-if="authUser.image" :src="authUser.image" class="img-fluid style-img" alt />
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  class="mr-2"
                  viewBox="0 0 53 53"
                >
                  <path
                    d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
                    fill="#e7eced"
                  />
                  <path
                    d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
                    fill="#757575"
                  />
                </svg>
                {{authUser.firstname}}
              </router-link>
            </div>
            <ul>
              <router-link to="/Dashboard" class="user text-sec" tag="li">
                <span>
                  <i class="fas fa-home mr-2"></i> Home
                </span>
              </router-link>

              <router-link to="/Dashboard/suggestion" class="user text-sec" tag="li">
                <span>
                  <i class="fas fa-users mr-2"></i> Developers
                </span>
              </router-link>
              <router-link to="/Dashboard" class="user text-sec" tag="li">
                <span>
                  <i class="fas fa-street-view mr-2"></i> Suggestions
                </span>
              </router-link>
              <router-link to="/Dashboard" class="user text-sec" tag="li">
                <span>
                  <i class="fas fa-ad mr-2"></i> update
                </span>
              </router-link>
            </ul>
          </div>
        </div>
        <div class="col-md-7">
          <div class>
            &nbsp;
            <div style="margin-top: -1.6rem;">
              <router-view></router-view>
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <div class="suggestion-section">
            <div class="p-3 suggestion">
              <p>Suggestions for you</p>
              <div class="d-flex flex-row align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  class="mr-2"
                  viewBox="0 0 53 53"
                >
                  <path
                    d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
                    fill="#e7eced"
                  />
                  <path
                    d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
                    fill="#757575"
                  />
                </svg>
                <div class="d-flex flex-column">
                  <div class="text-sec">
                    <b>Jeff Miranda</b>
                  </div>
                  <div class="text-sec1">@jeff</div>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  class="mr-2"
                  viewBox="0 0 53 53"
                >
                  <path
                    d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
                    fill="#e7eced"
                  />
                  <path
                    d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
                    fill="#757575"
                  />
                </svg>
                <div class="d-flex flex-column">
                  <div class="text-sec">
                    <b>Tom Kochi</b>
                  </div>
                  <div class="text-sec1">@tom</div>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  class="mr-2"
                  viewBox="0 0 53 53"
                >
                  <path
                    d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
                    fill="#e7eced"
                  />
                  <path
                    d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
                    fill="#757575"
                  />
                </svg>
                <div class="d-flex flex-column">
                  <div class="text-sec">
                    <b>Pako Kochi</b>
                  </div>
                  <div class="text-sec1">@pako</div>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  class="mr-2"
                  viewBox="0 0 53 53"
                >
                  <path
                    d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
                    fill="#e7eced"
                  />
                  <path
                    d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
                    fill="#757575"
                  />
                </svg>
                <div class="d-flex flex-column">
                  <div class="text-sec">
                    <b>Victor Bailey</b>
                  </div>
                  <div class="text-sec1">@victor</div>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  class="mr-2"
                  viewBox="0 0 53 53"
                >
                  <path
                    d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
                    fill="#e7eced"
                  />
                  <path
                    d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
                    fill="#757575"
                  />
                </svg>
                <div class="d-flex flex-column">
                  <div class="text-sec">
                    <b>Jim Shugart</b>
                  </div>
                  <div class="text-sec1">@jim</div>
                </div>
              </div>
              <div class="d-flex flex-row align-items-center mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  class="mr-2"
                  viewBox="0 0 53 53"
                >
                  <path
                    d="M18.613 41.552l-7.907 4.313a7.106 7.106 0 0 0-1.269.903A26.377 26.377 0 0 0 26.5 53c6.454 0 12.367-2.31 16.964-6.144a7.015 7.015 0 0 0-1.394-.934l-8.467-4.233a3.229 3.229 0 0 1-1.785-2.888v-3.322c.238-.271.51-.619.801-1.03a19.482 19.482 0 0 0 2.632-5.304c1.086-.335 1.886-1.338 1.886-2.53v-3.546c0-.78-.347-1.477-.886-1.965v-5.126s1.053-7.977-9.75-7.977-9.75 7.977-9.75 7.977v5.126a2.644 2.644 0 0 0-.886 1.965v3.546c0 .934.491 1.756 1.226 2.231.886 3.857 3.206 6.633 3.206 6.633v3.24a3.232 3.232 0 0 1-1.684 2.833z"
                    fill="#e7eced"
                  />
                  <path
                    d="M26.953.004C12.32-.246.254 11.414.004 26.047-.138 34.344 3.56 41.801 9.448 46.76a7.041 7.041 0 0 1 1.257-.894l7.907-4.313a3.23 3.23 0 0 0 1.683-2.835v-3.24s-2.321-2.776-3.206-6.633a2.66 2.66 0 0 1-1.226-2.231v-3.546c0-.78.347-1.477.886-1.965v-5.126S15.696 8 26.499 8s9.75 7.977 9.75 7.977v5.126c.54.488.886 1.185.886 1.965v3.546c0 1.192-.8 2.195-1.886 2.53a19.482 19.482 0 0 1-2.632 5.304c-.291.411-.563.759-.801 1.03V38.8c0 1.223.691 2.342 1.785 2.888l8.467 4.233a7.05 7.05 0 0 1 1.39.932c5.71-4.762 9.399-11.882 9.536-19.9C53.246 12.32 41.587.254 26.953.004z"
                    fill="#757575"
                  />
                </svg>
                <div class="d-flex flex-column">
                  <div class="text-sec">
                    <b>Phillip Hodge</b>
                  </div>
                  <div class="text-sec1">@m_Slim</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<<script>
import {EventBus} from "@/main"
import {mapState} from "vuex"

export default {
    name: " Dashbaord",
    data() {
        return {
          // user: null
        } 
    },
    computed : {
      ...mapState("userModule", ["authUser"])
    },
}
</script>

<<style lang="scss" scoped>
.style-img {
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  width: 1.3rem;
  height: 1.3rem;
}
.home-section{
    min-height: 76.5vh;
}
.suggestion-section{
    background-color: #fff;
    color:orange red;
    border-radius: 0.4rem;
    box-shadow: 0 2px 2px #ccc;
    position: fixed;
    box-sizing: border-box;
    width: 15rem;
}
.suggestion{
    text-align: start;
    
    
}
.suggestion p {
    font-size: 13px;
    font-weight: 500;
    
}
.suggestion ul li{
    list-style: none;
    padding:4px;
}
.suggestion ul li a{
    color: black;
    font-size: 13px;
    text-decoration: none;
    // padding:10px;
}
.text-sec{
  font-size: 14px;
  color:rgba(0,0,0,0.87);
  font-weight: 600;
  
}
.user-container{
    color:black;
    text-align: start;
    width: 100%;
    margin: auto;
    background-color: #fff;
    padding:10px;
    font-size: 14px;
    box-shadow: 0 2px 2px #ccc;
    margin-bottom: 8px;
}
.user-container .user{
    color: black;
    font-size: 14px;
    text-decoration: none;
}
.sidebr ul{
    width: 100%;
}
.sidebr ul li {
   
    width: 100%;
  padding: 10px;
  text-align: start;
  list-style: none;
}

.sidebr ul li a {
  color: black;
//   display: block;
  font-size: 14px;
  text-decoration: none;
}

.sidebr ul li:hover {
  background-color: #7099ca;
}

.sidebr ul li:hover a {
  color: #fff;
}
.sidebr{
    position: fixed;
    width: 10rem;
}
.avatar1 {
  background-color: #ccc;
  width: 30px;
  height: 30px;
  border-radius: 50%;
}
.text-sec{
  font-size: 13px;
  font-weight: 400; 
}
.text-sec1{
  color:#999;
  font-size: 13px;
  font-weight: 400; 
}
 
    @media only screen 
    and (min-width : 320px) 
    and (max-width : 964px) {

.sidebr{
    display: none;
  }
  .suggestion-section{
    display: none;
  }

    }
    @media only screen 
and (min-width : 1224px) {

    /* Styles */

}

@media only screen 
and (min-width : 1824px) {

    /* Styles */

}
</style>