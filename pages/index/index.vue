<template>
	<view class="content">
		<TopBar :leftImageSrc="'/static/images/img/four.png'" />
		<FriendList :MessageName="'好友申请'" :ListImageSrc="'/static/images/img/apply.png'" />
		<FriendList :MessageName="'名字'" :ListImageSrc="'/static/images/img/four.png'" />
	</view>
</template>

<script setup>
	import TopBar from '../../components/index/TopBar.vue';
	import FriendList from '../../components/index/FriendList.vue';
</script>

<style lang="scss">
</style>