<template>
	<!-- 顶部栏容器 -->
	<view class="top-bar">
		<!-- 导航栏组件 -->
		<wd-navbar :zIndex="1000" :bordered="false">
			<!-- 左侧插槽：显示关闭图标 -->
			<template #left>
				<wd-icon name="close" size="40rpx" />
			</template>
			<!-- 右侧插槽：显示注册文本 -->
			<template #right>
				<text class="register-text">注册</text>
			</template>
		</wd-navbar>
	</view>
</template>

<script setup>
</script>

<style>
</style>