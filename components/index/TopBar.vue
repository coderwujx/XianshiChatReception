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
		border-bottom: 1rpx solid $uni-border-color;

		.search {
			height: 100%;
			width: 100rpx;
		}

		.add {
			height: 100%;
			width: 100rpx;
		}
	}
</style>