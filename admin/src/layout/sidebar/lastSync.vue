<template>
    <div class="lastSync">
    <p>Last Synced Yesterday, 8:30pm</p>
    <a href="#">Sync Now</a>
    </div>
</template>

<script>
export default {
  name: 'lastSync'
}
</script>

<style>
.lastSync{
    padding: 0.75rem 1rem;
    color: rgba(0, 0, 0, 0.87);
    font-size: 14px;
}
.lastSync p{
    margin-bottom: 8px;
    line-height: 17px
}
</style>