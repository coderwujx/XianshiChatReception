<template>
	<view class="top-bar"> <!-- 顶部栏容器 -->
		<wd-navbar title="贤时即聊">
			<template #left>
				<wd-img :width="35" :height="35" round="true" :src="leftImageSrc" />
			</template>
			<template #right>
				<view class="search">
					<wd-icon name="search" size="18" />
				</view>
				<view class="add">
					<wd-icon name="add-circle" size="36rpx" />
				</view>
			</template>
		</wd-navbar>
	</view>
</template>

<script setup>
	const props = defineProps({
		leftImageSrc: String,
	});
</script>

<style lang="scss">
	.top-bar {
		position: fixed;
		/* 固定定位 */
		top: var(--status-bar-height);
		/* 放置在状态栏下方 */
		left: 0;
		right: 0;
		z-index: 1000;
		/* 确保顶部栏在最上层 */
		border-bottom: 1rpx solid $uni-border-color;

		.search {
			height: 100%;
			width: 100rpx;
		}

		.add {
			height: 100%;
			width: 75rpx;
		}
	}
</style>