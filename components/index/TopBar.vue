<template>
	<!-- 顶部栏容器 -->
	<view class="top-bar">
		<!-- 导航栏组件 -->
		<wd-navbar title="贤时即聊">
			<!-- 左侧插槽：显示头像 -->
			<template #left>
				<wd-img :width="35" :height="35" :round="true" :src="leftImageSrc" />
			</template>
			<!-- 右侧插槽：显示搜索和添加图标 -->
			<template #right>
				<!-- 搜索图标 -->
				<view class="search" @click="handleSearch">
					<wd-icon name="search" size="18" />
				</view>
				<!-- 添加图标 -->
				<view class="add" @click="handleAdd">
					<wd-icon name="add-circle" size="36rpx" />
				</view>
			</template>
		</wd-navbar>
	</view>
</template>

<script setup>
	// 定义组件接收的属性
	const props = defineProps({
		leftImageSrc: {
			type: String,
			default: '', // 左侧头像图片地址，默认为空
		},
	});

	const handleSearch = () => {
		console.log('点击了搜索图标');
		// 搜索逻辑
	};
	const handleAdd = () => {
		console.log('点击了添加图标');
		// 添加逻辑
	};
</script>

<style lang="scss">
	.top-bar {
		position: fixed; // 固定定位
		top: var(--status-bar-height); // 放置在状态栏下方
		left: 0;
		right: 0;
		z-index: 1000; // 确保顶部栏在最上层
		border-bottom: 1rpx solid $uni-border-color; // 底部边框

		// 搜索图标容器
		.search {
			height: 100%; // 高度与父容器一致
			width: 100rpx; // 固定宽度
			display: flex;
			align-items: center; // 垂直居中
			justify-content: center; // 水平居中
		}

		// 添加图标容器
		.add {
			height: 100%; // 高度与父容器一致
			width: 75rpx; // 固定宽度
			display: flex;
			align-items: center; // 垂直居中
			justify-content: center; // 水平居中
		}
	}
</style>