<template>
	<!-- 顶部栏容器 -->
	<view class="top-bar">
		<!-- 导航栏组件 -->
		<wd-navbar :zIndex="1000" :bordered="false">
			<!-- 右侧插槽：显示注册文本 -->
			<template #right>
				<text class="register-text" @click="handleRegister">注册</text>
			</template>
		</wd-navbar>
	</view>
</template>

<script setup>
	// 处理注册文本点击事件
	const handleRegister = () => {
		uni.navigateTo({
			url: '/pages/register/register' // 跳转到注册页面
		});
	};
</script>

<style>
</style>