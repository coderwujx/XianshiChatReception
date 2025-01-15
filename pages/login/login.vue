<template>
	<!-- 登录页面容器 -->
	<view class="login">
		<!-- 状态栏 -->
		<view class="status-bar" />
		<!-- 顶部栏组件 -->
		<TopBar />
		<!-- 登录内容组件 -->
		<LoginContent />
	</view>
</template>

<script setup>
	// 导入组件
	import TopBar from '../../components/login/TopBar.vue'; // 顶部栏组件
	import LoginContent from '../../components/login/LoginContent.vue'; // 登录内容组件
</script>

<style lang="scss">
	.login {
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