<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div style="width:70%;padding: 10px; border-bottom: 2rem solid #f1f1f1 !important;" class="border border-muted">
      <form class=" ml-3 w-90" >
        <div>
          <img style="width: 10rem;" src="../assets/profile.png" alt="">
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
        
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password">
        </div>
        <div class="text-[#04a96d]">
          <button type="submit" style="width: 100%; background-color: #04aa6d;" class="btn btn-primary justify-content-center">Login</button>
        </div>
        <div style="text-align: right;">
          <p>Forgot <span class="text-success">Password?</span></p>
        </div>
    </form>
  </div>
</template>

<!-- <style>
.bTN {
  background-color: green;
}

/* .bTN:hover {
  

} */
</style> -->

