<script setup>
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/vue'
</script>

<template>
  <div style="display: flex; margin-left: 10px;">
    <SignedOut>
      <SignInButton>
        <button>Entrar</button>
      </SignInButton>
    </SignedOut>
    <SignedIn>
      <UserButton />
    </SignedIn>
  </div>
</template>