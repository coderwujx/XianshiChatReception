<template>
	<!-- 顶部栏容器 -->
	<view class="top-bar">
		<!-- 导航栏组件 -->
		<wd-navbar :zIndex="1000" :bordered="false">
			<!-- 左侧插槽：显示头像 -->
			<template #left>
				<wd-icon name="thin-arrow-left" size="40rpx" @click="handleBack" />
			</template>
		</wd-navbar>
	</view>
</template>

<script setup>
	// 处理返回按钮点击事件
	const handleBack = () => {
		uni.navigateTo({
			url: '/pages/login/login' // 跳转到登录页面
		});
	};
</script>

<style lang="scss">
</style>