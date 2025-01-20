<template>
	<view class="bg" />
	<view class="userinfo">
		<TopBar />
		<UserContent />
	</view>
</template>

<script setup>
	import TopBar from '../../components/userinfo/TopBar.vue';
	import UserContent from '../../components/userinfo/UserContent.vue';
</script>

<style lang="scss">
	.bg {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url('../../static/images/img/three.png');
		background-size: cover;
		background-position: center;
		filter: blur(15rpx);
		opacity: 0.4;
		z-index: -1;
	}

	.userinfo {
		width: 100vw;
		height: 100vh;
		position: absolute;
		top: 0;
		left: 0;
		z-index: 5;
	}
</style>