<template>
	<view class="register">
		<!-- 状态栏 -->
		<view class="status-bar" />
		<wd-transition :show="true" name="fade-left">
			<TopBar />
			<RegisterContent />
		</wd-transition>

	</view>
</template>

<script setup>
	import TopBar from '../../components/register/TopBar.vue';
	import RegisterContent from '../../components/register/RegisterContent.vue';
</script>

<style lang="scss">
	.register {
		height: 100vh; // 页面高度为视口高度
		display: flex; // 使用 Flex 布局
		flex-direction: column; // 垂直排列子元素

		// 状态栏样式
		.status-bar {
			height: var(--status-bar-height); // 高度为系统状态栏高度
			width: 100%; // 宽度占满父容器
			background-color: #ffffff; // 背景色为白色
		}
	}
</style>