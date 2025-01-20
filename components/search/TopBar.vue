<template>
	<view class="top-bar">
		<wd-navbar left-text="返回" right-text="搜索" left-arrow @click-left="handleLeft">
			<template #title>
				<view class="search-box">
					<wd-search v-model="keyword" hide-cancel placeholder-left />
				</view>
			</template>
		</wd-navbar>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue'
	//搜索框搜索的数据
	const keyword = ref("")
	//点击左侧按钮返回首页
	const handleLeft = () => {
		uni.navigateBack({
			delta: 1
		});
	}
</script>

<style lang="scss">
	.top-bar {
		.search-box {
			display: flex;
			height: 100%;
			align-items: center;
			--wot-search-padding: 0;
			--wot-search-side-padding: 0;

			:deep() {
				.wd-search {
					background: transparent;
				}
			}
		}
	}
</style>