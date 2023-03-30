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
          <h2>Sign UP</h2>
          <p>Please fill the form to sign up</p>
          <hr>
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email">
        
        </div>
        <div class="mb-3">
          <label for="username" class="form-label">username</label>
          <input type="text" class="form-control" id="username" placeholder="Enter username">
        
        </div>
        <div class="mb-3">
          <label for="firstname" class="form-label">firstname</label>
          <input type="text" class="form-control" id="firstname" placeholder="Enter firstname">
        
        </div>
        <div class="mb-3">
          <label for="lastname" class="form-label">lastname</label>
          <input type="text" class="form-control" id="lastname" placeholder="Enter lastname">
        
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter password">
        </div>

        <button type="submit" style="width: 60%; background-color: #04aa6d;" class="btn btn-primary justify-content-center">Sign Up</button>
        <div>
          <p>By Creating an account agree to our <span class="text-primary">Terms & Privacy.</span></p>
        </div>
    </form>
  </div>
</template>

